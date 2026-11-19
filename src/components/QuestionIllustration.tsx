import React from 'react';
import { QuestionIllustration as QuestionIllustrationData } from '../types';

interface QuestionIllustrationProps {
  illustration: QuestionIllustrationData;
  compact?: boolean;
}

function renderShape(
  shape: 'circle' | 'square' | 'triangle' | 'star' = 'circle',
  cx: number,
  cy: number,
  color: string,
  key: string
) {
  if (shape === 'square') {
    return (
      <rect
        key={key}
        x={cx - 9}
        y={cy - 9}
        width={18}
        height={18}
        rx={3}
        fill={color}
        stroke="#1e293b"
        strokeWidth={1.2}
      />
    );
  }
  if (shape === 'triangle') {
    return (
      <polygon
        key={key}
        points={`${cx},${cy - 10} ${cx + 10},${cy + 8} ${cx - 10},${cy + 8}`}
        fill={color}
        stroke="#1e293b"
        strokeWidth={1.2}
      />
    );
  }
  if (shape === 'star') {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 10 : 4.5;
      const angle = (Math.PI / 5) * i - Math.PI / 2;
      pts.push(`${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`);
    }
    return (
      <polygon
        key={key}
        points={pts.join(' ')}
        fill={color}
        stroke="#1e293b"
        strokeWidth={1.2}
      />
    );
  }
  return (
    <circle
      key={key}
      cx={cx}
      cy={cy}
      r={9}
      fill={color}
      stroke="#1e293b"
      strokeWidth={1.2}
    />
  );
}

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({
  illustration,
  compact = false,
}) => {
  const containerClass = compact
    ? 'my-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50/80 max-w-md'
    : 'mb-5 p-4 rounded-2xl border border-blue-100 bg-slate-50/90 max-w-lg';

  return (
    <div className={containerClass}>
      {illustration.title && (
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
          {illustration.title}
        </div>
      )}

      {/* 1. Lingkaran Pecahan (Pizza / Kue / Diagram Lingkaran) */}
      {illustration.kind === 'fraction_circle' && (
        <div className="flex flex-col items-center">
          <svg
            viewBox="0 0 180 180"
            className={compact ? 'w-32 h-32' : 'w-44 h-44'}
            role="img"
            aria-label={illustration.title || 'Diagram Lingkaran Pecahan'}
          >
            {Array.from({ length: illustration.totalParts }).map((_, idx) => {
              const startAngle = (idx / illustration.totalParts) * Math.PI * 2 - Math.PI / 2;
              const endAngle = ((idx + 1) / illustration.totalParts) * Math.PI * 2 - Math.PI / 2;
              const cx = 90;
              const cy = 90;
              const r = 74;
              const x1 = cx + r * Math.cos(startAngle);
              const y1 = cy + r * Math.sin(startAngle);
              const x2 = cx + r * Math.cos(endAngle);
              const y2 = cy + r * Math.sin(endAngle);
              const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

              let fill = '#ffffff';
              if (idx < illustration.shadedParts) {
                fill = illustration.primaryColor || '#3b82f6';
              } else if (
                illustration.secondaryParts &&
                idx < illustration.shadedParts + illustration.secondaryParts
              ) {
                fill = illustration.secondaryColor || '#f59e0b';
              }

              const d = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

              return (
                <path
                  key={idx}
                  d={d}
                  fill={fill}
                  stroke="#1e293b"
                  strokeWidth={2}
                />
              );
            })}
            <circle cx={90} cy={90} r={74} fill="none" stroke="#0f172a" strokeWidth={2.2} />
          </svg>
        </div>
      )}

      {/* 2. Kotak Grid Pecahan / Desimal */}
      {illustration.kind === 'fraction_grid' && (
        <div className="flex flex-col items-center">
          {(() => {
            const cellW = Math.min(34, Math.floor(260 / illustration.cols));
            const cellH = Math.min(34, Math.floor(150 / illustration.rows));
            const svgW = illustration.cols * cellW + 16;
            const svgH = illustration.rows * cellH + 16;
            return (
              <svg
                viewBox={`0 0 ${svgW} ${svgH}`}
                className="max-w-full h-auto"
                style={{ maxHeight: compact ? '130px' : '180px' }}
                role="img"
                aria-label={illustration.title || 'Diagram Petak Pecahan'}
              >
                {Array.from({ length: illustration.rows * illustration.cols }).map((_, idx) => {
                  const r = Math.floor(idx / illustration.cols);
                  const c = idx % illustration.cols;
                  let fill = '#ffffff';
                  if (idx < illustration.shadedCount) {
                    fill = illustration.primaryColor || '#2563eb';
                  } else if (
                    illustration.secondaryCount &&
                    idx < illustration.shadedCount + illustration.secondaryCount
                  ) {
                    fill = illustration.secondaryColor || '#10b981';
                  }
                  return (
                    <rect
                      key={idx}
                      x={8 + c * cellW}
                      y={8 + r * cellH}
                      width={cellW}
                      height={cellH}
                      fill={fill}
                      stroke="#1e293b"
                      strokeWidth={1.6}
                    />
                  );
                })}
              </svg>
            );
          })()}
        </div>
      )}

      {/* 3. Garis Bilangan Pecahan & Desimal */}
      {illustration.kind === 'number_line' && (
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 420 96"
            className="w-full h-auto"
            role="img"
            aria-label={illustration.title || 'Garis Bilangan'}
          >
            {/* Main horizontal line */}
            <line x1={26} y1={50} x2={394} y2={50} stroke="#0f172a" strokeWidth={2.5} />
            <polygon points="394,45 404,50 394,55" fill="#0f172a" />
            <polygon points="26,45 16,50 26,55" fill="#0f172a" />

            {/* Tick marks */}
            {Array.from({ length: illustration.divisions + 1 }).map((_, idx) => {
              const x = 35 + (idx / illustration.divisions) * 350;
              const val =
                illustration.min +
                (idx / illustration.divisions) * (illustration.max - illustration.min);
              const isEndpoint = idx === 0 || idx === illustration.divisions;
              return (
                <g key={idx}>
                  <line
                    x1={x}
                    y1={isEndpoint ? 39 : 43}
                    x2={x}
                    y2={isEndpoint ? 61 : 57}
                    stroke="#334155"
                    strokeWidth={isEndpoint ? 2.2 : 1.5}
                  />
                  {(isEndpoint || illustration.divisions <= 10) && (
                    <text
                      x={x}
                      y={76}
                      textAnchor="middle"
                      fontSize={10}
                      fontWeight={isEndpoint ? '700' : '500'}
                      fill="#475569"
                    >
                      {Number.isInteger(val) ? val : val.toFixed(1).replace('.', ',')}
                    </text>
                  )}
                </g>
              );
            })}

            {/* Highlight markers */}
            {illustration.markers.map((m, idx) => {
              const ratio = (m.value - illustration.min) / (illustration.max - illustration.min);
              const x = 35 + ratio * 350;
              const color = m.color || '#dc2626';
              return (
                <g key={idx}>
                  <circle cx={x} cy={50} r={6.5} fill={color} stroke="#ffffff" strokeWidth={1.8} />
                  <rect x={x - 14} y={12} width={28} height={20} rx={5} fill={color} />
                  <text
                    x={x}
                    y={26}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight="800"
                    fill="#ffffff"
                  >
                    {m.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* 4. Ilustrasi Rasio Kumpulan Benda */}
      {illustration.kind === 'ratio_items' && (() => {
        const maxRows = Math.max(
          1,
          Math.ceil(Math.max(illustration.leftCount, illustration.rightCount) / 6)
        );
        const boxH = Math.max(104, 42 + maxRows * 28);
        const svgH = boxH + 16;
        const colonY = 8 + boxH / 2 + 7;

        return (
          <div className="w-full">
            <svg
              viewBox={`0 0 420 ${svgH}`}
              className="w-full h-auto"
              role="img"
              aria-label={illustration.title || 'Ilustrasi Perbandingan Benda'}
            >
              {/* Left Group Box */}
              <rect
                x={8}
                y={8}
                width={194}
                height={boxH}
                rx={10}
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth={1.5}
              />
              <text x={105} y={26} textAnchor="middle" fontSize={11} fontWeight="700" fill="#1e293b">
                {illustration.leftLabel} ({illustration.leftCount})
              </text>
              {Array.from({ length: illustration.leftCount }).map((_, idx) => {
                const perRow = 6;
                const col = idx % perRow;
                const row = Math.floor(idx / perRow);
                const countInRow = Math.min(perRow, illustration.leftCount - row * perRow);
                const startX = 105 - ((countInRow - 1) * 26) / 2;
                const cx = startX + col * 26;
                const cy = 50 + row * 28;
                return renderShape(
                  illustration.leftShape || 'circle',
                  cx,
                  cy,
                  illustration.leftColor,
                  `L-${idx}`
                );
              })}

              {/* Colon separator */}
              <text x={210} y={colonY} textAnchor="middle" fontSize={22} fontWeight="900" fill="#334155">
                :
              </text>

              {/* Right Group Box */}
              <rect
                x={218}
                y={8}
                width={194}
                height={boxH}
                rx={10}
                fill="#ffffff"
                stroke="#cbd5e1"
                strokeWidth={1.5}
              />
              <text x={315} y={26} textAnchor="middle" fontSize={11} fontWeight="700" fill="#1e293b">
                {illustration.rightLabel} ({illustration.rightCount})
              </text>
              {Array.from({ length: illustration.rightCount }).map((_, idx) => {
                const perRow = 6;
                const col = idx % perRow;
                const row = Math.floor(idx / perRow);
                const countInRow = Math.min(perRow, illustration.rightCount - row * perRow);
                const startX = 315 - ((countInRow - 1) * 26) / 2;
                const cx = startX + col * 26;
                const cy = 50 + row * 28;
                return renderShape(
                  illustration.rightShape || 'square',
                  cx,
                  cy,
                  illustration.rightColor,
                  `R-${idx}`
                );
              })}
            </svg>
          </div>
        );
      })()}

      {/* 5. Gelas Ukur Desimal / Pecahan */}
      {illustration.kind === 'measuring_cup' && (
        <div className="flex flex-col items-center">
          {(() => {
            const fillRatio = Math.min(1, Math.max(0, illustration.currentLiters / illustration.maxLiters));
            const tankH = 120;
            const tankY = 20;
            const fillH = fillRatio * tankH;
            const fillY = tankY + (tankH - fillH);
            const steps = Math.round(illustration.maxLiters / (illustration.stepLiters || 0.25));
            return (
              <svg
                viewBox="0 0 220 160"
                className={compact ? 'w-44 h-32' : 'w-52 h-40'}
                role="img"
                aria-label={illustration.title || 'Gelas Ukur'}
              >
                {/* Glass body */}
                <rect
                  x={60}
                  y={tankY}
                  width={80}
                  height={tankH}
                  rx={6}
                  fill="#ffffff"
                  stroke="#334155"
                  strokeWidth={2.5}
                />
                {/* Liquid */}
                <rect
                  x={62}
                  y={fillY}
                  width={76}
                  height={Math.max(0, fillH - 2)}
                  rx={4}
                  fill={illustration.liquidColor || '#38bdf8'}
                  opacity={0.85}
                />
                {/* Scale ticks */}
                {Array.from({ length: steps + 1 }).map((_, idx) => {
                  const val = (idx / steps) * illustration.maxLiters;
                  const y = tankY + tankH - (idx / steps) * tankH;
                  return (
                    <g key={idx}>
                      <line x1={124} y1={y} x2={140} y2={y} stroke="#0f172a" strokeWidth={1.6} />
                      <text x={146} y={y + 3.5} fontSize={9.5} fontWeight="600" fill="#334155">
                        {val.toFixed(2).replace(/\.?0+$/, '').replace('.', ',')} L
                      </text>
                    </g>
                  );
                })}
                {/* Current pointer */}
                <polygon points={`50,${fillY} 58,${fillY - 4} 58,${fillY + 4}`} fill="#dc2626" />
              </svg>
            );
          })()}
        </div>
      )}

      {/* 6. Diagram Batang Perbandingan (Tape Diagram) */}
      {illustration.kind === 'comparison_bars' && (
        <div className="w-full space-y-2">
          <svg
            viewBox={`0 0 420 ${illustration.bars.length * 42 + 12}`}
            className="w-full h-auto"
            role="img"
            aria-label={illustration.title || 'Diagram Batang Rasio'}
          >
            {illustration.bars.map((bar, bIdx) => {
              const y = 8 + bIdx * 42;
              const maxBarW = 240;
              const unitW = maxBarW / Math.max(1, bar.totalUnits);
              return (
                <g key={bIdx}>
                  <text x={8} y={y + 20} fontSize={11} fontWeight="700" fill="#1e293b">
                    {bar.label}
                  </text>
                  {Array.from({ length: bar.units }).map((_, uIdx) => (
                    <rect
                      key={uIdx}
                      x={100 + uIdx * unitW}
                      y={y + 4}
                      width={unitW - 2}
                      height={24}
                      rx={3}
                      fill={bar.color}
                      stroke="#1e293b"
                      strokeWidth={1.2}
                    />
                  ))}
                  {bar.valueLabel && (
                    <text
                      x={108 + bar.units * unitW}
                      y={y + 20}
                      fontSize={10.5}
                      fontWeight="700"
                      fill="#334155"
                    >
                      {bar.valueLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* 7. Denah / Peta Berskala */}
      {illustration.kind === 'map_scale' && (
        <div className="w-full">
          <svg
            viewBox="0 0 420 110"
            className="w-full h-auto"
            role="img"
            aria-label={illustration.title || 'Peta Skala'}
          >
            <rect
              x={8}
              y={8}
              width={404}
              height={94}
              rx={10}
              fill="#f0f9ff"
              stroke="#bae6fd"
              strokeWidth={1.5}
            />
            {/* Dashed path */}
            <line
              x1={75}
              y1={46}
              x2={345}
              y2={46}
              stroke="#0284c7"
              strokeWidth={3}
              strokeDasharray="6 4"
            />
            {/* Point A */}
            <circle cx={75} cy={46} r={9} fill="#2563eb" stroke="#ffffff" strokeWidth={2} />
            <text x={75} y={70} textAnchor="middle" fontSize={11} fontWeight="700" fill="#0f172a">
              {illustration.pointA}
            </text>
            {/* Point B */}
            <circle cx={345} cy={46} r={9} fill="#dc2626" stroke="#ffffff" strokeWidth={2} />
            <text x={345} y={70} textAnchor="middle" fontSize={11} fontWeight="700" fill="#0f172a">
              {illustration.pointB}
            </text>
            {/* Distance Pill */}
            <rect x={165} y={24} width={90} height={20} rx={6} fill="#ffffff" stroke="#0284c7" />
            <text x={210} y={38} textAnchor="middle" fontSize={10.5} fontWeight="800" fill="#0369a1">
              {illustration.distanceLabel}
            </text>
            {/* Scale Label */}
            <rect x={135} y={76} width={150} height={20} rx={5} fill="#1e293b" />
            <text x={210} y={90} textAnchor="middle" fontSize={10} fontWeight="700" fill="#ffffff">
              {illustration.scaleLabel}
            </text>
          </svg>
        </div>
      )}

      {/* 8. Kartu Promo / Perbandingan Harga */}
      {illustration.kind === 'price_promo' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {illustration.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white border-2 shadow-2xs flex flex-col justify-between"
              style={{ borderColor: card.accentColor }}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-extrabold text-slate-900">{card.name}</span>
                {card.badge && (
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: card.accentColor }}
                  >
                    {card.badge}
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-600 font-medium">{card.qtyLabel}</div>
              <div className="text-sm font-black mt-1" style={{ color: card.accentColor }}>
                {card.priceLabel}
              </div>
            </div>
          ))}
        </div>
      )}

      {illustration.caption && (
        <p className="text-[11px] text-slate-500 font-medium text-center mt-2">
          {illustration.caption}
        </p>
      )}
    </div>
  );
};
