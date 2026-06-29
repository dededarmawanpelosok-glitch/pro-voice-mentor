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
} from "lucide-react";
import heroAsset from "@/assets/hero-pro.png.asset.json";
import coachAsset from "@/assets/coach-faisal.jpg.asset.json";
import logoAsset from "@/assets/speaking-pro-logo.png.asset.json";
import { RegistrationForm } from "@/components/RegistrationForm";

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
      { title: "Speaking Pro™ — Latihan Public Speaking Terstruktur dengan AI & Coach Faisal" },
      {
        name: "description",
        content:
          "Beta Program Speaking Pro™: Latihan 10 menit/hari, feedback mingguan dari AI Mentor & Coach Faisal Maulana. Terbatas 50 peserta.",
      },
      { property: "og:title", content: "Speaking Pro™ Beta Program" },
      {
        property: "og:description",
        content:
          "Karena Public Speaking tidak dipelajari — Public Speaking dilatih. Daftar slot Beta Program.",
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
      <Pricing />
      <Footer />
    </main>
  );
}

/* ───────────── NAVBAR ───────────── */
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(0,163,255,0.08)] bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#" className="group flex items-center gap-3">
          <LogoMark />
          <span className="font-display text-lg font-bold tracking-tight text-[var(--navy)] sm:text-xl">
            Speaking Pro<span className="text-[var(--cyan-brand)]">™</span>
          </span>
        </a>
        <a
          href="#pricing"
          className="btn-gradient rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide"
        >
          Daftar Beta
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
        src={logoAsset.url}
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


      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-24 lg:pb-28">
        {/* LEFT */}
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.07)] px-4 py-2 text-[11px] font-semibold tracking-wide text-[var(--navy)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--cyan-brand)]" />
            <span className="bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--aqua-glow)] bg-clip-text text-transparent">
              The First AI-Powered Public Speaking Platform
            </span>
            <span className="hidden sm:inline">in Indonesia · Coach Faisal Maulana × AI Mentor</span>
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-[var(--navy)] sm:text-5xl lg:text-[3.6rem]">
            Public Speaking
            <br />
            Tidak Dipelajari.
            <br />
            Public Speaking <span className="text-gradient-brand">Dilatih.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
            Latihan <span className="font-semibold text-[var(--navy)]">10 Menit per Hari</span>.
            Feedback <span className="font-semibold text-[var(--navy)]">Setiap Minggu</span>.
            Perubahan yang <span className="font-semibold text-[var(--navy)]">Terukur</span>.
          </p>

          <div className="glass-card mt-8 rounded-3xl p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--navy)]">
              <Lock className="h-3.5 w-3.5 text-[var(--cyan-brand)]" />
              Quick Registration — Kunci Slot Beta Anda
            </div>
            <RegistrationForm />
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
    <section id="problem" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(231,106,106,0.25)] bg-[rgba(231,106,106,0.08)] px-3.5 py-1.5 text-[11px] font-semibold tracking-wider text-[var(--soft-red)] uppercase">
            The Real Problem
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Mengapa Kemampuan Berbicara Anda
            <br className="hidden sm:block" /> Jalan di Tempat?
          </h2>
          <p className="mt-5 text-slate-600 sm:text-lg">
            Banyak orang sudah ikut training, membaca buku, dan menonton video.
            Namun saat berbicara di depan umum, masalah ini tetap muncul:
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={i}
              className="group relative rounded-3xl border border-slate-100 bg-white p-7 transition hover:-translate-y-1 hover:border-[rgba(231,106,106,0.25)] hover:shadow-[0_20px_50px_-25px_rgba(231,106,106,0.45)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(231,106,106,0.08)] text-[var(--soft-red)]">
                <XCircle className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-[var(--navy)]">{it.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{it.desc}</p>
              <div className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
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
    <section id="how" className="ambient-bg relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            How It Works
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Sistem Terstruktur dalam{" "}
            <span className="text-gradient-brand">Genggaman Anda</span>
          </h2>
          <p className="mt-5 text-slate-600 sm:text-lg">
            Tiga komponen yang dirancang bekerja sinergis — disiplin harian, evaluasi mingguan,
            dan analitik presisi.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Daily Drill — wide */}
          <article className="glass-card relative overflow-hidden rounded-[28px] p-7 lg:col-span-2 lg:row-span-1">
            <BentoLabel num="01" label="Daily Speaking Drill" />
            <div className="mt-4 grid items-center gap-6 sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-2xl font-bold leading-tight text-[var(--navy)] sm:text-3xl">
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
          <article className="relative overflow-hidden rounded-[28px] bg-[var(--navy)] p-7 text-white">
            <BentoLabel num="02" label="Weekly Audio Submission" dark />
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
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
              <div className="mt-3 flex h-12 items-end gap-[3px]">
                {Array.from({ length: 38 }).map((_, i) => {
                  const h = 20 + Math.abs(Math.sin(i * 0.6)) * 80;
                  const active = i < 22;
                  return (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className={`w-[3px] rounded-full ${
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
          <article className="glass-card relative overflow-hidden rounded-[28px] p-7 lg:col-span-3">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1.4fr]">
              <div>
                <BentoLabel num="03" label="AI Mentor + Coach Analytics" />
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-[var(--navy)] sm:text-[1.8rem]">
                  Evaluasi presisi dari kombinasi{" "}
                  <span className="text-gradient-brand">AI Mentor</span> &
                  sentuhan personal <span className="text-gradient-brand">Coach Faisal</span>.
                </h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  Lacak perkembangan Anda secara terukur — bukan sekadar perasaan.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { k: "Confidence", v: "+24%", icon: TrendingUp },
                    { k: "Clarity", v: "+18%", icon: Sparkles },
                    { k: "Structure", v: "+31%", icon: Target },
                  ].map(({ k, v, icon: Icon }) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-[rgba(0,163,255,0.15)] bg-white/80 p-3"
                    >
                      <Icon className="h-4 w-4 text-[var(--cyan-brand)]" />
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {k}
                      </div>
                      <div className="font-display text-lg font-bold text-[var(--navy)]">{v}</div>
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
    <section id="audience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
            For You
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-[2.6rem]">
            Dirancang Khusus untuk Mereka yang
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">Dituntut Tampil Meyakinkan</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {segments.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[rgba(0,163,255,0.18)] bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] shadow-[0_8px_24px_-18px_rgba(0,163,255,0.5)] transition hover:-translate-y-0.5 hover:border-[var(--cyan-brand)] hover:shadow-[0_14px_30px_-18px_rgba(0,163,255,0.7)]"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-[var(--cyan-brand)] to-[var(--aqua-glow)] text-white">
                <Icon className="h-3.5 w-3.5" />
              </span>
              {label}
            </div>
          ))}
        </div>

        {/* Authority block */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-[rgba(0,163,255,0.15)] bg-gradient-to-br from-white via-white to-[rgba(0,163,255,0.04)] p-8 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
            <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-[28px] ring-1 ring-[rgba(0,163,255,0.2)] sm:h-56 sm:w-56">
              <img
                src={coachAsset.url}
                alt="Coach Faisal Maulana"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--navy)]/85 to-transparent p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)]">
                  Lead Coach
                </div>
                <div className="font-display text-sm font-bold text-white">Faisal Maulana</div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--cyan-brand)]">
                <ShieldCheck className="h-3 w-3" />
                Benchmark Framework
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-[var(--navy)] sm:text-3xl">
                Framework Public Speaking PRO yang teruji.
              </h3>
              <p className="mt-3 text-slate-600">
                Dibangun berbasis <span className="font-semibold text-[var(--navy)]">Bloom's Taxonomy</span>,{" "}
                <span className="font-semibold text-[var(--navy)]">Kirkpatrick Training Model</span>, dan pengalaman{" "}
                <span className="font-semibold text-[var(--navy)]">18+ tahun</span> Coach Faisal mendampingi lebih dari{" "}
                <span className="font-semibold text-[var(--navy)]">100.000+ peserta</span>.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: BookOpen, t: "Bloom's Taxonomy", s: "Tingkatan kognitif latihan" },
                  { icon: Target, t: "Kirkpatrick Model", s: "Evaluasi 4 level dampak" },
                  { icon: Award, t: "18+ Tahun", s: "100.000+ peserta terdampingi" },
                ].map(({ icon: Icon, t, s }) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-slate-100 bg-white p-4"
                  >
                    <Icon className="h-5 w-5 text-[var(--cyan-brand)]" />
                    <div className="mt-2 text-sm font-bold text-[var(--navy)]">{t}</div>
                    <div className="text-xs text-slate-500">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── PRICING ───────────── */
function Pricing() {
  const filled = 6;
  const total = 50;
  const pct = (filled / total) * 100;

  const includes = [
    "Daily Speaking Drill personal (10 menit/hari)",
    "1x Weekly Audio Submission privat",
    "Evaluasi AI Mentor + Coach Faisal Maulana",
    "Dashboard analitik perkembangan terukur",
    "Akses prioritas ke fitur Beta selanjutnya",
  ];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 sm:py-28"
      style={{ background: "#0D2147" }}
    >
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,229,255,0.18),transparent_70%)]" />
        <div className="absolute -bottom-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(0,163,255,0.18),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Beta Program Launch Price
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-white sm:text-[2.6rem]">
            Investasi Terbaik untuk
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient-brand">Keterampilan Seumur Hidup.</span>
          </h2>
          <p className="mt-5 text-white/70 sm:text-lg">
            Slot beta terbatas. Prioritas berdasarkan urutan pendaftaran.
          </p>
        </div>

        {/* Card */}
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-[var(--cyan-brand)] via-[var(--aqua-glow)] to-[var(--cyan-brand)] opacity-70 blur-md" />
          <div className="relative rounded-[32px] border border-white/10 bg-[#0A192F]/95 p-8 sm:p-10 backdrop-blur-xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--aqua-glow)]">
                  Speaking Pro™ · Beta Program
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  Akses Penuh Sistem Latihan
                </h3>
              </div>
              <span className="rounded-full border border-[var(--aqua-glow)]/40 bg-[var(--aqua-glow)]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[var(--aqua-glow)]">
                Launch Price · 50% OFF
              </span>
            </div>

            <div className="mt-7 flex flex-wrap items-end gap-4">
              <div>
                <div className="text-sm text-white/50 line-through">Rp 150.000</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-extrabold sm:text-6xl">
                    <span className="text-gradient-brand">Rp 75.000</span>
                  </span>
                  <span className="text-white/60">/ orang</span>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                <Clock className="h-3.5 w-3.5 text-[var(--aqua-glow)]" />
                Program dimulai Juli 2026
              </div>
            </div>

            {/* Urgency */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--aqua-glow)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aqua-glow)]" />
                  </span>
                  Terbatas Hanya untuk 50 Peserta
                </span>
                <span className="text-[var(--aqua-glow)]">
                  {filled}/{total} slot terisi
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--aqua-glow)] shadow-[0_0_18px_rgba(0,229,255,0.6)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-white/60">
                6 slot sudah terisi · Prioritas diberikan berdasarkan urutan pendaftaran.
              </p>
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

            {/* Form */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--aqua-glow)]">
                Kunci Slot Anda Sekarang
              </div>
              <RegistrationForm variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── FOOTER ───────────── */
function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-base font-bold text-[var(--navy)]">
            Speaking Pro<span className="text-[var(--cyan-brand)]">™</span>
          </span>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Speaking Pro™ — Latihan Public Speaking Terstruktur.
        </p>
      </div>
    </footer>
  );
}
