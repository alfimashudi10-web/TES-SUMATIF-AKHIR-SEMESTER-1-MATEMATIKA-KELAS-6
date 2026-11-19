import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Matematika
 * Lingkup Materi: Pecahan dan Desimal, Rasio (50 Butir Soal)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengubah bentuk pecahan biasa menjadi bilangan desimal.',
    indikatorSoal: 'Disajikan gambar potongan pizza (pecahan 3/8), peserta didik dapat menentukan bentuk bilangan desimal yang senilai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi perkalian pecahan dengan bilangan asli.',
    indikatorSoal: 'Disajikan narasi pembelian beberapa bungkus tepung dengan berat pecahan, peserta didik dapat menentukan berat seluruh tepung dalam desimal.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat merepresentasikan bagian yang diarsir sebagai pecahan dan bilangan desimal.',
    indikatorSoal: 'Disajikan gambar petak 4 × 5 dengan 11 petak diarsir, peserta didik dapat menentukan nilai desimal bagian yang diarsir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pembagian pecahan campuran dengan pecahan biasa.',
    indikatorSoal: 'Disajikan panjang pita berbentuk pecahan campuran yang dipotong sama panjang, peserta didik dapat menentukan banyak potongan pita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menentukan posisi bilangan desimal pada garis bilangan dan menjumlahkannya dengan pecahan.',
    indikatorSoal: 'Disajikan garis bilangan 0 sampai 1 dengan titik P pada posisi tertentu, peserta didik dapat menghitung hasil penjumlahan nilai titik P dengan 1/4.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan dan mengurutkan berbagai bentuk bilangan (pecahan, desimal, persen).',
    indikatorSoal: 'Disajikan empat bilangan berbeda bentuk (desimal, pecahan, persen), peserta didik dapat mengurutkannya dari yang terkecil hingga terbesar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah pembagian bilangan desimal dengan bilangan cacah.',
    indikatorSoal: 'Disajikan gambar gelas ukur berisi 1,5 liter sirup yang dituang rata ke 6 gelas, peserta didik dapat menentukan isi tiap gelas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi hitung penjumlahan dan pengurangan bilangan desimal.',
    indikatorSoal: 'Disajikan cerita tentang panjang pita awal, pita yang digunakan, dan pita yang dibeli lagi, peserta didik dapat menghitung panjang pita akhir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah pembagian bilangan desimal dengan bilangan desimal.',
    indikatorSoal: 'Disajikan persediaan gula desimal yang dikemas ke dalam kantong ukuran desimal tertentu, peserta didik dapat menentukan banyak kantong yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan masalah kontekstual yang melibatkan operasi hitung campuran pecahan dan desimal.',
    indikatorSoal: 'Disajikan berat panen jeruk (desimal), sebagian dijual (pecahan) dan sisanya dibagi rata, peserta didik dapat menghitung bagian tiap penerima.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyatakan dan menyederhanakan rasio dari dua kumpulan benda konkret.',
    indikatorSoal: 'Disajikan gambar dua kelompok apel dengan warna berbeda, peserta didik dapat menentukan rasio paling sederhananya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menggunakan konsep rasio bagian terhadap keseluruhan untuk menentukan jumlah total.',
    indikatorSoal: 'Disajikan rasio siswa laki-laki dan perempuan beserta banyak siswa perempuan, peserta didik dapat menghitung jumlah seluruh siswa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah perbandingan senilai menggunakan model diagram batang.',
    indikatorSoal: 'Disajikan diagram batang rasio tabungan dua anak dan selisihnya, peserta didik dapat menentukan jumlah tabungan mereka berdua.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio satuan dan menerapkannya pada permasalahan proporsional.',
    indikatorSoal: 'Disajikan jarak tempuh kendaraan beserta pemakaian bensin, peserta didik dapat menentukan jarak tempuh untuk volume bensin lain.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menerapkan konsep rasio skala pada denah atau peta untuk menghitung jarak sebenarnya.',
    indikatorSoal: 'Disajikan gambar denah jarak dua tempat dan skalanya, peserta didik dapat menghitung jarak sebenarnya dalam kilometer.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menggunakan rasio untuk menyesuaikan takaran bahan dalam resep.',
    indikatorSoal: 'Disajikan rasio sirup dan air serta volume air yang digunakan, peserta didik dapat menghitung banyak sirup yang diperlukan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah rasio umur berdasarkan jumlah kedua besaran.',
    indikatorSoal: 'Disajikan rasio umur kakek dan cucu serta jumlah umur keduanya, peserta didik dapat menentukan umur cucu.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan nilai satuan dua paket penawaran harga menggunakan rasio.',
    indikatorSoal: 'Disajikan gambar dua kartu promo paket buku dengan isi dan harga berbeda, peserta didik dapat menentukan paket yang lebih hemat dan selisih harganya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan nilai suatu besaran pada perbandingan tiga unsur bertingkat.',
    indikatorSoal: 'Disajikan dua rasio yang saling terkait (A:B dan B:C) beserta nilai A, peserta didik dapat menganalisis nilai C.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan masalah perbandingan berbalik nilai pada konteks pekerjaan dan waktu.',
    indikatorSoal: 'Disajikan lama pekerjaan oleh sejumlah pekerja, peserta didik dapat menghitung waktu penyelesaian jika jumlah pekerja ditambah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi berbagai representasi senilai dari suatu pecahan (pecahan sederhana, desimal, persen).',
    indikatorSoal: 'Disajikan diagram 10 petak dengan 6 petak diarsir, peserta didik dapat memilih semua bilangan yang senilai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengevaluasi perbandingan nilai antar bilangan pecahan, desimal, dan persen.',
    indikatorSoal: 'Disajikan tiga bilangan berbeda bentuk, peserta didik dapat memilih pernyataan perbandingan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengonversi pecahan campuran ke desimal serta menghitung jumlah dan selisihnya.',
    indikatorSoal: 'Disajikan berat dua jenis buah dalam desimal dan pecahan campuran, peserta didik dapat memilih pernyataan berat yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menafsirkan volume zat cair pada alat ukur dalam bentuk pecahan dan desimal.',
    indikatorSoal: 'Disajikan gambar gelas ukur berisi 0,75 liter air, peserta didik dapat menentukan kebenaran pernyataan pecahan senilai dan sisa kapasitas.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis hasil operasi perkalian dan pembagian pecahan maupun desimal.',
    indikatorSoal: 'Disajikan tiga ekspresi perkalian/pembagian pecahan dan desimal, peserta didik dapat menentukan ekspresi mana saja yang bernilai 1,5.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio antar bagian serta rasio bagian terhadap keseluruhan dari gambar.',
    indikatorSoal: 'Disajikan gambar kumpulan dua jenis bangun berwarna, peserta didik dapat memilih semua pernyataan rasio yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis rasio bagian terhadap bagian, keseluruhan, dan selisihnya.',
    indikatorSoal: 'Disajikan data jumlah siswa yang gemar dua mata pelajaran, peserta didik dapat memilih pernyataan rasio yang sesuai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menskalakan perbandingan bahan resep secara proporsional.',
    indikatorSoal: 'Disajikan takaran resep dasar kue dan jumlah tepung yang diperbesar, peserta didik dapat memilih takaran bahan lain yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis ukuran panjang, lebar, dan luas bangun datar dari rasio dan kelilingnya.',
    indikatorSoal: 'Disajikan diagram rasio panjang dan lebar kebun beserta kelilingnya, peserta didik dapat menentukan pernyataan ukuran sebenarnya yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan rasio harga satuan dari dua toko yang berbeda.',
    indikatorSoal: 'Disajikan harga beberapa alat tulis di dua toko, peserta didik dapat memilih pernyataan perbandingan harga yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menentukan pecahan bagian yang diarsir, komplemennya, serta bentuk desimalnya.',
    indikatorSoal: 'Disajikan gambar lingkaran 6 bagian dengan 4 bagian diarsir, peserta didik dapat menilai Benar/Salah pada 3 pernyataan terkait pecahan dan desimalnya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi hitung campuran pecahan dan desimal dalam konteks kebutuhan rumah tangga.',
    indikatorSoal: 'Disajikan data berat beras dan gula serta bagian beras yang dimasak, peserta didik dapat mengevaluasi kebenaran 3 pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menghubungkan operasi pembagian desimal dengan pecahan dalam permasalahan pengukuran.',
    indikatorSoal: 'Disajikan panjang tali desimal yang dipotong dengan ukuran pecahan, peserta didik dapat menilai kebenaran 3 pernyataan hasil potongan dan sisa.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat membaca nilai pecahan/desimal pada garis bilangan dan menentukan selisihnya.',
    indikatorSoal: 'Disajikan garis bilangan 0 sampai 2 dengan dua titik bertanda huruf, peserta didik dapat menilai kebenaran 3 pernyataan nilai dan selisihnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis pembagian luas lahan berdasarkan bagian pecahan dan desimal.',
    indikatorSoal: 'Disajikan luas kebun desimal yang ditanami beberapa jenis tanaman dalam porsi pecahan dan desimal, peserta didik dapat mengevaluasi luas tiap bagian.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan rasio bagian, rasio keseluruhan, dan persentase dari gambar benda.',
    indikatorSoal: 'Disajikan gambar kumpulan kelereng dua warna, peserta didik dapat menilai kebenaran 3 pernyataan rasio dan persentasenya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menghitung ukuran panjang, lebar, dan luas sebenarnya berdasarkan skala denah.',
    indikatorSoal: 'Disajikan ukuran denah ruang kelas beserta skalanya, peserta didik dapat menilai kebenaran 3 pernyataan dimensi sebenarnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis rasio usia saat ini dan perubahan rasionya pada waktu mendatang.',
    indikatorSoal: 'Disajikan rasio usia dan jumlah usia saat ini, peserta didik dapat menentukan kebenaran usia, selisih, dan rasio 4 tahun mendatang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan dan membandingkan rasio harga satuan dari gambar dua kemasan.',
    indikatorSoal: 'Disajikan gambar dua paket kemasan beras dengan berat dan harga berbeda, peserta didik dapat menilai kebenaran 3 pernyataan harga per kg.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menggunakan rasio senilai untuk memperkirakan kebutuhan bahan pengecatan.',
    indikatorSoal: 'Disajikan perbandingan luas dinding dan volume cat, peserta didik dapat menilai kebenaran 3 pernyataan daya sebar dan kebutuhan cat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  41: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat memasangkan pecahan biasa dengan bilangan desimal yang senilai.',
    indikatorSoal: 'Disajikan tiga pecahan biasa dan empat pilihan desimal, peserta didik dapat menjodohkan pasangan yang senilai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  42: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan operasi penjumlahan, perkalian, dan pembagian pecahan.',
    indikatorSoal: 'Disajikan gambar petak pecahan acuan dan tiga operasi pecahan, peserta didik dapat menjodohkan masing-masing dengan hasil yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  43: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melakukan penjumlahan, pengurangan, dan perkalian bilangan desimal.',
    indikatorSoal: 'Disajikan tiga operasi bilangan desimal dan empat pilihan jawaban, peserta didik dapat menjodohkan pasangan hasil yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  44: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengubah bilangan desimal dan persen ke bentuk pecahan paling sederhana.',
    indikatorSoal: 'Disajikan tiga bilangan desimal/persen, peserta didik dapat menjodohkannya dengan bentuk pecahan paling sederhana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  45: {
    elemen: 'Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan soal cerita pendek terkait pecahan dan desimal.',
    indikatorSoal: 'Disajikan tiga permasalahan kontekstual pecahan/desimal, peserta didik dapat menjodohkan masing-masing dengan hasil akhirnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  46: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyatakan rasio antar bagian dan terhadap keseluruhan dalam bentuk paling sederhana.',
    indikatorSoal: 'Disajikan gambar dua kelompok alat tulis, peserta didik dapat menjodohkan tiga deskripsi perbandingan dengan rasio sederhananya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  47: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menyederhanakan bentuk rasio dua bilangan.',
    indikatorSoal: 'Disajikan tiga rasio bilangan dan empat pilihan rasio sederhana, peserta didik dapat menjodohkan pasangan yang senilai.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  48: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menghitung jarak sebenarnya berdasarkan jarak pada peta dan skala.',
    indikatorSoal: 'Disajikan tiga pasangan data jarak peta dan skala, peserta didik dapat menjodohkannya dengan jarak sebenarnya dalam km.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  49: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat menentukan nilai tiap bagian dan selisih dari diagram batang perbandingan.',
    indikatorSoal: 'Disajikan diagram batang rasio dua jenis burung dan jumlah totalnya, peserta didik dapat menjodohkan jumlah tiap jenis dan selisihnya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  50: {
    elemen: 'Aljabar',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan berbagai masalah proporsi/rasio senilai dalam kehidupan sehari-hari.',
    indikatorSoal: 'Disajikan tiga permasalahan rasio senilai (harga, kecepatan, pemakaian bensin), peserta didik dapat menjodohkannya dengan jawaban yang tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal standar Kurikulum Merdeka
 */
export function getBentukSoalLabel(type: Question['type']): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    case 'menjodohkan':
      return 'Menjodohkan';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  if (q.type === 'menjodohkan') {
    if (q.leftItems && q.correctMatches) {
      return q.leftItems
        .map((left) => `${left.id}→${q.correctMatches?.[left.id] || '-'}`)
        .join(', ');
    }
    return 'Pasangan';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen = q.elemen || (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif || (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('rasio') || t.includes('perbandingan') || t.includes('skala') || t.includes('harga')) {
    return 'Aljabar';
  }
  if (t.includes('pecahan') || t.includes('desimal') || t.includes('persen') || t.includes('bilangan')) {
    return 'Bilangan';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
  };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
    {
      type: 'menjodohkan',
      label: 'Menjodohkan',
      count: typeCountMap.menjodohkan,
      percentage: total > 0 ? Math.round((typeCountMap.menjodohkan / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
