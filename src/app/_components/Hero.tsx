type HeroProps = {
  name: string;
  tagline: string;
  email: string;
  chips: string[];
  highlights: string[];
};

export default function Hero({
  name,
  tagline,
  email,
  chips,
  highlights,
}: HeroProps) {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1"
            >
              {chip}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
          {tagline}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
            href={`mailto:${email}`}
          >
            Contact me
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-[var(--ink)]/20 px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
            href="#skills"
          >
            View skills
          </a>
        </div>
      </div>
      <div className="rounded-3xl border border-[var(--ink)]/10 bg-[var(--card)] p-6 shadow-[0_20px_60px_rgba(26,26,26,0.08)]">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Focus
          <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent-strong)]">
            2026
          </span>
        </div>
        <div className="mt-6 space-y-5 text-sm text-[var(--muted)]">
          {highlights.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
