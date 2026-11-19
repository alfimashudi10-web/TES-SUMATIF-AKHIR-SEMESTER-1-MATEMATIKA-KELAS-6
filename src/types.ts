/**
 * Definisi Type & Interface Aplikasi Tes Sumatif
 */

export type QuestionType = 'pg' | 'pgk' | 'pgk_kategori' | 'menjodohkan';
export type Difficulty = 'Mudah' | 'Sedang' | 'Sukar';

export interface StudentBirthDate {
  hari: string;
  bulan: string;
  tahun: string;
}

export interface StudentIdentity {
  nama: string;
  noAbsen: string;
  tglLahir: StudentBirthDate;
}

export interface OptionItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export interface StatementItem {
  id: string; // e.g. 's1', 's2', 's3'
  text: string;
  correctAnswer: boolean; // true = Benar, false = Salah
}

export interface MatchingLeftItem {
  id: string; // e.g. '1', '2', '3'
  text: string;
}

export interface MatchingRightItem {
  id: string; // e.g. 'A', 'B', 'C', 'D'
  text: string;
}

export type QuestionIllustration =
  | {
      kind: 'fraction_circle';
      title?: string;
      totalParts: number;
      shadedParts: number;
      secondaryParts?: number;
      primaryColor?: string;
      secondaryColor?: string;
      caption?: string;
    }
  | {
      kind: 'fraction_grid';
      title?: string;
      rows: number;
      cols: number;
      shadedCount: number;
      secondaryCount?: number;
      primaryColor?: string;
      secondaryColor?: string;
      caption?: string;
    }
  | {
      kind: 'number_line';
      title?: string;
      min: number;
      max: number;
      divisions: number;
      markers: { value: number; label: string; color?: string }[];
      caption?: string;
    }
  | {
      kind: 'ratio_items';
      title?: string;
      leftLabel: string;
      leftCount: number;
      leftColor: string;
      leftShape?: 'circle' | 'square' | 'triangle' | 'star';
      rightLabel: string;
      rightCount: number;
      rightColor: string;
      rightShape?: 'circle' | 'square' | 'triangle' | 'star';
      caption?: string;
    }
  | {
      kind: 'measuring_cup';
      title?: string;
      maxLiters: number;
      currentLiters: number;
      stepLiters?: number;
      liquidColor?: string;
      caption?: string;
    }
  | {
      kind: 'comparison_bars';
      title?: string;
      bars: {
        label: string;
        units: number;
        totalUnits: number;
        valueLabel?: string;
        color: string;
      }[];
      caption?: string;
    }
  | {
      kind: 'map_scale';
      title?: string;
      pointA: string;
      pointB: string;
      distanceLabel: string;
      scaleLabel: string;
      caption?: string;
    }
  | {
      kind: 'price_promo';
      title?: string;
      cards: {
        name: string;
        qtyLabel: string;
        priceLabel: string;
        badge?: string;
        accentColor: string;
      }[];
      caption?: string;
    };

export type CognitiveLevel = 'L1' | 'L2' | 'L3';
export type KurikulumElemen =
  | 'Bilangan'
  | 'Aljabar'
  | 'Pengukuran'
  | 'Geometri'
  | 'Analisis Data dan Peluang';

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: OptionItem[]; // Untuk 'pg' (4 opsi) dan 'pgk' (3 opsi)
  statements?: StatementItem[]; // Untuk 'pgk_kategori' (3 pernyataan)
  leftItems?: MatchingLeftItem[]; // Untuk 'menjodohkan' (3 premis kiri)
  rightItems?: MatchingRightItem[]; // Untuk 'menjodohkan' (4 pilihan kanan)
  correctAnswer?: string | string[]; // string untuk 'pg' (e.g. 'B'), array untuk 'pgk' (e.g. ['A', 'C'])
  correctMatches?: Record<string, string>; // Untuk 'menjodohkan', mapping leftId -> rightId
  illustration?: QuestionIllustration; // Gambar / diagram visual pendukung soal
  difficulty: Difficulty;
  explanation: string;
  topic: string;
  // Kurikulum Merdeka Blueprint fields
  elemen?: string;
  tujuanPembelajaran?: string;
  indikatorSoal?: string;
  levelKognitif?: CognitiveLevel;
  bobot?: number;
}

export interface ShuffledQuestion extends Question {
  originalQuestionId: number;
  shuffledOptions?: OptionItem[];
  shuffledRightItems?: MatchingRightItem[];
}

export type AnswerValue = string | string[] | Record<string, boolean> | Record<string, string>;

export interface StudentItemResponse {
  questionId: number;
  isCorrect: boolean;
  score: number; // 0, 1, or partial fraction (e.g. 0.33, 0.67)
  maxScore: number;
  status: 'benar' | 'salah' | 'sebagian';
  userAnswerText?: string;
}

export interface QuestionItemAnalysis {
  questionId: number;
  questionNumber: number;
  topic: string;
  elemen: string;
  type: QuestionType;
  levelKognitif: CognitiveLevel;
  difficulty: Difficulty;
  correctCount: number;
  partialCount: number;
  wrongCount: number;
  totalStudents: number;
  persentaseKetercapaian: number; // 0 - 100
  klasifikasiKesukaran: 'Mudah' | 'Sedang' | 'Sukar'; // >70% Mudah, 30-70% Sedang, <30% Sukar
  dayaPembeda: number; // Indeks diskriminasi (D)
  dayaPembedaLabel: string;
  kunciJawaban: string;
  bobot: number;
}

export interface QuestionBlueprint {
  questionId: number;
  noSoal: number;
  elemen: string;
  tujuanPembelajaran: string;
  materiPokok: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  levelKognitifLabel: string;
  bentukSoal: string;
  kunciJawaban: string;
  bobotSkor: number;
  difficulty: Difficulty;
}

export interface StudentDiagnostic {
  result: ExamResult;
  totalScore: number;
  maxPossibleScore: number;
  nilaiAkhir: number;
  isLulus: boolean;
  correctQuestions: number[];
  partialQuestions: number[];
  wrongQuestions: number[];
  weakTopics: { topic: string; elemen: string; wrongQuestions: number[] }[];
  weakIndicators: string[];
  recommendations: string[];
}

export interface ViolationLog {
  timestamp: string;
  reason: string;
}

export interface ExamResult {
  id?: string;
  timestamp: string;
  nama: string;
  noAbsen: string;
  kelas: string;
  tglLahir?: string;
  benar: number;
  salah: number;
  nilai: number;
  status: 'Lulus' | 'Belum Lulus';
  detailJawaban?: Record<number, AnswerValue>;
  itemResponses?: Record<number, StudentItemResponse>;
  durasiPengerjaan?: string;
  mataPelajaran?: string;
  // Anti-Cheat & Integritas Ujian
  violationsCount?: number;
  violationLogs?: ViolationLog[];
  submissionReason?: 'normal' | 'time_out' | 'violation_limit';
  terminationNote?: string;
}

export type AppStage = 1 | 2 | 3 | 4;

