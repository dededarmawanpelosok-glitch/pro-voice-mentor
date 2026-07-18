import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Mic,
  Calendar,
  AudioLines,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  XCircle,
  CheckCircle2,
  Users,
  Briefcase,
  Headphones,
  GraduationCap,
  Target,
  BookOpen,
  Award,
  Clock,
  Lock,
  Download,
  Smartphone,
  Share,
  PlusSquare,
  Zap,
} from "lucide-react";
import heroAsset from "@/assets/hero-pro.webp.asset.json";
import forYouAsset from "@/assets/for-you.webp.asset.json";
import logoAsset from "@/assets/speaking-pro-logo.png.asset.json";
import { DownloadAppButton } from "@/components/DownloadAppButton";

/* Scroll-based parallax: returns window scrollY */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

/* Mouse-driven 3D tilt */
function useTilt<T extends HTMLElement>(maxDeg = 10) {
  const ref = useRef<T | null>(null);
  const [t, setT] = useState({ rx: 0, ry: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setT({ ry: px * maxDeg * 2, rx: -py * maxDeg * 2 });
    };
    const onLeave = () => setT({ rx: 0, ry: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxDeg]);
  return { ref, transform: `perspective(1200px) rotateX(${t.rx}deg) rotateY(${t.ry}deg)` };
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speaking Pro™ — The First AI-Powered Public Speaking Platform in Indonesia" },
      {
        name: "description",
        content:
          "Speaking Pro™ resmi diluncurkan. Install aplikasi web di ponsel Anda — latihan public speaking harian dengan AI Mentor & Coach Faisal Maulana.",
      },
      { property: "og:title", content: "Speaking Pro™ — Full Version" },
      {
        property: "og:description",
        content:
          "Public Speaking tidak dipelajari — Public Speaking dilatih. Download aplikasi Speaking Pro™ sekarang.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-white text-[var(--navy)] antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Audience />
      <Team />
      <Pricing />
      <Footer />
    </main>
  );
}

/* ───────────── NAVBAR ───────────── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,163,255,0.08)] bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-3.5">
        <a href="#" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
          <LogoMark />
          <span className="truncate font-display text-base font-bold tracking-tight text-[var(--navy)] sm:text-xl">
            Speaking Pro<span className="text-[var(--cyan-brand)]">™</span>
          </span>
        </a>
        <a
          href="#download"
          className="btn-gradient shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide sm:px-5 sm:py-2.5 sm:text-xs"
        >
          <Download className="h-3.5 w-3.5" />
          Download App
        </a>
      </div>

    </header>
  );
}

function LogoMark() {
  return (
    <div
      className="relative h-11 w-11 shrink-0"
      style={{ perspective: "600px" }}
    >
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(closest-side,rgba(0,163,255,0.45),transparent_70%)] blur-md" />
      <img
        src={(logoAsset as { url: string }).url}
        alt="Speaking Pro logo"
        className="relative h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(0,163,255,0.45)] transition-transform duration-500 will-change-transform group-hover:[transform:rotateY(20deg)_rotateX(-6deg)_scale(1.08)]"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  const y = useScrollY();
  return (
    <section className="ambient-bg relative overflow-hidden">
      {/* glow blobs — parallax */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,163,255,0.22),transparent_70%)] will-change-transform"
        style={{ transform: `translate3d(-50%, ${y * 0.35}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.22),transparent_70%)] will-change-transform"
        style={{ transform: `translate3d(0, ${y * -0.25}px, 0)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[-8%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(0,163,255,0.18),transparent_70%)] will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.2}px, 0)` }}
      />


      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-10 pb-16 sm:gap-14 sm:px-8 sm:pt-16 sm:pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        {/* LEFT */}
        <div className="flex min-w-0 flex-col">
          <span className="inline-flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-[rgba(0,163,255,0.25)] bg-white/80 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-[var(--navy)] backdrop-blur sm:px-4 sm:py-2 sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-[var(--cyan-brand)]" />
            <span className="text-[var(--navy)]">
              The First AI-Powered Public Speaking Platform in Indonesia
            </span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--aqua-glow)] bg-clip-text text-transparent">
              Coach Faisal Maulana × AI Mentor
            </span>
          </span>

          <h1 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[var(--navy)] sm:mt-6 sm:text-5xl sm:leading-[1.05] lg:text-[3.4rem]">
            Public Speaking
            <br />
            Tidak Hanya Dipelajari
            <br />
            Tetapi <span className="text-gradient-brand">Harus Dilatih</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] text-slate-600 sm:mt-5 sm:text-lg">
            <span className="font-semibold text-[var(--navy)]">Latihan Setiap Hari.</span>{" "}
            <span className="font-semibold text-[var(--navy)]">Evaluasi Setiap Minggu.</span>{" "}
            <span className="font-semibold text-[var(--navy)]">Laporan Transformasi Setiap Bulan.</span>
          </p>

          <div className="glass-card mt-7 rounded-3xl p-5 sm:mt-8 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--navy)] sm:mb-4 sm:text-xs">
              <Zap className="h-3.5 w-3.5 shrink-0 text-[var(--cyan-brand)]" />
              <span className="min-w-0">Full Version Tersedia — Install di Ponsel Anda</span>
            </div>
            <p className="text-sm text-slate-600">
              Buka aplikasi web Speaking Pro™ dan install ke home screen — tanpa Play Store / App Store.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <DownloadAppButton size="lg" fullWidth label="Buka & Install Aplikasi" />
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-[rgba(0,163,255,0.2)] bg-white px-4 py-3 text-[12px] font-semibold text-[var(--navy)] transition hover:border-[var(--cyan-brand)] sm:px-5 sm:text-[13px]"
              >
                <Smartphone className="h-4 w-4 text-[var(--cyan-brand)]" />
                Cara Install
              </a>
            </div>
          </div>



          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--cyan-brand)]" />
              Data privat & terenkripsi
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-[var(--cyan-brand)]" />
              18+ tahun pengalaman Coach Faisal
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--cyan-brand)]" />
              100.000+ peserta terdampingi
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const tilt = useTilt<HTMLDivElement>(9);
  return (
    <div
      ref={tilt.ref}
      className="relative mx-auto aspect-[5/6] w-full max-w-[560px] transition-transform duration-200 ease-out will-change-transform"
      style={{ transform: tilt.transform, transformStyle: "preserve-3d" }}
    >

      {/* Soundwave rings behind */}
      <svg
        className="absolute inset-0 h-full w-full animate-spin-slow"
        viewBox="0 0 500 600"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="ring" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="transparent" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.35" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="280" r="220" stroke="url(#wave)" strokeWidth="1" opacity="0.5" />
        <circle cx="250" cy="280" r="170" stroke="url(#wave)" strokeWidth="1" opacity="0.4" />
        <circle cx="250" cy="280" r="120" stroke="url(#wave)" strokeWidth="1" opacity="0.3" />
        {/* Soundwave bars left */}
        <g transform="translate(40,260)">
          {Array.from({ length: 12 }).map((_, i) => {
            const h = 12 + Math.abs(Math.sin(i * 0.9)) * 60;
            return (
              <rect
                key={i}
                x={i * 14}
                y={-h / 2}
                width="4"
                height={h}
                rx="2"
                fill="url(#wave)"
              />
            );
          })}
        </g>
      </svg>

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-[36px]">
        <img
          src={heroAsset.url}
          alt="Profesional wanita berlatih public speaking dengan earphone dan smartphone"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        {/* subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[rgba(0,163,255,0.08)] via-transparent to-[rgba(0,229,255,0.10)]" />
      </div>

      {/* Floating progress ring card */}
      <div
        className="glass-card absolute -left-4 bottom-10 hidden w-56 rounded-2xl p-4 sm:block"
        style={{ transform: "translateZ(60px)" }}
      >
        <div className="flex items-center gap-3">
          <ProgressRing value={86} />
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Confidence Score
            </div>
            <div className="font-display text-2xl font-bold text-[var(--navy)]">
              86<span className="text-sm text-slate-400">/100</span>
            </div>
            <div className="text-[11px] font-medium text-emerald-600">▲ +24% this month</div>
          </div>
        </div>
      </div>

      {/* Floating session badge */}
      <div
        className="glass-card absolute -right-3 top-8 hidden items-center gap-3 rounded-2xl p-3 pr-4 sm:flex"
        style={{ transform: "translateZ(80px)" }}
      >
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white">
          <Mic className="h-[18px] w-[18px]" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Day 12 · Drill
          </div>
          <div className="text-sm font-semibold text-[var(--navy)]">Articulation · 10 min</div>
        </div>
      </div>
    </div>
  );
}

function ProgressRing({ value }: { value: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="-rotate-90">
      <circle cx="28" cy="28" r={r} stroke="rgba(0,163,255,0.15)" strokeWidth="5" fill="none" />
      <circle
        cx="28"
        cy="28"
        r={r}
        stroke="url(#ringGrad)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
      />
      <defs>
        <linearGradient id="ringGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ───────────── PROBLEM ───────────── */
function Problem() {
  const items = [
    {
      title: "Gugup Berlebih di Depan Audiens",
      desc: "Detak jantung meningkat, suara bergetar, dan keraguan pada diri sendiri menutup kesempatan untuk tampil maksimal.",
    },
    {
      title: "Gagap Menyusun Ide",
      desc: "Presentasi terasa berantakan dan tidak terstruktur karena tidak terbiasa membangun alur berpikir yang jernih.",
    },
    {
      title: "Kehilangan Arah Pasca-Training",
      desc: "Workshop selesai, motivasi naik sebentar — lalu hilang. Tidak ada sistem yang mendisiplinkan latihan harian.",
    },
  ];

  return (
    <section id="problem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(231,106,106,0.25)] bg-[rgba(231,106,106,0.08)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-[var(--soft-red)] uppercase">
            The Real Problem
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Mengapa Kemampuan Berbicara Anda
            <br className="hidden sm:block" /> Jalan di Tempat?
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 sm:mt-5 sm:text-lg">
            Banyak orang sudah ikut training, membaca buku, dan menonton video.
            Namun saat berbicara di depan umum, masalah ini tetap muncul:
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative rounded-3xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:border-[rgba(231,106,106,0.25)] hover:shadow-[0_20px_50px_-25px_rgba(231,106,106,0.45)] sm:p-7"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[rgba(231,106,106,0.08)] text-[var(--soft-red)] sm:h-12 sm:w-12">
                <XCircle className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-[var(--navy)] sm:mt-5">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-2.5">{it.desc}</p>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:mt-6">
                #{(i + 1).toString().padStart(2, "0")} · Pain Point
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ───────────── HOW IT WORKS (Bento) ───────────── */
function HowItWorks() {
  return (
    <section id="how" className="ambient-bg relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            How It Works
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Sistem dalam <span className="text-gradient-brand">Genggaman Anda</span>
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 sm:mt-5 sm:text-lg">
            Sinergi tiga komponen utama — <span className="font-semibold text-[var(--navy)]">Latihan Setiap Hari</span>.{" "}
            <span className="font-semibold text-[var(--navy)]">Evaluasi Setiap Minggu</span>.{" "}
            <span className="font-semibold text-[var(--navy)]">Laporan Transformasi Setiap Bulan</span>.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Daily Drill — wide */}
          <article className="glass-card relative overflow-hidden rounded-[28px] p-6 sm:p-7 lg:col-span-2 lg:row-span-1">

            <BentoLabel num="01" label="Daily Speaking Drill" />
            <div className="mt-4 grid items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-xl font-bold leading-tight text-[var(--navy)] sm:text-2xl lg:text-3xl">
                  Latihan harian yang mendikte{" "}
                  <span className="text-gradient-brand">kebutuhan personal</span> Anda.
                </h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Artikulasi, kontrol filler words, atau intonasi — dikurasikan setiap hari, 10 menit cukup.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Artikulasi", "Filler Words", "Intonasi", "Pacing"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[rgba(0,163,255,0.2)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--navy)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini calendar card */}
              <div className="relative w-full sm:w-[230px]">
                <div className="rounded-2xl border border-[rgba(0,163,255,0.18)] bg-white p-4 shadow-[0_18px_40px_-20px_rgba(0,163,255,0.35)]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      <Calendar className="h-3.5 w-3.5 text-[var(--cyan-brand)]" />
                      Day 1
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--aqua-glow)] px-2 py-0.5 text-[10px] font-bold text-white">
                      10 MIN
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white">
                      <Mic className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--navy)]">Articulation</div>
                      <div className="text-[11px] text-slate-500">Personal Drill</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-7 gap-1.5">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-5 rounded-md ${
                          i < 5
                            ? "bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)]"
                            : i === 5
                            ? "border border-[var(--cyan-brand)] bg-white"
                            : "bg-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Audio submission */}
          <article className="relative overflow-hidden rounded-[28px] bg-[var(--navy)] p-6 text-white sm:p-7">
            <BentoLabel num="02" label="Weekly Audio Submission" dark />
            <h3 className="mt-4 font-display text-xl font-bold leading-tight sm:text-2xl">
              1 rekaman seminggu.
              <br />
              <span className="text-gradient-brand">100% privat.</span>
            </h3>
            <p className="mt-3 text-sm text-white/70">
              Kirimkan rekaman suara latihan terbaik Anda. Data sepenuhnya aman & rahasia.
            </p>


            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/60">
                <span className="flex items-center gap-1.5">
                  <AudioLines className="h-3.5 w-3.5 text-[var(--aqua-glow)]" />
                  Recording · Week 3
                </span>
                <span>05:00 MAX</span>
              </div>
              <div className="mt-3 flex h-12 items-end gap-[2px] sm:gap-[3px]">
                {Array.from({ length: 28 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin(i * 0.6)) * 80;
                  const active = i < 16;
                  return (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-[3px] flex-1 rounded-full ${
                        active
                          ? "bg-gradient-to-t from-[var(--cyan-brand)] to-[var(--aqua-glow)]"
                          : "bg-white/15"
                      }`}
                    />
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-white/60">
                <span>02:48</span>
                <span className="flex items-center gap-1 text-[var(--aqua-glow)]">
                  <Lock className="h-3 w-3" /> Encrypted
                </span>
                <span>05:00</span>
              </div>
            </div>
          </article>

          {/* AI + Coach analytics — wide */}
          <article className="glass-card relative overflow-hidden rounded-[28px] p-6 sm:p-7 lg:col-span-3">
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_1.4fr]">
              <div>
                <BentoLabel num="03" label="AI Mentor + Coach Analytics" />
                <h3 className="mt-4 font-display text-xl font-bold leading-tight text-[var(--navy)] sm:text-2xl lg:text-[1.8rem]">
                  Evaluasi presisi dari kombinasi{" "}
                  <span className="text-gradient-brand">AI Mentor</span> &
                  sentuhan personal <span className="text-gradient-brand">Coach Faisal</span>.
                </h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Lacak perkembangan Anda secara terukur — bukan sekadar perasaan.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { k: "Confidence", v: "+24%", icon: TrendingUp },
                    { k: "Clarity", v: "+18%", icon: Sparkles },
                    { k: "Structure", v: "+31%", icon: Target },
                  ].map(({ k, v, icon: Icon }) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-[rgba(0,163,255,0.15)] bg-white/80 p-2.5 sm:p-3"
                    >
                      <Icon className="h-4 w-4 text-[var(--cyan-brand)]" />
                      <div className="mt-2 text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">
                        {k}
                      </div>
                      <div className="font-display text-base font-bold text-[var(--navy)] sm:text-lg">{v}</div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Chart */}
              <div className="rounded-2xl border border-[rgba(0,163,255,0.15)] bg-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Progress Index
                    </div>
                    <div className="font-display text-2xl font-bold text-[var(--navy)]">
                      8.7<span className="text-sm text-slate-400">/10</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                    ▲ +24% / mo
                  </span>
                </div>
                <ProgressChart />
                <div className="mt-3 grid grid-cols-6 text-[10px] font-medium text-slate-400">
                  {["W1", "W2", "W3", "W4", "W5", "W6"].map((w) => (
                    <span key={w} className="text-center">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function BentoLabel({ num, label, dark }: { num: string; label: string; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${
        dark ? "text-white/70" : "text-slate-500"
      }`}
    >
      <span
        className={`grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold ${
          dark
            ? "bg-white/10 text-[var(--aqua-glow)]"
            : "bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white"
        }`}
      >
        {num}
      </span>
      {label}
    </div>
  );
}

function ProgressChart() {
  const pts = [22, 30, 42, 38, 56, 70, 78];
  const w = 320, h = 110, max = 100;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step},${h - (p / max) * h}`)
    .join(" ");
  const area = `${path} L ${w},${h} L 0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 w-full">
      <defs>
        <linearGradient id="chartArea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00A3FF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chartLine" x1="0" x2="1">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#chartArea)" />
      <path d={path} stroke="url(#chartLine)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={i * step}
          cy={h - (p / max) * h}
          r={i === pts.length - 1 ? 5 : 3}
          fill="#fff"
          stroke="#00A3FF"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

/* ───────────── AUDIENCE & AUTHORITY ───────────── */
function Audience() {
  const segments = [
    { label: "Karyawan", icon: Briefcase },
    { label: "Tim Sales & Marketing", icon: TrendingUp },
    { label: "Supervisor / Manager", icon: Users },
    { label: "Customer Service", icon: Headphones },
    { label: "Fresh Graduate", icon: GraduationCap },
  ];

  return (
    <section id="audience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            For You
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Dirancang Khusus untuk Mereka yang
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">Dituntut Tampil Meyakinkan</span>
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
          {segments.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.18)] bg-white px-3.5 py-2.5 text-xs font-semibold text-[var(--navy)] shadow-[0_8px_24px_-18px_rgba(0,163,255,0.5)] transition hover:-translate-y-0.5 hover:border-[var(--cyan-brand)] hover:shadow-[0_14px_30px_-18px_rgba(0,163,255,0.7)] sm:gap-2.5 sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white sm:h-7 sm:w-7">
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              {label}
            </div>
          ))}
        </div>


        {/* Authority block — clean, professional card frame */}
        <AuthorityBlock />
      </div>
    </section>
  );
}

function AuthorityBlock() {
  return (
    <div className="relative mt-14 sm:mt-20">
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
        {/* Professional framed image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-2.5 shadow-[0_24px_60px_-24px_rgba(13,33,71,0.18)] sm:rounded-[28px] sm:p-3">
            <div className="relative overflow-hidden rounded-[18px] bg-slate-100 aspect-[16/9] sm:rounded-[20px]">
              <img
                src={forYouAsset.url}
                alt="Coach Faisal Maulana berinteraksi dengan peserta Speaking PRO"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* precision corner accent */}
            <div className="pointer-events-none absolute -bottom-px -right-px h-12 w-12 rounded-tl-[24px] rounded-br-[24px] border-l border-t border-white/40 bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] sm:h-16 sm:w-16 sm:rounded-tl-[28px] sm:rounded-br-[28px]" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            <ShieldCheck className="h-3 w-3" />
            Benchmark Framework
          </span>
          <h3 className="mt-4 font-display text-xl font-extrabold leading-tight text-[var(--navy)] sm:text-3xl">
            Framework <span className="text-gradient-brand">SPEAKING PRO</span> berstandar Internasional
          </h3>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Dibangun dari pengalaman <span className="font-semibold text-[var(--navy)]">COACH FAISAL MAULANA</span> selama{" "}
            <span className="font-semibold text-[var(--navy)]">18+ tahun</span> sebagai praktisi public speaking
            yang telah menangani <span className="font-semibold text-[var(--navy)]">200+ Perusahaan Nasional,
            Multi-Nasional & Kementerian Republik Indonesia</span> serta secara total telah berbicara di depan{" "}
            <span className="font-semibold text-[var(--navy)]">100.000+ Peserta</span> secara offline.
          </p>


          <div className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            Dilengkapi oleh AI MENTOR yang menerapkan:
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              { icon: BookOpen, t: "24 Buku Best-Seller Internasional", s: "Referensi communication skill kelas dunia" },
              { icon: BookOpen, t: "12 Buku Best-Seller Indonesia", s: "Wawasan konteks lokal & budaya" },
              { icon: Target, t: "15 Jurnal & Penelitian", s: "Riset nasional & internasional terkurasi" },
              { icon: Award, t: "18+ Tahun Coach Faisal", s: "200+ perusahaan · 100.000+ peserta" },
            ].map(({ icon: Icon, t, s }) => (
              <div
                key={t}
                className="rounded-2xl border border-slate-100 bg-white/80 p-4 backdrop-blur"
              >
                <Icon className="h-5 w-5 text-[var(--cyan-brand)]" />
                <div className="mt-2 text-sm font-bold text-[var(--navy)]">{t}</div>
                <div className="text-xs text-slate-500">{s}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-slate-500">
            "Seluruhnya berkaitan dengan peningkatan communication skill secara umum & public speaking skill secara khusus."
          </p>
        </div>
      </div>
    </div>
  );
}


/* ───────────── TEAM ───────────── */
const TEAM = [
  {
    name: "Faisal Maulana, CPC®, CFFL®, CRMO®",
    role: "Founder & CEO",
    exp: "18+ Years Public Speaking Experience",
    img: "/img/team/faisal.webp",
  },
  {
    name: "Dede Darmawan",
    role: "Co-Founder & CMO",
    exp: "6 Years Specialist Branding",
    img: "/img/team/dede.webp",
  },
  {
    name: "Raka Tegar Wicaksono, S.Pd",
    role: "CTO",
    exp: "2+ Years Apps & AI Development",
    img: "/img/team/raka.webp",
  },
  {
    name: "Dita Maulani, S.S.",
    role: "Product Development & Learning Consultant",
    exp: "18+ Years Teaching Experience",
    img: "/img/team/dita.webp",
  },
  {
    name: "Gami Suhendra, S.E.",
    role: "Customer Experience & Sales Consultant",
    exp: "25+ Years Business Development Experience",
    img: "/img/team/gami.webp",
  },
];

function Team() {
  return (
    <section id="team" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(0,163,255,0.05)] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            <Users className="h-3.5 w-3.5" />
            Meet The Team
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Tim di Balik <span className="text-gradient-brand">SPEAKING PRO™</span>
          </h2>
          <p className="mt-4 text-[15px] text-slate-600 sm:mt-5 sm:text-lg">
            Praktisi berpengalaman yang membangun standar baru pelatihan public speaking di Indonesia —
            perpaduan keahlian coaching, teknologi AI, edukasi, dan pengembangan bisnis.
          </p>
        </div>

        {/* Featured founder */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
          <TeamFeaturedCard member={TEAM[0]} />
          <div className="grid gap-4 grid-cols-2">
            {TEAM.slice(1, 5).map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

type Member = { name: string; role: string; exp: string; img: string };

function TeamFeaturedCard({ member }: { member: Member }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_24px_60px_-30px_rgba(13,33,71,0.35)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 sm:aspect-[4/4] lg:aspect-auto lg:h-full">
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D2147]/85 via-[#0D2147]/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--aqua-glow)] backdrop-blur">
            <Sparkles className="h-3 w-3" />
            {member.role}
          </span>
          <h3 className="mt-2.5 font-display text-xl font-extrabold leading-tight sm:mt-3 sm:text-3xl">
            {member.name}
          </h3>
          <p className="mt-1.5 text-xs text-white/80 sm:mt-2 sm:text-base">{member.exp}</p>
        </div>

      </div>
    </article>
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:border-[rgba(0,163,255,0.35)] hover:shadow-[0_18px_40px_-20px_rgba(0,163,255,0.5)]">
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img
          src={member.img}
          alt={member.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
          {member.role}
        </span>
        <h3 className="mt-1.5 font-display text-sm font-bold leading-snug text-[var(--navy)] sm:text-base">
          {member.name}
        </h3>
        <p className="mt-1.5 text-[11px] text-slate-500 sm:text-xs">{member.exp}</p>
      </div>

    </article>
  );
}


/* ───────────── PRICING / DOWNLOAD ───────────── */
function Pricing() {
  const includes = [
    "Daily Speaking Drill personal (10 menit/hari)",
    "1x Weekly Audio Submission privat",
    "Evaluasi AI Mentor + Coach Faisal Maulana",
    "Dashboard analitik perkembangan terukur",
    "Akses penuh seluruh fitur Speaking Pro™",
  ];

  const installSteps = [
    {
      icon: Smartphone,
      title: "Buka di Browser Ponsel",
      desc: "Kunjungi app.speakingpro.online lewat Chrome (Android) atau Safari (iOS).",
    },
    {
      icon: Share,
      title: "Ketuk Menu Browser",
      desc: "Pilih ikon Share di Safari, atau menu titik tiga di Chrome.",
    },
    {
      icon: PlusSquare,
      title: "Add to Home Screen",
      desc: "Aplikasi terpasang di layar utama — siap dipakai layaknya app native.",
    },
  ];

  return (
    <section
      id="download"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ background: "#0D2147" }}
    >
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.18),transparent_70%)]" />
        <div className="absolute -bottom-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(0,163,255,0.18),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Full Version — Available Now
          </span>
          <h2 className="mt-5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2.6rem]">
            Install Speaking Pro™
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">di Ponsel Anda Sekarang.</span>
          </h2>
          <p className="mt-4 text-[15px] text-white/70 sm:mt-5 sm:text-lg">
            Tanpa Play Store, tanpa App Store. Install sebagai aplikasi web di home screen — ringan, cepat, dan langsung siap latihan.
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-12">
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[var(--cyan-brand)] via-[var(--aqua-glow)] to-[var(--cyan-brand)] opacity-70 blur-md sm:rounded-[32px]" />
          <div className="relative rounded-[24px] border border-white/10 bg-[#0A192F]/95 p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-10">

            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)]">
                  Speaking Pro™ · Full Access
                </div>
                <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                  Akses Penuh Sistem Latihan
                </h3>
              </div>
              <span className="rounded-full border border-[var(--aqua-glow)]/40 bg-[var(--aqua-glow)]/10 px-3 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[var(--aqua-glow)]">
                Launch Price · 50% OFF
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-end">
              <div className="min-w-0">
                <div className="text-xs text-white/50 line-through sm:text-sm">Rp 150.000</div>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-display text-[2.5rem] font-extrabold leading-none whitespace-nowrap sm:text-6xl">
                    <span className="text-gradient-brand">Rp 75.000</span>
                  </span>
                  <span className="text-sm text-white/60 sm:text-base">/ orang</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--aqua-glow)]/40 bg-[var(--aqua-glow)]/10 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[var(--aqua-glow)]">
                  <Calendar className="h-3.5 w-3.5 shrink-0" />
                  Program 30 Hari · 1 Bulan Penuh
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-[var(--aqua-glow)]" />
                  Aktivasi instan setelah install
                </span>
              </div>
            </div>

            {/* Includes */}
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {includes.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-white/85">
                  <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--aqua-glow)]" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>

            {/* Primary Download CTA */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-8 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)] sm:mb-4 sm:text-xs">
                <Zap className="h-3.5 w-3.5" />
                Buka Aplikasi & Mulai Latihan
              </div>
              <DownloadAppButton size="lg" fullWidth label="Download Aplikasi Speaking Pro™" />
              <p className="mt-3 text-center text-[11px] text-white/50">
                app.speakingpro.online · Web App (PWA) · Tanpa install dari store
              </p>
            </div>

            {/* Install steps */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <div className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                3 Langkah Install ke Home Screen
              </div>
              <ol className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                {installSteps.map((s, i) => (
                  <li
                    key={s.title}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--aqua-glow)]">
                        Step 0{i + 1}
                      </span>
                    </div>
                    <div className="mt-3 font-display text-sm font-bold text-white">
                      {s.title}
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-white/65">
                      {s.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </div>
    </section>

  );
}

/* ───────────── FOOTER ───────────── */
import { SiteFooter } from "@/components/SiteFooter";
function Footer() {
  return <SiteFooter />;
}

