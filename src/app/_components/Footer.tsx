type FooterProps = {
  name: string;
};

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--ink)]/10 pt-8 text-sm text-[var(--muted)]">
      <span>Based in Sri Lanka. Working worldwide.</span>
      <span className="font-medium text-[var(--ink)]">{name}</span>
    </footer>
  );
}
