import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN 1: PILIHAN GANDA (20 SOAL - ID 1 s.d. 20)
  // ============================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pecahan dan Desimal',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar potongan pizza berikut. Bagian yang berwarna biru menunjukkan sisa pizza yang belum dimakan. Bentuk bilangan desimal yang senilai dengan bagian pizza yang berwarna biru adalah...',
    illustration: {
      kind: 'fraction_circle',
      title: 'Gambar Potongan Pizza (8 Bagian Sama Besar)',
      totalParts: 8,
      shadedParts: 3,
      primaryColor: '#3b82f6',
      caption: '3 dari 8 bagian berwarna biru',
    },
    options: [
      { id: 'A', text: '0,305' },
      { id: 'B', text: '0,375' },
      { id: 'C', text: '0,38' },
      { id: 'D', text: '0,625' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bagian berwarna biru = 3 dari 8 bagian = 3/8.\nMengubah 3/8 ke bentuk desimal:\n3 ÷ 8 = 0,375 (atau 3/8 × 125/125 = 375/1000 = 0,375).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    text: 'Ibu membeli 6 bungkus tepung terigu untuk membuat kue. Setiap bungkus memiliki berat 3/4 kg. Berat seluruh tepung terigu yang dibeli Ibu adalah...',
    options: [
      { id: 'A', text: '3,5 kg' },
      { id: 'B', text: '4,25 kg' },
      { id: 'C', text: '4,5 kg' },
      { id: 'D', text: '5,25 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total berat tepung = 6 × 3/4 kg = 18/4 kg = 4 2/4 kg = 4 1/2 kg = 4,5 kg.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Pecahan dan Desimal',
    difficulty: 'Mudah',
    text: 'Perhatikan petak persegi berikut. Sebagian petak telah diarsir dengan warna biru. Nilai pecahan yang diarsir jika dinyatakan dalam bentuk desimal adalah...',
    illustration: {
      kind: 'fraction_grid',
      title: 'Diagram Petak 4 × 5',
      rows: 4,
      cols: 5,
      shadedCount: 11,
      primaryColor: '#2563eb',
      caption: '11 petak diarsir dari total 20 petak',
    },
    options: [
      { id: 'A', text: '0,55' },
      { id: 'B', text: '0,45' },
      { id: 'C', text: '0,51' },
      { id: 'D', text: '0,65' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak petak diarsir = 11 dari 20 petak = 11/20.\nUbah penyebut menjadi 100: (11 × 5) / (20 × 5) = 55/100 = 0,55.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Dayu memiliki pita sepanjang 3 1/2 meter. Pita tersebut dipotong menjadi beberapa bagian sama panjang, dengan panjang masing-masing potongan 1/4 meter. Banyak potongan pita yang diperoleh Dayu adalah...',
    options: [
      { id: 'A', text: '7 potong' },
      { id: 'B', text: '10 potong' },
      { id: 'C', text: '12 potong' },
      { id: 'D', text: '14 potong' },
    ],
    correctAnswer: 'D',
    explanation:
      '3 1/2 = 7/2 meter.\nBanyak potongan = 7/2 ÷ 1/4 = 7/2 × 4/1 = 28/2 = 14 potong.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Garis Bilangan Desimal & Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan letak titik P pada garis bilangan berikut. Jika nilai pada titik P dijumlahkan dengan 1/4, maka hasil penjumlahannya adalah...',
    illustration: {
      kind: 'number_line',
      title: 'Garis Bilangan 0 sampai 1',
      min: 0,
      max: 1,
      divisions: 10,
      markers: [{ value: 0.7, label: 'P', color: '#dc2626' }],
      caption: 'Garis antara 0 dan 1 dibagi menjadi 10 bagian sama besar',
    },
    options: [
      { id: 'A', text: '0,85' },
      { id: 'B', text: '0,90' },
      { id: 'C', text: '0,95' },
      { id: 'D', text: '1,05' },
    ],
    correctAnswer: 'C',
    explanation:
      'Setiap langkah pada garis bilangan bernilai 1 ÷ 10 = 0,1.\nTitik P terletak pada langkah ke-7, sehingga P = 0,7.\n1/4 = 0,25.\nHasil penjumlahan = 0,7 + 0,25 = 0,95.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Mengurutkan Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Urutan bilangan berikut dari yang terkecil hingga yang terbesar adalah...\n0,65  ;  3/4  ;  60%  ;  0,7',
    options: [
      { id: 'A', text: '0,65 ; 60% ; 0,7 ; 3/4' },
      { id: 'B', text: '60% ; 0,65 ; 0,7 ; 3/4' },
      { id: 'C', text: '60% ; 0,7 ; 0,65 ; 3/4' },
      { id: 'D', text: '3/4 ; 0,7 ; 0,65 ; 60%' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ubah semua bilangan ke bentuk desimal dua angka di belakang koma:\n0,65 = 0,65\n3/4 = 0,75\n60% = 0,60\n0,7 = 0,70\nUrutan dari terkecil: 0,60 (60%) ; 0,65 ; 0,70 (0,7) ; 0,75 (3/4).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Pembagian Desimal',
    difficulty: 'Mudah',
    text: 'Sebuah gelas ukur berisi sirup jeruk seperti ditunjukkan pada gambar. Seluruh sirup tersebut akan dituangkan sama banyak ke dalam 6 gelas kecil. Banyak sirup di setiap gelas kecil adalah...',
    illustration: {
      kind: 'measuring_cup',
      title: 'Gelas Ukur Sirup Jeruk',
      maxLiters: 2,
      currentLiters: 1.5,
      stepLiters: 0.25,
      liquidColor: '#f59e0b',
      caption: 'Tanda panah merah menunjukkan tinggi permukaan sirup (1,5 L)',
    },
    options: [
      { id: 'A', text: '0,25 liter' },
      { id: 'B', text: '0,30 liter' },
      { id: 'C', text: '0,35 liter' },
      { id: 'D', text: '0,50 liter' },
    ],
    correctAnswer: 'A',
    explanation:
      'Volume sirup pada gelas ukur = 1,5 liter.\nDibagi rata ke 6 gelas = 1,5 ÷ 6 = 0,25 liter per gelas.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Operasi Hitung Desimal',
    difficulty: 'Mudah',
    text: 'Ani memiliki pita sepanjang 4,25 meter. Sebanyak 1,8 meter pita digunakan untuk menghias kado, kemudian Ani membeli lagi pita sepanjang 0,75 meter. Panjang pita Ani sekarang adalah...',
    options: [
      { id: 'A', text: '2,45 meter' },
      { id: 'B', text: '3,10 meter' },
      { id: 'C', text: '3,20 meter' },
      { id: 'D', text: '3,40 meter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Sisa setelah digunakan = 4,25 - 1,80 = 2,45 meter.\nSetelah membeli lagi = 2,45 + 0,75 = 3,20 meter.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Pembagian Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Seorang pedagang memiliki persediaan 7,2 kg gula pasir. Gula pasir tersebut akan dikemas ke dalam beberapa kantong plastik dengan berat masing-masing 0,45 kg. Banyak kantong plastik yang dibutuhkan adalah...',
    options: [
      { id: 'A', text: '14 kantong' },
      { id: 'B', text: '16 kantong' },
      { id: 'C', text: '18 kantong' },
      { id: 'D', text: '20 kantong' },
    ],
    correctAnswer: 'B',
    explanation:
      'Banyak kantong = 7,2 ÷ 0,45.\nKalikan pembilang dan penyebut dengan 100 agar menjadi bilangan bulat:\n720 ÷ 45 = 16 kantong.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Operasi Campuran Pecahan & Desimal',
    difficulty: 'Sukar',
    text: 'Pak Wayan memanen 24,5 kg buah jeruk dari kebunnya. Sebanyak 2/5 bagian dari hasil panen tersebut dijual ke pasar, dan sisanya dibagikan sama banyak kepada 7 orang tetangganya. Berat jeruk yang diterima setiap tetangga adalah...',
    options: [
      { id: 'A', text: '1,4 kg' },
      { id: 'B', text: '1,8 kg' },
      { id: 'C', text: '2,0 kg' },
      { id: 'D', text: '2,1 kg' },
    ],
    correctAnswer: 'D',
    explanation:
      'Jeruk yang dijual = 2/5 × 24,5 kg = 0,4 × 24,5 = 9,8 kg.\nSisa jeruk = 24,5 - 9,8 = 14,7 kg.\nDibagikan kepada 7 tetangga = 14,7 ÷ 7 = 2,1 kg per orang.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Konsep Dasar Rasio',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan apel merah dan apel hijau berikut. Rasio paling sederhana dari banyak apel merah terhadap banyak apel hijau adalah...',
    illustration: {
      kind: 'ratio_items',
      title: 'Koleksi Apel di Keranjang',
      leftLabel: 'Apel Merah',
      leftCount: 6,
      leftColor: '#ef4444',
      leftShape: 'circle',
      rightLabel: 'Apel Hijau',
      rightCount: 9,
      rightColor: '#22c55e',
      rightShape: 'circle',
      caption: '6 buah apel merah dan 9 buah apel hijau',
    },
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '2 : 5' },
      { id: 'D', text: '6 : 15' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak apel merah = 6, banyak apel hijau = 9.\nRasio = 6 : 9.\nSederhanakan dengan membagi kedua bilangan dengan FPB(6, 9) = 3:\n(6 ÷ 3) : (9 ÷ 3) = 2 : 3.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Rasio Bagian dan Keseluruhan',
    difficulty: 'Mudah',
    text: 'Rasio banyak siswa laki-laki terhadap siswa perempuan di kelas 6 adalah 3 : 4. Jika banyak siswa perempuan adalah 16 orang, maka jumlah seluruh siswa kelas 6 tersebut adalah...',
    options: [
      { id: 'A', text: '12 siswa' },
      { id: 'B', text: '24 siswa' },
      { id: 'C', text: '28 siswa' },
      { id: 'D', text: '32 siswa' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio perempuan = 4 bagian = 16 siswa, sehingga 1 bagian = 16 ÷ 4 = 4 siswa.\nJumlah seluruh rasio = 3 + 4 = 7 bagian.\nJumlah seluruh siswa = 7 × 4 = 28 siswa.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Rasio dengan Diagram Batang',
    difficulty: 'Sedang',
    text: 'Diagram batang berikut menunjukkan perbandingan tabungan Budi dan Sinta. Jika selisih uang tabungan Budi dan Sinta adalah Rp24.000,00, berapakah jumlah uang tabungan mereka berdua?',
    illustration: {
      kind: 'comparison_bars',
      title: 'Diagram Batang Perbandingan Tabungan',
      bars: [
        { label: 'Budi', units: 3, totalUnits: 5, valueLabel: '3 bagian', color: '#3b82f6' },
        { label: 'Sinta', units: 5, totalUnits: 5, valueLabel: '5 bagian', color: '#10b981' },
      ],
      caption: 'Selisih tabungan Budi dan Sinta = Rp24.000,00',
    },
    options: [
      { id: 'A', text: 'Rp60.000,00' },
      { id: 'B', text: 'Rp72.000,00' },
      { id: 'C', text: 'Rp84.000,00' },
      { id: 'D', text: 'Rp96.000,00' },
    ],
    correctAnswer: 'D',
    explanation:
      'Selisih bagian = 5 - 3 = 2 bagian = Rp24.000,00.\nNilai 1 bagian = Rp24.000,00 ÷ 2 = Rp12.000,00.\nJumlah bagian = 3 + 5 = 8 bagian.\nJumlah uang tabungan = 8 × Rp12.000,00 = Rp96.000,00.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Rasio Satuan (Proporsi)',
    difficulty: 'Mudah',
    text: 'Sebuah mobil menempuh jarak 135 km dengan menghabiskan 9 liter bensin. Jika mobil tersebut memiliki 14 liter bensin di tangki, jarak maksimal yang dapat ditempuh adalah...',
    options: [
      { id: 'A', text: '195 km' },
      { id: 'B', text: '210 km' },
      { id: 'C', text: '225 km' },
      { id: 'D', text: '240 km' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio jarak per liter = 135 km ÷ 9 liter = 15 km/liter.\nJarak untuk 14 liter = 14 × 15 km = 210 km.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Rasio dan Skala Peta',
    difficulty: 'Sedang',
    text: 'Perhatikan gambar denah jarak antara SD Negeri 2 Batuagung dan Taman Kota berikut. Berdasarkan skala yang tertera, jarak sebenarnya kedua tempat tersebut adalah...',
    illustration: {
      kind: 'map_scale',
      title: 'Denah Jarak dan Skala',
      pointA: 'SDN 2 Batuagung',
      pointB: 'Taman Kota',
      distanceLabel: 'Jarak Peta = 5 cm',
      scaleLabel: 'Skala 1 : 200.000',
    },
    options: [
      { id: 'A', text: '5 km' },
      { id: 'B', text: '10 km' },
      { id: 'C', text: '15 km' },
      { id: 'D', text: '20 km' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak sebenarnya = Jarak pada peta × Penyebut skala\n= 5 cm × 200.000 = 1.000.000 cm.\nUbah cm ke km (dibagi 100.000) = 1.000.000 ÷ 100.000 = 10 km.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Rasio dalam Resep',
    difficulty: 'Mudah',
    text: 'Untuk membuat segelas minuman segar, rasio takaran sirup dan air matang adalah 2 : 5. Jika Ibu menggunakan 350 ml air matang, banyak sirup yang diperlukan agar rasa minumannya tetap pas adalah...',
    options: [
      { id: 'A', text: '140 ml' },
      { id: 'B', text: '150 ml' },
      { id: 'C', text: '175 ml' },
      { id: 'D', text: '200 ml' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasio sirup : air = 2 : 5.\nAir = 5 bagian = 350 ml → 1 bagian = 350 ÷ 5 = 70 ml.\nSirup = 2 bagian = 2 × 70 ml = 140 ml.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Rasio Umur',
    difficulty: 'Sedang',
    text: 'Rasio umur Kakek dan cucunya saat ini adalah 9 : 2. Jika jumlah umur Kakek dan cucunya adalah 77 tahun, maka umur cucu saat ini adalah...',
    options: [
      { id: 'A', text: '11 tahun' },
      { id: 'B', text: '12 tahun' },
      { id: 'C', text: '14 tahun' },
      { id: 'D', text: '16 tahun' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah bagian rasio = 9 + 2 = 11 bagian = 77 tahun.\n1 bagian = 77 ÷ 11 = 7 tahun.\nUmur cucu = 2 × 7 tahun = 14 tahun.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Rasio Harga Satuan (Perbandingan Harga)',
    difficulty: 'Sedang',
    text: 'Perhatikan dua penawaran paket buku tulis pada gambar di bawah ini. Pernyataan perbandingan harga satuan yang paling tepat adalah...',
    illustration: {
      kind: 'price_promo',
      title: 'Promo Paket Buku Tulis Koperasi',
      cards: [
        {
          name: 'Paket Hemat A',
          qtyLabel: 'Isi: 4 Buku Tulis',
          priceLabel: 'Rp18.000,00',
          badge: '4 Buku',
          accentColor: '#2563eb',
        },
        {
          name: 'Paket Hemat B',
          qtyLabel: 'Isi: 6 Buku Tulis',
          priceLabel: 'Rp24.000,00',
          badge: '6 Buku',
          accentColor: '#059669',
        },
      ],
    },
    options: [
      { id: 'A', text: 'Paket A lebih murah Rp500,00 per buku daripada Paket B' },
      { id: 'B', text: 'Harga per buku Paket A dan Paket B sama besar' },
      { id: 'C', text: 'Paket B lebih hemat Rp500,00 per buku daripada Paket A' },
      { id: 'D', text: 'Paket B lebih hemat Rp1.000,00 per buku daripada Paket A' },
    ],
    correctAnswer: 'C',
    explanation:
      'Harga 1 buku Paket A = Rp18.000,00 ÷ 4 = Rp4.500,00.\nHarga 1 buku Paket B = Rp24.000,00 ÷ 6 = Rp4.000,00.\nJadi Paket B lebih hemat dengan selisih Rp4.500,00 - Rp4.000,00 = Rp500,00 per buku.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Rasio Tiga Besaran',
    difficulty: 'Sukar',
    text: 'Rasio banyak kelereng Andi dan Bayu adalah 2 : 3, sedangkan rasio banyak kelereng Bayu dan Ciko adalah 4 : 5. Jika banyak kelereng Andi 16 butir, maka banyak kelereng Ciko adalah...',
    options: [
      { id: 'A', text: '20 butir' },
      { id: 'B', text: '24 butir' },
      { id: 'C', text: '28 butir' },
      { id: 'D', text: '30 butir' },
    ],
    correctAnswer: 'D',
    explanation:
      'Samakan angka perbandingan Bayu (KPK dari 3 dan 4 adalah 12):\nAndi : Bayu = 2 : 3 = 8 : 12\nBayu : Ciko = 4 : 5 = 12 : 15\nDiperoleh Andi : Bayu : Ciko = 8 : 12 : 15.\nJika Andi = 16 butir (8 bagian → 1 bagian = 2 butir), maka Ciko = 15 × 2 = 30 butir.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Rasio Berbalik Nilai (Pekerja & Waktu)',
    difficulty: 'Sukar',
    text: 'Pengecatan pagar sekolah dapat diselesaikan oleh 4 orang pekerja dalam waktu 12 hari. Jika pihak sekolah menambah pekerja sehingga menjadi 6 orang dengan kecepatan kerja yang sama, lama waktu yang dibutuhkan untuk menyelesaikan pengecatan adalah...',
    options: [
      { id: 'A', text: '6 hari' },
      { id: 'B', text: '8 hari' },
      { id: 'C', text: '9 hari' },
      { id: 'D', text: '18 hari' },
    ],
    correctAnswer: 'B',
    explanation:
      'Semakin banyak pekerja, waktu semakin singkat (perbandingan berbalik nilai).\nTotal beban kerja = 4 pekerja × 12 hari = 48 hari-orang.\nWaktu untuk 6 pekerja = 48 ÷ 6 = 8 hari.',
  },

  // ============================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS / PGK (10 SOAL - ID 21 s.d. 30)
  // Ketentuan: Setiap soal memiliki 3 pilihan jawaban (A, B, C) & >1 jawaban benar
  // ============================================================================
  {
    id: 21,
    type: 'pgk',
    topic: 'Nilai Pecahan, Desimal & Persen',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar petak persegi berikut. Pilihlah semua bilangan yang nilainya SETARA dengan bagian petak yang diarsir berwarna biru!',
    illustration: {
      kind: 'fraction_grid',
      title: 'Diagram 10 Petak',
      rows: 2,
      cols: 5,
      shadedCount: 6,
      primaryColor: '#2563eb',
      caption: '6 petak berwarna biru dari total 10 petak',
    },
    options: [
      { id: 'A', text: '3/5' },
      { id: 'B', text: '0,60' },
      { id: 'C', text: '40%' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Bagian berwarna biru = 6/10.\n• 6/10 disederhanakan menjadi 3/5 (Benar).\n• 6/10 dalam desimal adalah 0,6 atau 0,60 (Benar).\n• Dalam persen = 60%, bukan 40% (Salah).',
  },
  {
    id: 22,
    type: 'pgk',
    topic: 'Membandingkan Pecahan dan Desimal',
    difficulty: 'Sedang',
    text: 'Diketahui tiga bilangan yaitu 3/4, 0,7, dan 80%. Pilihlah pernyataan perbandingan di bawah ini yang bernilai BENAR!',
    options: [
      { id: 'A', text: 'Nilai 3/4 lebih besar daripada 0,7' },
      { id: 'B', text: 'Nilai 80% lebih besar daripada 3/4' },
      { id: 'C', text: 'Nilai 0,7 lebih besar daripada 80%' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Ubah ke bentuk desimal: 3/4 = 0,75 ; 0,7 = 0,70 ; 80% = 0,80.\n• 0,75 > 0,70 (A Benar).\n• 0,80 > 0,75 (B Benar).\n• 0,70 < 0,80 (C Salah).',
  },
  {
    id: 23,
    type: 'pgk',
    topic: 'Operasi Penjumlahan Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Ibu membeli 2,5 kg buah mangga dan 1 1/4 kg buah jeruk di pasar. Pilihlah semua pernyataan yang BENAR mengenai berat belanjaan Ibu!',
    options: [
      { id: 'A', text: 'Berat buah jeruk dalam bentuk desimal adalah 1,25 kg.' },
      { id: 'B', text: 'Total berat seluruh buah yang dibeli Ibu adalah 3,75 kg.' },
      { id: 'C', text: 'Selisih berat buah mangga dan jeruk adalah 1,5 kg.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 1 1/4 kg = 1,25 kg (A Benar).\n• Total berat = 2,5 + 1,25 = 3,75 kg (B Benar).\n• Selisih berat = 2,5 - 1,25 = 1,25 kg, bukan 1,5 kg (C Salah).',
  },
  {
    id: 24,
    type: 'pgk',
    topic: 'Pecahan & Desimal pada Gelas Ukur',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar gelas ukur berkapasitas maksimal 1 liter yang berisi air berikut ini. Pilihlah semua pernyataan yang BENAR berdasarkan gambar tersebut!',
    illustration: {
      kind: 'measuring_cup',
      title: 'Gelas Ukur Kapasitas 1 Liter',
      maxLiters: 1,
      currentLiters: 0.75,
      stepLiters: 0.25,
      liquidColor: '#0ea5e9',
      caption: 'Permukaan air berada tepat pada garis 0,75 L',
    },
    options: [
      { id: 'A', text: 'Volume air di dalam gelas ukur setara dengan 3/4 liter.' },
      { id: 'B', text: 'Volume bagian gelas yang masih kosong adalah 0,25 liter.' },
      { id: 'C', text: 'Jika ditambah 1/4 liter air lagi, total volume air menjadi 1,25 liter.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• 0,75 liter = 75/100 = 3/4 liter (A Benar).\n• Sisa ruang kosong = 1 - 0,75 = 0,25 liter (B Benar).\n• 0,75 + 0,25 = 1,00 liter, bukan 1,25 liter (C Salah).',
  },
  {
    id: 25,
    type: 'pgk',
    topic: 'Perkalian & Pembagian Pecahan/Desimal',
    difficulty: 'Sukar',
    text: 'Pilihlah semua operasi hitung pecahan dan desimal di bawah ini yang menghasilkan nilai tepat sama dengan 1,5 (atau 3/2)!',
    options: [
      { id: 'A', text: '3 × 1/2' },
      { id: 'B', text: '3/4 ÷ 1/2' },
      { id: 'C', text: '2,4 ÷ 1,6' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      '• A: 3 × 1/2 = 3/2 = 1,5 (Benar).\n• B: 3/4 ÷ 1/2 = 3/4 × 2 = 6/4 = 1,5 (Benar).\n• C: 2,4 ÷ 1,6 = 24 ÷ 16 = 3/2 = 1,5 (Benar).\nKetiga operasi menghasilkan 1,5.',
  },
  {
    id: 26,
    type: 'pgk',
    topic: 'Rasio Benda Konkret',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan kotak biru dan bintang kuning di bawah ini. Pilihlah semua pernyataan rasio yang BENAR sesuai gambar!',
    illustration: {
      kind: 'ratio_items',
      title: 'Kumpulan Kotak Biru dan Bintang Kuning',
      leftLabel: 'Kotak Biru',
      leftCount: 8,
      leftColor: '#3b82f6',
      leftShape: 'square',
      rightLabel: 'Bintang Kuning',
      rightCount: 12,
      rightColor: '#eab308',
      rightShape: 'star',
      caption: '8 kotak biru dan 12 bintang kuning',
    },
    options: [
      { id: 'A', text: 'Rasio paling sederhana kotak biru terhadap bintang kuning adalah 2 : 3.' },
      { id: 'B', text: 'Banyak kotak biru adalah 2/5 bagian dari seluruh benda pada gambar.' },
      { id: 'C', text: 'Rasio bintang kuning terhadap seluruh benda adalah 2 : 5.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Total benda = 8 + 12 = 20 benda.\n• Kotak biru : bintang kuning = 8 : 12 = 2 : 3 (A Benar).\n• Kotak biru terhadap keseluruhan = 8/20 = 2/5 (B Benar).\n• Bintang kuning terhadap keseluruhan = 12 : 20 = 3 : 5, bukan 2 : 5 (C Salah).',
  },
  {
    id: 27,
    type: 'pgk',
    topic: 'Rasio Bagian & Keseluruhan di Kelas',
    difficulty: 'Sedang',
    text: 'Di kelas 6 terdapat 12 siswa gemar Matematika dan 18 siswa gemar IPA (setiap siswa hanya memilih satu mata pelajaran). Pilihlah semua pernyataan yang BENAR!',
    options: [
      { id: 'A', text: 'Rasio siswa gemar Matematika terhadap gemar IPA adalah 2 : 3.' },
      { id: 'B', text: 'Rasio siswa gemar IPA terhadap seluruh siswa kelas 6 adalah 3 : 5.' },
      { id: 'C', text: 'Selisih banyak siswa gemar IPA dan Matematika adalah 8 siswa.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Total siswa = 12 + 18 = 30 siswa.\n• Matematika : IPA = 12 : 18 = 2 : 3 (A Benar).\n• IPA : Total = 18 : 30 = 3 : 5 (B Benar).\n• Selisih = 18 - 12 = 6 siswa, bukan 8 siswa (C Salah).',
  },
  {
    id: 28,
    type: 'pgk',
    topic: 'Rasio Resep Makanan',
    difficulty: 'Sedang',
    text: 'Untuk membuat adonan kue bolu, setiap 200 gram tepung membutuhkan 2 butir telur dan 50 gram gula pasir. Jika Ibu ingin membuat kue menggunakan 600 gram tepung dengan rasio yang sama, pilihlah semua pernyataan yang BENAR!',
    options: [
      { id: 'A', text: 'Ibu membutuhkan 6 butir telur.' },
      { id: 'B', text: 'Ibu membutuhkan 150 gram gula pasir.' },
      { id: 'C', text: 'Rasio berat tepung terhadap gula pasir tetap 4 : 1.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Faktor pengali = 600 ÷ 200 = 3 kali lipat.\n• Telur = 3 × 2 = 6 butir (A Benar).\n• Gula = 3 × 50 = 150 gram (B Benar).\n• Rasio tepung : gula = 600 : 150 = 4 : 1 (C Benar).',
  },
  {
    id: 29,
    type: 'pgk',
    topic: 'Rasio Ukuran Bangun Datar',
    difficulty: 'Sukar',
    text: 'Perhatikan diagram rasio panjang dan lebar kebun sekolah berbentuk persegi panjang berikut. Jika keliling kebun sebenarnya adalah 56 meter, pilihlah semua pernyataan yang BENAR!',
    illustration: {
      kind: 'comparison_bars',
      title: 'Rasio Panjang dan Lebar Kebun',
      bars: [
        { label: 'Panjang', units: 4, totalUnits: 4, valueLabel: '4 bagian', color: '#16a34a' },
        { label: 'Lebar', units: 3, totalUnits: 4, valueLabel: '3 bagian', color: '#84cc16' },
      ],
      caption: 'Keliling kebun = 2 × (Panjang + Lebar) = 56 meter',
    },
    options: [
      { id: 'A', text: 'Panjang kebun sebenarnya adalah 16 meter.' },
      { id: 'B', text: 'Lebar kebun sebenarnya adalah 12 meter.' },
      { id: 'C', text: 'Luas kebun tersebut adalah 180 m².' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Panjang + Lebar = Keliling ÷ 2 = 56 ÷ 2 = 28 meter.\nJumlah bagian = 4 + 3 = 7 bagian → 1 bagian = 28 ÷ 7 = 4 meter.\n• Panjang = 4 × 4 = 16 meter (A Benar).\n• Lebar = 3 × 4 = 12 meter (B Benar).\n• Luas = 16 × 12 = 192 m², bukan 180 m² (C Salah).',
  },
  {
    id: 30,
    type: 'pgk',
    topic: 'Rasio Harga Satuan',
    difficulty: 'Sedang',
    text: 'Toko A menjual 5 pensil seharga Rp12.500,00. Toko B menjual 8 pensil dengan merek yang sama seharga Rp18.400,00. Pilihlah semua pernyataan yang BENAR!',
    options: [
      { id: 'A', text: 'Harga satuan 1 pensil di Toko A adalah Rp2.500,00.' },
      { id: 'B', text: 'Harga per pensil di Toko B lebih murah dibandingkan di Toko A.' },
      { id: 'C', text: 'Jika membeli 10 pensil di Toko B, total harga yang dibayar adalah Rp25.000,00.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Harga 1 pensil Toko A = 12.500 ÷ 5 = Rp2.500,00 (A Benar).\n• Harga 1 pensil Toko B = 18.400 ÷ 8 = Rp2.300,00, lebih murah dari Rp2.500,00 (B Benar).\n• 10 pensil di Toko B = 10 × 2.300 = Rp23.000,00, bukan Rp25.000,00 (C Salah).',
  },

  // ============================================================================
  // BAGIAN 3: PGK KATEGORI BENAR / SALAH (10 SOAL - ID 31 s.d. 40)
  // Ketentuan: Setiap soal memiliki 3 deskripsi/pernyataan dengan respons Benar/Salah
  // ============================================================================
  {
    id: 31,
    type: 'pgk_kategori',
    topic: 'Pecahan pada Diagram Lingkaran',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kue bundar yang dipotong menjadi 6 bagian sama besar berikut. Bagian berwarna oranye adalah bagian yang diarsir. Tentukan kebenaran dari setiap pernyataan di bawah ini (Benar atau Salah):',
    illustration: {
      kind: 'fraction_circle',
      title: 'Kue Bundar (6 Bagian Sama Besar)',
      totalParts: 6,
      shadedParts: 4,
      primaryColor: '#f97316',
      caption: '4 bagian berwarna oranye dan 2 bagian berwarna putih',
    },
    statements: [
      {
        id: 's1',
        text: 'Pecahan paling sederhana untuk bagian yang berwarna oranye adalah 2/3.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bagian kue yang berwarna putih bernilai 1/3 dari keseluruhan kue.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Bentuk desimal bagian yang berwarna oranye tepat sama dengan 0,5.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Oranye = 4/6 = 2/3 (BENAR).\n2. Putih = 2/6 = 1/3 (BENAR).\n3. 2/3 dalam desimal adalah 0,666... (dibulatkan 0,67), bukan 0,5 (SALAH).',
  },
  {
    id: 32,
    type: 'pgk_kategori',
    topic: 'Operasi Campuran Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Ibu memiliki persediaan 3,6 kg beras dan 1,5 kg gula pasir. Sebanyak 3/4 bagian dari persediaan beras dimasak untuk acara syukuran keluarga. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Berat beras yang dimasak untuk acara syukuran adalah 2,7 kg.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sisa beras yang masih tersimpan di dapur adalah 0,9 kg.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jumlah berat sisa beras dan seluruh gula pasir adalah 2,5 kg.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Beras dimasak = 3/4 × 3,6 = 0,75 × 3,6 = 2,7 kg (BENAR).\n2. Sisa beras = 3,6 - 2,7 = 0,9 kg (BENAR).\n3. Sisa beras + gula = 0,9 + 1,5 = 2,4 kg, bukan 2,5 kg (SALAH).',
  },
  {
    id: 33,
    type: 'pgk_kategori',
    topic: 'Pembagian Desimal & Pecahan',
    difficulty: 'Sedang',
    text: 'Seutas tali pramuka sepanjang 4,5 meter dipotong-potong sama panjang dengan ukuran tiap potongan 3/4 meter. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Panjang tiap potongan tali setara dengan 0,75 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak potongan tali yang diperoleh seluruhnya adalah 6 potong.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika 2 potongan tali diberikan kepada teman, sisa panjang tali seluruhnya adalah 2,5 meter.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 3/4 meter = 0,75 meter (BENAR).\n2. Banyak potongan = 4,5 ÷ 0,75 = 6 potong (BENAR).\n3. Sisa 4 potongan = 4 × 0,75 = 3,0 meter, bukan 2,5 meter (SALAH).',
  },
  {
    id: 34,
    type: 'pgk_kategori',
    topic: 'Garis Bilangan Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Perhatikan garis bilangan dari 0 sampai 2 yang dibagi menjadi 8 bagian sama panjang berikut. Titik A dan titik B terletak tepat pada garis skala. Tentukan kebenaran setiap pernyataan di bawah ini:',
    illustration: {
      kind: 'number_line',
      title: 'Garis Bilangan 0 sampai 2',
      min: 0,
      max: 2,
      divisions: 8,
      markers: [
        { value: 0.5, label: 'A', color: '#2563eb' },
        { value: 1.25, label: 'B', color: '#dc2626' },
      ],
      caption: 'Jarak dari 0 ke 2 terbagi menjadi 8 ruas sama panjang',
    },
    statements: [
      {
        id: 's1',
        text: 'Nilai bilangan pada titik A adalah 0,5 atau 1/2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Nilai bilangan pada titik B adalah 1 1/4 atau 1,25.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Selisih nilai antara titik B dan titik A adalah 0,5.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Setiap 1 ruas bernilai 2 ÷ 8 = 0,25.\n1. Titik A di ruas ke-2 = 2 × 0,25 = 0,5 = 1/2 (BENAR).\n2. Titik B di ruas ke-5 = 5 × 0,25 = 1,25 = 1 1/4 (BENAR).\n3. Selisih B - A = 1,25 - 0,5 = 0,75, bukan 0,5 (SALAH).',
  },
  {
    id: 35,
    type: 'pgk_kategori',
    topic: 'Aplikasi Pecahan & Desimal',
    difficulty: 'Sukar',
    text: 'Pak Made memiliki kebun seluas 2,4 hektare. Sebanyak 3/8 bagian kebun ditanami padi, 0,25 bagian ditanami jagung, dan sisanya ditanami sayur-mayur. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Luas kebun yang ditanami padi adalah 0,9 hektare.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Luas kebun yang ditanami jagung adalah 0,6 hektare.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas kebun yang ditanami sayur-mayur adalah 0,8 hektare.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Padi = 3/8 × 2,4 = 0,9 hektare (BENAR).\n2. Jagung = 0,25 × 2,4 = 0,6 hektare (BENAR).\n3. Sayur = 2,4 - (0,9 + 0,6) = 2,4 - 1,5 = 0,9 hektare, bukan 0,8 hektare (SALAH).',
  },
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Rasio Himpunan Benda',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan kelereng biru dan kelereng merah berikut ini. Tentukan kebenaran dari setiap pernyataan perbandingan berikut:',
    illustration: {
      kind: 'ratio_items',
      title: 'Kelereng Biru dan Kelereng Merah',
      leftLabel: 'Kelereng Biru',
      leftCount: 9,
      leftColor: '#2563eb',
      leftShape: 'circle',
      rightLabel: 'Kelereng Merah',
      rightCount: 6,
      rightColor: '#dc2626',
      rightShape: 'circle',
      caption: '9 butir kelereng biru dan 6 butir kelereng merah',
    },
    statements: [
      {
        id: 's1',
        text: 'Rasio paling sederhana kelereng biru terhadap kelereng merah adalah 3 : 2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio kelereng merah terhadap seluruh kelereng adalah 2 : 5.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Banyak kelereng biru tepat 50% dari seluruh kelereng.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Total kelereng = 9 + 6 = 15 butir.\n1. Biru : Merah = 9 : 6 = 3 : 2 (BENAR).\n2. Merah : Total = 6 : 15 = 2 : 5 (BENAR).\n3. Persentase biru = 9/15 × 100% = 60%, bukan 50% (SALAH).',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Rasio & Skala Denah',
    difficulty: 'Sedang',
    text: 'Sebuah denah ruang kelas berbentuk persegi panjang digambar dengan ukuran panjang 4 cm dan lebar 3 cm. Skala yang tertera pada denah tersebut adalah 1 : 200. Tentukan kebenaran setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Panjang ruang kelas sebenarnya adalah 8 meter.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Lebar ruang kelas sebenarnya adalah 6 meter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Luas lantai ruang kelas sebenarnya adalah 42 m².',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Panjang sebenarnya = 4 × 200 cm = 800 cm = 8 m (BENAR).\n2. Lebar sebenarnya = 3 × 200 cm = 600 cm = 6 m (BENAR).\n3. Luas sebenarnya = 8 m × 6 m = 48 m², bukan 42 m² (SALAH).',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Rasio Umur & Perubahan Waktu',
    difficulty: 'Sukar',
    text: 'Saat ini rasio usia Kakak dan Adik adalah 5 : 3. Jumlah usia Kakak dan Adik sekarang adalah 32 tahun. Tentukan kebenaran dari setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Usia Kakak saat ini adalah 20 tahun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selisih usia Kakak dan Adik adalah 8 tahun.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Empat tahun yang akan datang, rasio usia Kakak dan Adik menjadi 3 : 2.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Jumlah bagian = 5 + 3 = 8 bagian = 32 tahun → 1 bagian = 4 tahun.\n1. Usia Kakak = 5 × 4 = 20 tahun, Adik = 3 × 4 = 12 tahun (BENAR).\n2. Selisih = 20 - 12 = 8 tahun (BENAR).\n3. 4 tahun lagi: Kakak = 24, Adik = 16 → Rasio 24 : 16 = 3 : 2 (BENAR).',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Rasio Harga Satuan Beras',
    difficulty: 'Sedang',
    text: 'Perhatikan dua jenis kemasan beras yang dijual di toko sembako pada gambar berikut. Tentukan kebenaran setiap pernyataan terkait harga satuan beras tersebut:',
    illustration: {
      kind: 'price_promo',
      title: 'Pilihan Kemasan Beras Berkualitas',
      cards: [
        {
          name: 'Paket Hemat',
          qtyLabel: 'Berat: 5 kg',
          priceLabel: 'Rp65.000,00',
          badge: '5 kg',
          accentColor: '#d97706',
        },
        {
          name: 'Paket Keluarga',
          qtyLabel: 'Berat: 8 kg',
          priceLabel: 'Rp100.000,00',
          badge: '8 kg',
          accentColor: '#0284c7',
        },
      ],
    },
    statements: [
      {
        id: 's1',
        text: 'Harga per kilogram beras pada Paket Hemat adalah Rp13.000,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Harga per kilogram beras pada Paket Keluarga adalah Rp12.500,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Harga per kilogram Paket Hemat lebih murah dibandingkan Paket Keluarga.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Paket Hemat per kg = Rp65.000 ÷ 5 = Rp13.000,00 (BENAR).\n2. Paket Keluarga per kg = Rp100.000 ÷ 8 = Rp12.500,00 (BENAR).\n3. Rp13.000 lebih mahal daripada Rp12.500 (SALAH).',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Rasio Senilai Pemakaian Cat',
    difficulty: 'Sedang',
    text: 'Untuk mengecat dinding seluas 30 m² dibutuhkan 4 liter cat tembok. Pak Ketut berencana mengecat dinding aula sekolah seluas 75 m². Tentukan kebenaran setiap pernyataan berikut:',
    statements: [
      {
        id: 's1',
        text: 'Setiap 1 liter cat dapat digunakan untuk mengecat dinding seluas 7,5 m².',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyak cat yang dibutuhkan untuk mengecat dinding seluas 75 m² adalah 10 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika tersedia 12 liter cat, luas dinding maksimal yang dapat dicat adalah 80 m².',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Daya sebar 1 liter = 30 m² ÷ 4 = 7,5 m² (BENAR).\n2. Cat untuk 75 m² = 75 ÷ 7,5 = 10 liter (BENAR).\n3. 12 liter cat dapat mengecat 12 × 7,5 = 90 m², bukan 80 m² (SALAH).',
  },

  // ============================================================================
  // BAGIAN 4: PILIHAN MENJODOHKAN (10 SOAL - ID 41 s.d. 50)
  // ============================================================================
  {
    id: 41,
    type: 'menjodohkan',
    topic: 'Konversi Pecahan ke Desimal',
    difficulty: 'Mudah',
    text: 'Pasangkan setiap pecahan biasa di kolom kiri dengan bentuk bilangan desimal yang senilai di kolom kanan!',
    leftItems: [
      { id: '1', text: '3/4' },
      { id: '2', text: '2/5' },
      { id: '3', text: '5/8' },
    ],
    rightItems: [
      { id: 'A', text: '0,4' },
      { id: 'B', text: '0,75' },
      { id: 'C', text: '0,625' },
      { id: 'D', text: '0,8' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 3/4 = 3 ÷ 4 = 0,75 (Pasangan B)\n• 2/5 = 4/10 = 0,4 (Pasangan A)\n• 5/8 = 5 ÷ 8 = 0,625 (Pasangan C)',
  },
  {
    id: 42,
    type: 'menjodohkan',
    topic: 'Operasi Hitung Pecahan',
    difficulty: 'Sedang',
    text: 'Perhatikan nilai pecahan bagian berwarna biru pada gambar berikut (3/8). Pasangkan setiap operasi hitung pecahan di kolom kiri dengan hasil yang paling tepat di kolom kanan!',
    illustration: {
      kind: 'fraction_grid',
      title: 'Pecahan Acuan (3/8)',
      rows: 2,
      cols: 4,
      shadedCount: 3,
      primaryColor: '#2563eb',
      caption: '3 petak berwarna biru dari 8 petak keseluruhan = 3/8',
    },
    leftItems: [
      { id: '1', text: '3/8 + 1/4' },
      { id: '2', text: '3/8 × 2' },
      { id: '3', text: '3/8 ÷ 1/4' },
    ],
    rightItems: [
      { id: 'A', text: '3/4' },
      { id: 'B', text: '5/8' },
      { id: 'C', text: '1 1/2' },
      { id: 'D', text: '1/2' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 3/8 + 1/4 = 3/8 + 2/8 = 5/8 (Pasangan B)\n• 3/8 × 2 = 6/8 = 3/4 (Pasangan A)\n• 3/8 ÷ 1/4 = 3/8 × 4/1 = 12/8 = 3/2 = 1 1/2 (Pasangan C)',
  },
  {
    id: 43,
    type: 'menjodohkan',
    topic: 'Operasi Hitung Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Pasangkan setiap operasi hitung bilangan desimal di kolom kiri dengan hasil perhitungan yang benar di kolom kanan!',
    leftItems: [
      { id: '1', text: '2,4 + 1,75' },
      { id: '2', text: '5,2 - 1,85' },
      { id: '3', text: '0,6 × 2,5' },
    ],
    rightItems: [
      { id: 'A', text: '1,5' },
      { id: 'B', text: '4,15' },
      { id: 'C', text: '3,35' },
      { id: 'D', text: '4,25' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'C',
      '3': 'A',
    },
    explanation:
      '• 2,40 + 1,75 = 4,15 (Pasangan B)\n• 5,20 - 1,85 = 3,35 (Pasangan C)\n• 0,6 × 2,5 = 1,50 = 1,5 (Pasangan A)',
  },
  {
    id: 44,
    type: 'menjodohkan',
    topic: 'Desimal & Persen ke Pecahan Sederhana',
    difficulty: 'Sedang',
    text: 'Pasangkan bilangan desimal atau persen di kolom kiri dengan bentuk pecahan paling sederhana di kolom kanan!',
    leftItems: [
      { id: '1', text: '0,45' },
      { id: '2', text: '65%' },
      { id: '3', text: '1,2' },
    ],
    rightItems: [
      { id: 'A', text: '13/20' },
      { id: 'B', text: '9/20' },
      { id: 'C', text: '6/5' },
      { id: 'D', text: '3/4' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 0,45 = 45/100 = 9/20 (Pasangan B)\n• 65% = 65/100 = 13/20 (Pasangan A)\n• 1,2 = 12/10 = 6/5 (Pasangan C)',
  },
  {
    id: 45,
    type: 'menjodohkan',
    topic: 'Pemecahan Masalah Pecahan & Desimal',
    difficulty: 'Sedang',
    text: 'Pasangkan setiap permasalahan cerita pecahan dan desimal di kolom kiri dengan jawaban yang tepat di kolom kanan!',
    leftItems: [
      { id: '1', text: 'Pita sepanjang 2,5 m dipotong menjadi potongan 0,5 m. Banyak potongan:' },
      { id: '2', text: 'Sebanyak 3/5 bagian dari 40 siswa kelas 6 adalah:' },
      { id: '3', text: 'Sebanyak 0,25 bagian dari 24 kg gula pasir adalah:' },
    ],
    rightItems: [
      { id: 'A', text: '24 siswa' },
      { id: 'B', text: '5 potong' },
      { id: 'C', text: '6 kg' },
      { id: 'D', text: '15 siswa' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 2,5 ÷ 0,5 = 5 potong (Pasangan B)\n• 3/5 × 40 = 24 siswa (Pasangan A)\n• 0,25 × 24 = 1/4 × 24 = 6 kg (Pasangan C)',
  },
  {
    id: 46,
    type: 'menjodohkan',
    topic: 'Menentukan Rasio dari Gambar',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar kumpulan buku tulis dan pensil di bawah ini. Pasangkan setiap pernyataan rasio di kolom kiri dengan bentuk rasio paling sederhana di kolom kanan!',
    illustration: {
      kind: 'ratio_items',
      title: 'Perlengkapan Alat Tulis',
      leftLabel: 'Buku Tulis',
      leftCount: 10,
      leftColor: '#3b82f6',
      leftShape: 'square',
      rightLabel: 'Pensil',
      rightCount: 15,
      rightColor: '#f59e0b',
      rightShape: 'triangle',
      caption: '10 buah buku tulis dan 15 buah pensil',
    },
    leftItems: [
      { id: '1', text: 'Rasio Buku Tulis terhadap Pensil' },
      { id: '2', text: 'Rasio Buku Tulis terhadap seluruh alat tulis' },
      { id: '3', text: 'Rasio Pensil terhadap seluruh alat tulis' },
    ],
    rightItems: [
      { id: 'A', text: '3 : 5' },
      { id: 'B', text: '2 : 3' },
      { id: 'C', text: '2 : 5' },
      { id: 'D', text: '3 : 2' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'C',
      '3': 'A',
    },
    explanation:
      'Total alat tulis = 10 + 15 = 25.\n• Buku : Pensil = 10 : 15 = 2 : 3 (Pasangan B)\n• Buku : Total = 10 : 25 = 2 : 5 (Pasangan C)\n• Pensil : Total = 15 : 25 = 3 : 5 (Pasangan A)',
  },
  {
    id: 47,
    type: 'menjodohkan',
    topic: 'Menyederhanakan Rasio',
    difficulty: 'Mudah',
    text: 'Pasangkan setiap perbandingan di kolom kiri dengan bentuk rasio paling sederhana di kolom kanan!',
    leftItems: [
      { id: '1', text: '18 : 24' },
      { id: '2', text: '25 : 40' },
      { id: '3', text: '14 : 35' },
    ],
    rightItems: [
      { id: 'A', text: '5 : 8' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '2 : 5' },
      { id: 'D', text: '4 : 5' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 18 : 24 (bagi 6) = 3 : 4 (Pasangan B)\n• 25 : 40 (bagi 5) = 5 : 8 (Pasangan A)\n• 14 : 35 (bagi 7) = 2 : 5 (Pasangan C)',
  },
  {
    id: 48,
    type: 'menjodohkan',
    topic: 'Rasio Skala Peta',
    difficulty: 'Sedang',
    text: 'Pasangkan jarak pada peta dan skalanya di kolom kiri dengan jarak sebenarnya di kolom kanan!',
    leftItems: [
      { id: '1', text: 'Jarak peta 4 cm, skala 1 : 500.000' },
      { id: '2', text: 'Jarak peta 6 cm, skala 1 : 250.000' },
      { id: '3', text: 'Jarak peta 3 cm, skala 1 : 1.000.000' },
    ],
    rightItems: [
      { id: 'A', text: '15 km' },
      { id: 'B', text: '20 km' },
      { id: 'C', text: '30 km' },
      { id: 'D', text: '25 km' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 4 × 500.000 cm = 2.000.000 cm = 20 km (Pasangan B)\n• 6 × 250.000 cm = 1.500.000 cm = 15 km (Pasangan A)\n• 3 × 1.000.000 cm = 3.000.000 cm = 30 km (Pasangan C)',
  },
  {
    id: 49,
    type: 'menjodohkan',
    topic: 'Diagram Batang Rasio',
    difficulty: 'Sedang',
    text: 'Diagram batang berikut menunjukkan perbandingan banyak burung Merpati dan burung Nuri di sebuah taman burung. Jika jumlah seluruh burung adalah 44 ekor, pasangkan setiap pertanyaan di kolom kiri dengan jawaban yang benar di kolom kanan!',
    illustration: {
      kind: 'comparison_bars',
      title: 'Perbandingan Burung Merpati dan Nuri',
      bars: [
        { label: 'Merpati', units: 4, totalUnits: 7, valueLabel: '4 bagian', color: '#0ea5e9' },
        { label: 'Nuri', units: 7, totalUnits: 7, valueLabel: '7 bagian', color: '#f43f5e' },
      ],
      caption: 'Jumlah total seluruh burung Merpati dan Nuri = 44 ekor',
    },
    leftItems: [
      { id: '1', text: 'Banyak burung Merpati' },
      { id: '2', text: 'Banyak burung Nuri' },
      { id: '3', text: 'Selisih banyak burung Nuri dan Merpati' },
    ],
    rightItems: [
      { id: 'A', text: '28 ekor' },
      { id: 'B', text: '16 ekor' },
      { id: 'C', text: '12 ekor' },
      { id: 'D', text: '20 ekor' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      'Total bagian = 4 + 7 = 11 bagian = 44 ekor → 1 bagian = 44 ÷ 11 = 4 ekor.\n• Merpati = 4 × 4 = 16 ekor (Pasangan B)\n• Nuri = 7 × 4 = 28 ekor (Pasangan A)\n• Selisih = 28 - 16 = 12 ekor (Pasangan C)',
  },
  {
    id: 50,
    type: 'menjodohkan',
    topic: 'Aplikasi Rasio Senilai',
    difficulty: 'Sukar',
    text: 'Pasangkan setiap permasalahan rasio senilai di kolom kiri dengan jawaban yang tepat di kolom kanan!',
    leftItems: [
      { id: '1', text: 'Harga 3 buku tulis Rp12.000,00, maka harga 5 buku tulis:' },
      { id: '2', text: 'Mobil melaju 60 km/jam, dalam 2,5 jam menempuh jarak:' },
      { id: '3', text: '4 liter bensin menempuh 48 km, maka 7 liter bensin menempuh:' },
    ],
    rightItems: [
      { id: 'A', text: '150 km' },
      { id: 'B', text: 'Rp20.000,00' },
      { id: 'C', text: '84 km' },
      { id: 'D', text: 'Rp24.000,00' },
    ],
    correctMatches: {
      '1': 'B',
      '2': 'A',
      '3': 'C',
    },
    explanation:
      '• 1 buku = 12.000 ÷ 3 = Rp4.000 → 5 buku = Rp20.000,00 (Pasangan B)\n• Jarak = 60 × 2,5 = 150 km (Pasangan A)\n• 1 liter = 48 ÷ 4 = 12 km → 7 liter = 7 × 12 = 84 km (Pasangan C)',
  },
];
