type HeaderProps = {
  email: string;
};

export default function Header({ email }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
        Portfolio
      </div>
      <a
        className="text-sm font-medium text-[var(--ink)] underline decoration-[var(--accent)]/60 underline-offset-4 transition hover:text-[var(--accent-strong)]"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </header>
  );
}
