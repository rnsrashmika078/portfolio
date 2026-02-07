type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsProps = {
  groups: SkillGroup[];
};

export default function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Skills
        </h2>
        <p className="text-sm text-[var(--muted)]">
          Full spectrum, from gameplay systems to production-ready apps.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-[var(--ink)]/10 bg-white/80 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                Stack
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
