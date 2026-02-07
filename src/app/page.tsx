export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--accent)]/20 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-[var(--accent-2)]/20 blur-[100px]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-14 sm:px-10 lg:px-12">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Portfolio
            </div>
            <a
              className="text-sm font-medium text-[var(--ink)] underline decoration-[var(--accent)]/60 underline-offset-4 transition hover:text-[var(--accent-strong)]"
              href="mailto:rnsrashmika078@gmail.com"
            >
              rnsrashmika078@gmail.com
            </a>
          </header>

          <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <span className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1">
                  UE5 C++
                </span>
                <span className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1">
                  Next.js + React
                </span>
                <span className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1">
                  Full Stack
                </span>
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Rashmika Siriwardhana
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                Game developer in Unreal Engine 5 and full-stack engineer
                building ambitious experiences across web, desktop, and mobile.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
                  href="mailto:rnsrashmika078@gmail.com"
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
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Building immersive game systems with UE5 and C++.
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  Crafting clean, fast web apps in Next.js and React.
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--ink)]" />
                  Shipping backend APIs across Laravel, Express, FastAPI, and
                  ASP.NET.
                </div>
              </div>
            </div>
          </section>

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
              {[
                {
                  title: "Game Development",
                  items: ["Unreal Engine 5", "C++ gameplay systems", "Tools"],
                },
                {
                  title: "Web Development",
                  items: ["Next.js", "React", "TypeScript"],
                },
                {
                  title: "Backend",
                  items: ["Laravel", "Express.js", "FastAPI", "ASP.NET"],
                },
                {
                  title: "Desktop + Mobile",
                  items: ["Electron.js", "Flutter", "App release"],
                },
              ].map((group) => (
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
                href="mailto:rnsrashmika078@gmail.com"
              >
                Book a chat
              </a>
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--ink)]/10 pt-8 text-sm text-[var(--muted)]">
            <span>Based in Sri Lanka. Working worldwide.</span>
            <span className="font-medium text-[var(--ink)]">
              rashmika siriwardhana
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
