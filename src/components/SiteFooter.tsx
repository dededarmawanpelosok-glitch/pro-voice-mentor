import { Link } from "@tanstack/react-router";
import { FOOTER_COLUMNS } from "@/lib/site-content";
import logoAsset from "@/assets/speaking-pro-logo.png.asset.json";

const logo = logoAsset as unknown as { url: string };

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-gradient-to-b from-white via-slate-50 to-white">
      {/* subtle glow accent, consistent with landing tokens */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,163,255,0.35), rgba(0,229,255,0.35), transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,163,255,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* Brand row */}
        <div className="grid gap-10 border-b border-slate-200/70 pb-10 lg:grid-cols-[1.2fr_2fr] lg:gap-14 lg:pb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img
                src={logo.url}
                alt="Speaking Pro"
                className="h-9 w-9 rounded-xl shadow-[0_6px_16px_-6px_rgba(0,163,255,0.5)]"
              />
              <span className="font-display text-lg font-extrabold tracking-tight text-[var(--navy)]">
                Speaking Pro<span className="text-[var(--cyan-brand)]">™</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
              The First AI-Powered Public Speaking Platform in Indonesia. Latih
              kepercayaan diri, struktur, dan delivery Anda — kapan pun, di mana pun.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href="https://app.speakingpro.online"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(13,33,71,0.6)] transition hover:-translate-y-0.5"
              >
                Install App
              </a>
              <a
                href="https://wa.me/6285930006425"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--cyan-brand)]/40 hover:text-[var(--cyan-brand)]"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.to ? (
                        <Link
                          to={l.to}
                          className="text-[14px] text-slate-700 transition hover:text-[var(--cyan-brand)]"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target={l.external ? "_blank" : undefined}
                          rel={l.external ? "noreferrer" : undefined}
                          className="text-[14px] text-slate-700 transition hover:text-[var(--cyan-brand)]"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Speaking Pro™ — The First AI-Powered Public
            Speaking Platform in Indonesia.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/p/privasi" className="hover:text-[var(--cyan-brand)]">
              Privasi
            </Link>
            <Link to="/p/syarat" className="hover:text-[var(--cyan-brand)]">
              Syarat
            </Link>
            <Link to="/p/cookie" className="hover:text-[var(--cyan-brand)]">
              Cookie
            </Link>
            <Link to="/p/refund" className="hover:text-[var(--cyan-brand)]">
              Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
