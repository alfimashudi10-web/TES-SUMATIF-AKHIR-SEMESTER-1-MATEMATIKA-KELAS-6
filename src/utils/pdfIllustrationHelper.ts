import { jsPDF } from 'jspdf';
import { QuestionIllustration } from '../types';

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  if (clean.length === 6) {
    const num = parseInt(clean, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  return [59, 130, 246];
}

/**
 * Menggambar ilustrasi vektor ke dokumen jsPDF dan mengembalikan tinggi (mm) yang terpakai.
 */
export function drawIllustrationInPDF(
  doc: jsPDF,
  ill: QuestionIllustration,
  x: number,
  y: number,
  maxWidth: number
): number {
  const startY = y;
  let curY = y;

  if (ill.title) {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(ill.title, x + 2, curY + 3.5);
    curY += 5;
  }

  if (ill.kind === 'fraction_circle') {
    const cx = x + 32;
    const cy = curY + 18;
    const r = 15;
    const [pr, pg, pb] = hexToRgb(ill.primaryColor || '#3b82f6');
    const [sr, sg, sb] = hexToRgb(ill.secondaryColor || '#f59e0b');

    for (let i = 0; i < ill.totalParts; i++) {
      const a1 = (i / ill.totalParts) * Math.PI * 2 - Math.PI / 2;
      const a2 = ((i + 1) / ill.totalParts) * Math.PI * 2 - Math.PI / 2;
      const steps = 16;

      if (i < ill.shadedParts) {
        doc.setFillColor(pr, pg, pb);
      } else if (ill.secondaryParts && i < ill.shadedParts + ill.secondaryParts) {
        doc.setFillColor(sr, sg, sb);
      } else {
        doc.setFillColor(255, 255, 255);
      }

      for (let s = 0; s < steps; s++) {
        const sa1 = a1 + ((a2 - a1) * s) / steps;
        const sa2 = a1 + ((a2 - a1) * (s + 1)) / steps;
        doc.triangle(
          cx,
          cy,
          cx + r * Math.cos(sa1),
          cy + r * Math.sin(sa1),
          cx + r * Math.cos(sa2),
          cy + r * Math.sin(sa2),
          'F'
        );
      }
    }

    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.35);
    doc.circle(cx, cy, r, 'S');
    for (let i = 0; i < ill.totalParts; i++) {
      const a1 = (i / ill.totalParts) * Math.PI * 2 - Math.PI / 2;
      doc.line(cx, cy, cx + r * Math.cos(a1), cy + r * Math.sin(a1));
    }

    curY += 38;
  } else if (ill.kind === 'fraction_grid') {
    const cellSize = Math.min(8, Math.floor((maxWidth - 10) / ill.cols));
    const [pr, pg, pb] = hexToRgb(ill.primaryColor || '#2563eb');
    const [sr, sg, sb] = hexToRgb(ill.secondaryColor || '#10b981');

    for (let r = 0; r < ill.rows; r++) {
      for (let c = 0; c < ill.cols; c++) {
        const idx = r * ill.cols + c;
        if (idx < ill.shadedCount) {
          doc.setFillColor(pr, pg, pb);
        } else if (ill.secondaryCount && idx < ill.shadedCount + ill.secondaryCount) {
          doc.setFillColor(sr, sg, sb);
        } else {
          doc.setFillColor(255, 255, 255);
        }
        doc.setDrawColor(30, 41, 59);
        doc.setLineWidth(0.3);
        doc.rect(x + 4 + c * cellSize, curY + 1 + r * cellSize, cellSize, cellSize, 'FD');
      }
    }
    curY += ill.rows * cellSize + 4;
  } else if (ill.kind === 'number_line') {
    const lineX1 = x + 8;
    const lineX2 = x + Math.min(maxWidth - 12, 130);
    const lineY = curY + 12;
    doc.setDrawColor(15, 23, 42);
    doc.setLineWidth(0.5);
    doc.line(lineX1, lineY, lineX2, lineY);

    for (let i = 0; i <= ill.divisions; i++) {
      const tx = lineX1 + (i / ill.divisions) * (lineX2 - lineX1);
      const isEnd = i === 0 || i === ill.divisions;
      doc.line(tx, lineY - (isEnd ? 2.5 : 1.5), tx, lineY + (isEnd ? 2.5 : 1.5));
      if (isEnd || ill.divisions <= 10) {
        const val = ill.min + (i / ill.divisions) * (ill.max - ill.min);
        const label = Number.isInteger(val) ? String(val) : val.toFixed(1).replace('.', ',');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(71, 85, 105);
        doc.text(label, tx, lineY + 6, { align: 'center' });
      }
    }

    ill.markers.forEach((m) => {
      const ratio = (m.value - ill.min) / (ill.max - ill.min);
      const mx = lineX1 + ratio * (lineX2 - lineX1);
      const [mr, mg, mb] = hexToRgb(m.color || '#dc2626');
      doc.setFillColor(mr, mg, mb);
      doc.circle(mx, lineY, 1.5, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(mr, mg, mb);
      doc.text(m.label, mx, lineY - 3.5, { align: 'center' });
    });

    curY += 22;
  } else if (ill.kind === 'ratio_items') {
    const boxW = Math.min(62, (maxWidth - 16) / 2);
    const maxRows = Math.max(1, Math.ceil(Math.max(ill.leftCount, ill.rightCount) / 6));
    const boxH = Math.max(22, 10 + maxRows * 6 + 2);
    doc.setDrawColor(203, 213, 225);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(x + 2, curY + 1, boxW, boxH, 1.5, 1.5, 'FD');
    doc.roundedRect(x + 12 + boxW, curY + 1, boxW, boxH, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(30, 41, 59);
    doc.text(`${ill.leftLabel} (${ill.leftCount})`, x + 2 + boxW / 2, curY + 6, { align: 'center' });
    doc.text(':', x + 7 + boxW, curY + 13, { align: 'center' });
    doc.text(`${ill.rightLabel} (${ill.rightCount})`, x + 12 + boxW + boxW / 2, curY + 6, { align: 'center' });

    const [lr, lg, lb] = hexToRgb(ill.leftColor);
    const [rr, rg, rb] = hexToRgb(ill.rightColor);
    for (let i = 0; i < ill.leftCount; i++) {
      const col = i % 6;
      const row = Math.floor(i / 6);
      doc.setFillColor(lr, lg, lb);
      doc.circle(x + 10 + col * 7.5, curY + 11 + row * 6, 2, 'F');
    }
    for (let i = 0; i < ill.rightCount; i++) {
      const col = i % 6;
      const row = Math.floor(i / 6);
      doc.setFillColor(rr, rg, rb);
      doc.rect(x + 18 + boxW + col * 7.5, curY + 9 + row * 6, 3.8, 3.8, 'F');
    }

    curY += boxH + 4;
  } else if (ill.kind === 'measuring_cup') {
    const cupX = x + 16;
    const cupY = curY + 2;
    const cupW = 18;
    const cupH = 26;
    const fillRatio = Math.min(1, Math.max(0, ill.currentLiters / ill.maxLiters));
    const fillH = fillRatio * cupH;
    const [lr, lg, lb] = hexToRgb(ill.liquidColor || '#38bdf8');

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(51, 65, 85);
    doc.setLineWidth(0.4);
    doc.rect(cupX, cupY, cupW, cupH, 'FD');

    doc.setFillColor(lr, lg, lb);
    doc.rect(cupX + 0.4, cupY + (cupH - fillH), cupW - 0.8, Math.max(0, fillH - 0.3), 'F');

    const steps = Math.round(ill.maxLiters / (ill.stepLiters || 0.25));
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(51, 65, 85);
    for (let i = 0; i <= steps; i++) {
      const sy = cupY + cupH - (i / steps) * cupH;
      const val = (i / steps) * ill.maxLiters;
      doc.line(cupX + cupW - 4, sy, cupX + cupW, sy);
      doc.text(`${val.toFixed(2).replace(/\.?0+$/, '').replace('.', ',')} L`, cupX + cupW + 2, sy + 1.5);
    }

    curY += cupH + 5;
  } else if (ill.kind === 'comparison_bars') {
    ill.bars.forEach((bar) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(30, 41, 59);
      doc.text(bar.label, x + 2, curY + 4.5);
      const [br, bg, bb] = hexToRgb(bar.color);
      const unitW = Math.min(12, 85 / Math.max(1, bar.totalUnits));
      for (let u = 0; u < bar.units; u++) {
        doc.setFillColor(br, bg, bb);
        doc.setDrawColor(30, 41, 59);
        doc.rect(x + 30 + u * unitW, curY + 1, unitW - 0.8, 5, 'FD');
      }
      if (bar.valueLabel) {
        doc.setFont('helvetica', 'normal');
        doc.text(bar.valueLabel, x + 32 + bar.units * unitW, curY + 4.5);
      }
      curY += 7.5;
    });
    curY += 2;
  } else if (ill.kind === 'map_scale') {
    const boxW = Math.min(maxWidth - 8, 120);
    doc.setFillColor(240, 249, 255);
    doc.setDrawColor(186, 230, 253);
    doc.roundedRect(x + 2, curY + 1, boxW, 20, 1.5, 1.5, 'FD');
    doc.setDrawColor(2, 132, 199);
    doc.setLineWidth(0.5);
    doc.line(x + 18, curY + 9, x + boxW - 14, curY + 9);
    doc.setFillColor(37, 99, 235);
    doc.circle(x + 18, curY + 9, 1.8, 'F');
    doc.setFillColor(220, 38, 38);
    doc.circle(x + boxW - 14, curY + 9, 1.8, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(15, 23, 42);
    doc.text(ill.pointA, x + 18, curY + 14.5, { align: 'center' });
    doc.text(ill.pointB, x + boxW - 14, curY + 14.5, { align: 'center' });
    doc.setTextColor(3, 105, 161);
    doc.text(ill.distanceLabel, x + boxW / 2 + 2, curY + 6.5, { align: 'center' });
    doc.setTextColor(30, 41, 59);
    doc.text(ill.scaleLabel, x + boxW / 2 + 2, curY + 18.5, { align: 'center' });

    curY += 24;
  } else if (ill.kind === 'price_promo') {
    const cardW = Math.min(62, (maxWidth - 10) / Math.max(1, ill.cards.length));
    ill.cards.forEach((c, idx) => {
      const [cr, cg, cb] = hexToRgb(c.accentColor);
      const cx = x + 2 + idx * (cardW + 4);
      doc.setDrawColor(cr, cg, cb);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(cx, curY + 1, cardW, 17, 1.5, 1.5, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(15, 23, 42);
      doc.text(c.name, cx + 3, curY + 5.5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(71, 85, 105);
      doc.text(c.qtyLabel, cx + 3, curY + 10.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text(c.priceLabel, cx + 3, curY + 15.5);
    });
    curY += 21;
  }

  if (ill.caption) {
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(ill.caption, x + 2, curY + 2.5);
    curY += 5;
  }

  doc.setTextColor(0, 0, 0);
  doc.setLineWidth(0.2);
  return Math.max(10, curY - startY + 2);
}
