type AvailabilityProps = {
  email: string;
};

export default function Availability({ email }: AvailabilityProps) {
  return (
    <section className="grid gap-6 rounded-3xl border border-[var(--ink)]/10 bg-white/90 p-8 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Building with intent
        </h2>
        <p className="text-base leading-relaxed text-[var(--muted)]">
          I care about responsiveness, clarity, and polished details. From
          expressive game mechanics to elegant user interfaces, I enjoy
          projects that feel alive.
        </p>
      </div>
      <div className="rounded-2xl border border-[var(--ink)]/10 bg-[var(--card)] p-6 text-sm text-[var(--muted)]">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          Availability
        </div>
        <p className="mt-4 text-base text-[var(--ink)]">
          Open to freelance and collaborative work.
        </p>
        <a
          className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--accent-strong)] underline decoration-[var(--accent)]/60 underline-offset-4"
          href={`mailto:${email}`}
        >
          Book a chat
        </a>
      </div>
    </section>
  );
}
