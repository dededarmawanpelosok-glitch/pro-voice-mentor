import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PAGES, type PageContent, type PageSection } from "@/lib/site-content";
import { SiteFooter } from "@/components/SiteFooter";
import logoAsset from "@/assets/speaking-pro-logo.png.asset.json";

const logo = logoAsset as unknown as { url: string };

export const Route = createFileRoute("/p/$slug")({
  loader: ({ params }) => {
    const page = PAGES[params.slug];
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Halaman tidak ditemukan — Speaking Pro™" }, { name: "robots", content: "noindex" }] };
    }
    const { page } = loaderData;
    const title = `${page.title} — Speaking Pro™`;
    return {
      meta: [
        { title },
        { name: "description", content: page.description },
        { property: "og:title", content: title },
        { property: "og:description", content: page.description },
      ],
    };
  },
  component: DetailPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-[var(--navy)]">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-slate-600">Halaman yang Anda cari tidak tersedia.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-5 py-2.5 text-sm font-semibold text-white">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
        </Link>
      </div>
    </div>
  ),
});

function DetailPage() {
  const { page } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[var(--bg)] font-sans">
      {/* Slim nav — consistent with landing */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <img src={logo.url} alt="Speaking Pro" className="h-8 w-8 rounded-xl" />
            <span className="font-display text-base font-extrabold tracking-tight text-[var(--navy)]">
              Speaking Pro<span className="text-[var(--cyan-brand)]">™</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--navy)] transition hover:border-[var(--cyan-brand)]/40 hover:text-[var(--cyan-brand)] sm:text-sm"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Beranda
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 400px at 50% -10%, rgba(0,163,255,0.14), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--cyan-brand)]/25 bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--cyan-brand)] shadow-sm backdrop-blur">
            {page.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-[var(--navy)] sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-lg">
            {page.description}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-4xl px-5 pb-14 sm:px-8 sm:pb-20">
        <div className="space-y-5">
          {page.sections.map((s, i) => (
            <article
              key={i}
              className="group rounded-[22px] border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(13,33,71,0.04)] transition hover:shadow-[0_20px_40px_-24px_rgba(13,33,71,0.25)] sm:p-8"
            >
              <h2 className="font-display text-lg font-extrabold text-[var(--navy)] sm:text-xl">
                {s.heading}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {s.body}
              </p>
              {s.bullets && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[14px] text-slate-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--cyan-brand)]/10 text-[var(--cyan-brand)]">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {page.cta && (
          <div className="mt-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-[var(--navy)] via-[#0b1c3d] to-[var(--navy)] p-6 text-white shadow-[0_30px_60px_-30px_rgba(13,33,71,0.6)] sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--neon-aqua)]">
              Mulai Sekarang
            </p>
            <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              Latih public speaking Anda hari ini.
            </h3>
            <p className="mt-2 max-w-xl text-[14px] text-white/70 sm:text-[15px]">
              Bergabung dengan komunitas Speaking Pro™ dan rasakan perubahan nyata dalam 30 hari.
            </p>
            <a
              href={page.cta.href}
              target={page.cta.external ? "_blank" : undefined}
              rel={page.cta.external ? "noreferrer" : undefined}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--cyan-brand)] to-[var(--neon-aqua)] px-6 py-3 text-sm font-bold text-[var(--navy)] shadow-[0_10px_30px_-8px_rgba(0,229,255,0.55)] transition hover:-translate-y-0.5"
            >
              {page.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
