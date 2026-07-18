/* Central content map for footer links & detail pages.
 * Keeping this in one place ensures narrative consistency across
 * every page (design, tone, and messaging) without touching the
 * existing landing page sections. */

export type PageSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PageContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: PageSection[];
  cta?: { label: string; href: string; external?: boolean };
};

const APP_URL = "https://app.speakingpro.online";
const WA_URL = "https://wa.me/6285930006425";

const CTA_DOWNLOAD = { label: "Install Speaking Pro™", href: APP_URL, external: true };
const CTA_CONTACT = { label: "Chat via WhatsApp", href: WA_URL, external: true };

export const PAGES: Record<string, PageContent> = {
  /* ── Platform ── */
  "fitur-ai-mentor": {
    slug: "fitur-ai-mentor",
    eyebrow: "Platform",
    title: "AI Mentor — Coach 24/7 di Ponsel Anda",
    description:
      "AI Mentor Speaking Pro™ dilatih dari 18+ tahun pengalaman Coach Faisal, buku best-seller, dan jurnal komunikasi internasional.",
    sections: [
      {
        heading: "Selalu Tersedia, Selalu Objektif",
        body:
          "Berlatih kapan pun tanpa menunggu jadwal coach. AI Mentor memberi umpan balik yang konsisten, terukur, dan bebas dari bias.",
      },
      {
        heading: "Dilatih dengan Standar Internasional",
        body: "Basis pengetahuan mencakup framework komunikasi global yang dipakai TED, Toastmasters, dan riset akademik terkini.",
        bullets: [
          "18+ tahun pengalaman coaching Faisal Maulana",
          "Buku best-seller & jurnal komunikasi",
          "Framework benchmark internasional",
        ],
      },
    ],
    cta: CTA_DOWNLOAD,
  },
  "daily-drills": {
    slug: "daily-drills",
    eyebrow: "Platform",
    title: "Daily Drills — Latihan Harian Terstruktur",
    description: "Latihan singkat 10–15 menit per hari yang dirancang untuk membangun otot public speaking Anda secara bertahap.",
    sections: [
      { heading: "Micro-Training", body: "Setiap sesi fokus pada satu aspek: pacing, artikulasi, struktur, atau bahasa tubuh." },
      { heading: "Progress Konsisten", body: "Konsistensi harian mengalahkan intensitas mingguan. Anda akan merasakan perubahan nyata di minggu ke-2." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "weekly-feedback": {
    slug: "weekly-feedback",
    eyebrow: "Platform",
    title: "Weekly Feedback — Review Mendalam Setiap Minggu",
    description: "Ringkasan performa mingguan dari AI Mentor: apa yang sudah membaik, apa yang perlu difokuskan minggu depan.",
    sections: [
      { heading: "Analitik yang Bermakna", body: "Bukan sekadar skor — Anda mendapat rekomendasi drill spesifik untuk area yang tertinggal." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "benchmark-framework": {
    slug: "benchmark-framework",
    eyebrow: "Platform",
    title: "Benchmark Framework — Standar Internasional",
    description: "Framework penilaian yang membandingkan performa Anda dengan standar public speaker global.",
    sections: [
      { heading: "5 Pilar Penilaian", body: "Content, Delivery, Structure, Impact, Presence — dievaluasi secara terpisah agar Anda tahu persis mana yang perlu diasah." },
      { heading: "Terukur & Transparan", body: "Setiap skor disertai penjelasan sehingga Anda paham logika penilaiannya." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "progress-tracking": {
    slug: "progress-tracking",
    eyebrow: "Platform",
    title: "Progress Tracking — Lihat Perkembangan Anda",
    description: "Dashboard yang memperlihatkan pertumbuhan Anda dari hari ke hari, minggu ke minggu.",
    sections: [
      { heading: "Data Berbicara", body: "Grafik perkembangan pacing, kejelasan, dan struktur membuat progres Anda nyata dan memotivasi." },
    ],
    cta: CTA_DOWNLOAD,
  },

  /* ── Program ── */
  "untuk-profesional": {
    slug: "untuk-profesional",
    eyebrow: "Program",
    title: "Speaking Pro™ untuk Profesional",
    description: "Dirancang untuk manajer, konsultan, dan eksekutif yang ingin presentasi, pitch, dan meeting yang lebih berdampak.",
    sections: [
      { heading: "Fokus Program", body: "Executive presence, storytelling data, dan handling Q&A tingkat lanjut." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "untuk-mahasiswa": {
    slug: "untuk-mahasiswa",
    eyebrow: "Program",
    title: "Speaking Pro™ untuk Mahasiswa",
    description: "Persiapkan diri untuk sidang, kompetisi debat, dan wawancara kerja dengan latihan terstruktur.",
    sections: [
      { heading: "Manfaat Nyata", body: "Struktur argumen yang kuat, kepercayaan diri di depan panelis, dan artikulasi yang jelas." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "untuk-creator": {
    slug: "untuk-creator",
    eyebrow: "Program",
    title: "Speaking Pro™ untuk Content Creator",
    description: "Untuk kreator, host podcast, dan YouTuber yang ingin delivery lebih natural dan engaging di kamera.",
    sections: [
      { heading: "Fokus Program", body: "Hook opening, pacing untuk konten pendek, dan konsistensi tone lintas episode." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "untuk-entrepreneur": {
    slug: "untuk-entrepreneur",
    eyebrow: "Program",
    title: "Speaking Pro™ untuk Entrepreneur",
    description: "Untuk founder yang harus pitching ke investor, memimpin tim, dan menjadi wajah brand.",
    sections: [
      { heading: "Fokus Program", body: "Investor pitch storytelling, narasi brand, dan public appearance." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "program-30-hari": {
    slug: "program-30-hari",
    eyebrow: "Program",
    title: "Program 30 Hari — Transformasi Terukur",
    description: "Kurikulum 1 bulan yang membawa Anda dari ragu menjadi percaya diri, dengan hasil yang bisa diukur.",
    sections: [
      { heading: "Minggu 1", body: "Fondasi: pacing, artikulasi, dan pernapasan." },
      { heading: "Minggu 2", body: "Struktur: opening yang kuat, alur, dan closing yang berkesan." },
      { heading: "Minggu 3", body: "Delivery: bahasa tubuh, ekspresi, dan variasi vokal." },
      { heading: "Minggu 4", body: "Impact: storytelling, handling Q&A, dan performance akhir." },
    ],
    cta: CTA_DOWNLOAD,
  },

  /* ── Sumber Belajar ── */
  "blog": {
    slug: "blog",
    eyebrow: "Sumber Belajar",
    title: "Blog Speaking Pro™",
    description: "Wawasan, riset, dan tips praktis seputar public speaking dari tim Speaking Pro™.",
    sections: [
      { heading: "Segera Hadir", body: "Kami sedang menyiapkan artikel pertama. Sementara itu, mulai berlatih langsung di aplikasi." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "panduan": {
    slug: "panduan",
    eyebrow: "Sumber Belajar",
    title: "Panduan Public Speaking",
    description: "Panduan singkat berbasis framework Speaking Pro™ untuk memulai perjalanan public speaking Anda.",
    sections: [
      { heading: "Mulai dari Kejelasan", body: "Sebelum berlatih delivery, pastikan Anda tahu satu pesan inti yang ingin disampaikan." },
      { heading: "Latih, Bukan Baca", body: "Public speaking dilatih, bukan dipelajari. Konsistensi harian adalah kuncinya." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "studi-kasus": {
    slug: "studi-kasus",
    eyebrow: "Sumber Belajar",
    title: "Studi Kasus",
    description: "Cerita transformasi pengguna Speaking Pro™ dari berbagai latar belakang.",
    sections: [
      { heading: "Segera Hadir", body: "Studi kasus lengkap akan dipublikasikan setelah cohort pertama menyelesaikan Program 30 Hari." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "faq": {
    slug: "faq",
    eyebrow: "Sumber Belajar",
    title: "Pertanyaan yang Sering Diajukan",
    description: "Jawaban singkat untuk pertanyaan paling umum tentang Speaking Pro™.",
    sections: [
      { heading: "Apakah ini aplikasi native?", body: "Speaking Pro™ adalah Progressive Web App — Anda bisa install ke Home Screen tanpa Play Store/App Store." },
      { heading: "Berapa lama untuk melihat hasil?", body: "Mayoritas pengguna merasakan perubahan nyata dalam 14 hari pertama dengan latihan konsisten." },
      { heading: "Apakah cocok untuk pemula?", body: "Ya. Kurikulum dirancang bertahap, mulai dari fondasi paling dasar." },
      { heading: "Apakah ada dukungan manusia?", body: "AI Mentor tersedia 24/7. Untuk pertanyaan lain, tim kami siap dihubungi via WhatsApp." },
    ],
    cta: CTA_CONTACT,
  },
  "help-center": {
    slug: "help-center",
    eyebrow: "Sumber Belajar",
    title: "Help Center",
    description: "Bantuan teknis dan panduan penggunaan Speaking Pro™.",
    sections: [
      { heading: "Instalasi", body: "Buka app.speakingpro.online di browser, pilih menu, dan tap 'Add to Home Screen'." },
      { heading: "Masalah Login?", body: "Hubungi tim support via WhatsApp untuk penanganan cepat." },
    ],
    cta: CTA_CONTACT,
  },

  /* ── Perusahaan ── */
  "tentang": {
    slug: "tentang",
    eyebrow: "Perusahaan",
    title: "Tentang Speaking Pro™",
    description: "The First AI-Powered Public Speaking Platform in Indonesia — dibangun oleh praktisi, untuk praktisi.",
    sections: [
      { heading: "Misi Kami", body: "Membuat coaching public speaking berkualitas dunia dapat diakses siapa pun, kapan pun, dengan harga yang wajar." },
      { heading: "Filosofi", body: "Public speaking tidak dipelajari — public speaking dilatih. Aplikasi kami dirancang untuk melatih, bukan sekadar mengajar." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "tim": {
    slug: "tim",
    eyebrow: "Perusahaan",
    title: "Tim Speaking Pro™",
    description: "Tim multidisiplin — coach berpengalaman, engineer, desainer produk, dan ahli komunikasi.",
    sections: [
      { heading: "Coach Utama", body: "Faisal Maulana — 18+ tahun pengalaman melatih ribuan profesional Indonesia." },
      { heading: "Tim Inti", body: "Dede Darmawan, Raka Tegar Wicaksono, Dita Maulani, dan Gami Suhendra." },
    ],
    cta: CTA_DOWNLOAD,
  },
  "karir": {
    slug: "karir",
    eyebrow: "Perusahaan",
    title: "Karir di Speaking Pro™",
    description: "Bergabung membangun platform pendidikan public speaking terdepan di Indonesia.",
    sections: [
      { heading: "Belum Ada Lowongan Terbuka", body: "Namun kami selalu terbuka untuk kolaborator luar biasa. Kirim CV & portofolio via WhatsApp." },
    ],
    cta: CTA_CONTACT,
  },
  "kontak": {
    slug: "kontak",
    eyebrow: "Perusahaan",
    title: "Kontak",
    description: "Kami siap membantu — dari pertanyaan produk hingga kemitraan.",
    sections: [
      { heading: "WhatsApp", body: "+62 859-3000-6425 — respons 1×24 jam pada hari kerja." },
      { heading: "Kemitraan", body: "Untuk kerja sama korporat dan institusi, sebutkan 'Partnership' di pesan pertama Anda." },
    ],
    cta: CTA_CONTACT,
  },
  "kemitraan": {
    slug: "kemitraan",
    eyebrow: "Perusahaan",
    title: "Kemitraan Korporat & Institusi",
    description: "Program Speaking Pro™ untuk perusahaan, universitas, dan komunitas.",
    sections: [
      { heading: "Untuk Perusahaan", body: "Paket kelompok dengan dashboard admin dan laporan progres tim." },
      { heading: "Untuk Kampus", body: "Program pelatihan mahasiswa dengan lisensi kelas." },
    ],
    cta: CTA_CONTACT,
  },

  /* ── Legal ── */
  "privasi": {
    slug: "privasi",
    eyebrow: "Legal",
    title: "Kebijakan Privasi",
    description: "Bagaimana Speaking Pro™ mengumpulkan, menggunakan, dan melindungi data Anda.",
    sections: [
      { heading: "Data yang Kami Kumpulkan", body: "Nama, email, nomor WhatsApp, dan rekaman latihan yang Anda hasilkan di dalam aplikasi." },
      { heading: "Bagaimana Data Digunakan", body: "Data digunakan untuk personalisasi latihan, memberikan umpan balik AI, dan meningkatkan kualitas layanan." },
      { heading: "Perlindungan", body: "Rekaman latihan Anda pribadi dan tidak dibagikan ke pihak ketiga tanpa izin eksplisit." },
    ],
  },
  "syarat": {
    slug: "syarat",
    eyebrow: "Legal",
    title: "Syarat & Ketentuan",
    description: "Ketentuan penggunaan layanan Speaking Pro™.",
    sections: [
      { heading: "Akun Pengguna", body: "Satu akun untuk satu pengguna. Tidak untuk dibagikan." },
      { heading: "Konten", body: "Rekaman latihan adalah milik Anda. Kami hanya memproses untuk memberikan umpan balik." },
      { heading: "Pembayaran", body: "Harga launching Rp 75.000 untuk Program 30 Hari, dibayar sekali di awal." },
    ],
  },
  "refund": {
    slug: "refund",
    eyebrow: "Legal",
    title: "Kebijakan Refund",
    description: "Ketentuan pengembalian dana Speaking Pro™.",
    sections: [
      { heading: "Garansi 7 Hari", body: "Jika Anda belum merasa cocok dalam 7 hari pertama dan telah menyelesaikan minimal 5 sesi latihan, kami akan mengembalikan 100% biaya." },
      { heading: "Cara Klaim", body: "Hubungi tim support via WhatsApp dengan menyertakan nama dan email akun Anda." },
    ],
    cta: CTA_CONTACT,
  },
  "cookie": {
    slug: "cookie",
    eyebrow: "Legal",
    title: "Cookie Policy",
    description: "Bagaimana Speaking Pro™ menggunakan cookie di aplikasi web kami.",
    sections: [
      { heading: "Cookie Esensial", body: "Diperlukan untuk sesi login dan menjaga preferensi Anda." },
      { heading: "Cookie Analitik", body: "Membantu kami memahami penggunaan dan meningkatkan pengalaman produk." },
    ],
  },
};

/* ── Footer Structure ── */
export type FooterLink = { label: string; to?: string; href?: string; external?: boolean };
export type FooterColumn = { title: string; links: FooterLink[] };

const p = (slug: string): string => `/p/${slug}`;

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "AI Mentor", to: p("fitur-ai-mentor") },
      { label: "Daily Drills", to: p("daily-drills") },
      { label: "Weekly Feedback", to: p("weekly-feedback") },
      { label: "Benchmark Framework", to: p("benchmark-framework") },
      { label: "Progress Tracking", to: p("progress-tracking") },
      { label: "Install App", href: APP_URL, external: true },
    ],
  },
  {
    title: "Program",
    links: [
      { label: "Program 30 Hari", to: p("program-30-hari") },
      { label: "Untuk Profesional", to: p("untuk-profesional") },
      { label: "Untuk Mahasiswa", to: p("untuk-mahasiswa") },
      { label: "Untuk Content Creator", to: p("untuk-creator") },
      { label: "Untuk Entrepreneur", to: p("untuk-entrepreneur") },
    ],
  },
  {
    title: "Sumber Belajar",
    links: [
      { label: "Blog", to: p("blog") },
      { label: "Panduan Public Speaking", to: p("panduan") },
      { label: "Studi Kasus", to: p("studi-kasus") },
      { label: "FAQ", to: p("faq") },
      { label: "Help Center", to: p("help-center") },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", to: p("tentang") },
      { label: "Tim", to: p("tim") },
      { label: "Karir", to: p("karir") },
      { label: "Kemitraan", to: p("kemitraan") },
      { label: "Kontak", to: p("kontak") },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Kebijakan Privasi", to: p("privasi") },
      { label: "Syarat & Ketentuan", to: p("syarat") },
      { label: "Kebijakan Refund", to: p("refund") },
      { label: "Cookie Policy", to: p("cookie") },
    ],
  },
  {
    title: "Terhubung",
    links: [
      { label: "WhatsApp", href: WA_URL, external: true },
      { label: "Instagram", href: "https://instagram.com/speakingpro.id", external: true },
      { label: "TikTok", href: "https://tiktok.com/@speakingpro.id", external: true },
      { label: "YouTube", href: "https://youtube.com/@speakingpro", external: true },
      { label: "LinkedIn", href: "https://linkedin.com/company/speakingpro", external: true },
    ],
  },
];
