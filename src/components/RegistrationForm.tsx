import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface Props {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function RegistrationForm({ variant = "light", compact = false }: Props) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [wa, setWa] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const isDark = variant === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!nama.trim() || !email.trim() || !wa.trim()) return;
    setSubmitting(true);
    const text = `Halo Admin, saya ingin Daftar Pre-Order Speaking Pro.\nNama: ${nama}\nEmail: ${email}\nWA: ${wa}`;
    const url = `https://wa.me/6285930006425?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitting(false), 1200);
  }

  const inputCls = isDark
    ? "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[var(--aqua-glow)] focus:bg-white/10"
    : "w-full rounded-2xl border border-[rgba(0,163,255,0.18)] bg-white px-4 py-3.5 text-sm text-[var(--navy)] placeholder:text-slate-400 outline-none transition focus:border-[var(--cyan-brand)] focus:shadow-[0_0_0_4px_rgba(0,163,255,0.12)]";

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-3.5"}>
      <input
        type="text"
        required
        maxLength={80}
        placeholder="Nama Lengkap"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className={inputCls}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="email"
          required
          maxLength={120}
          placeholder="Email Aktif"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
        <input
          type="tel"
          required
          maxLength={20}
          placeholder="Nomor WhatsApp Aktif"
          value={wa}
          onChange={(e) => setWa(e.target.value)}
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-gradient group inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold tracking-wide disabled:opacity-70"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Daftar Pre-Order & Hubungi Admin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className={`text-[11px] ${isDark ? "text-white/55" : "text-slate-500"}`}>
        Data Anda aman. Anda akan diarahkan ke WhatsApp Admin untuk konfirmasi slot.
      </p>
    </form>
  );
}
