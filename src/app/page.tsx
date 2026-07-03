import Link from "next/link";

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
            <div className="flex items-center gap-4">
              <a
                className="text-sm font-medium text-[var(--ink)] underline decoration-[var(--accent)]/60 underline-offset-4 transition hover:text-[var(--accent-strong)]"
                href="mailto:rnsrashmika078@gmail.com"
              >
                rnsrashmika078@gmail.com
              </a>
              <a
                className="text-sm font-medium text-[var(--muted)] underline underline-offset-4 transition hover:text-[var(--accent-strong)]"
                href="https://www.linkedin.com/in/rashmika-siriwardhana-b155b7258/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </header>

          <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <span className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1">
                  UE5 C++/Blueprint
                </span>
                <span className="rounded-full border border-[var(--ink)]/10 bg-white/80 px-3 py-1">
                  Full Stack Engineer
                </span>
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Rashmika Siriwardhana
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                Game developer in Unreal Engine 5 and full-stack engineer
              </p>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
                Undergraduate student at the University of South Eastern
                University, Sri Lanka. ( Bachelor, Software Engineering )
              </p>
              <div className="flex flex-wrap items-center gap-4"></div>
            </div>
            <div className="rounded-3xl border border-[var(--ink)]/10 bg-[var(--card)] p-6 shadow-[0_20px_60px_rgba(26,26,26,0.08)]">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                About My Experience in Unreal Engine
                <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-[var(--accent-strong)]">
                  Experience
                </span>
              </div>
              <div className="mt-6 space-y-5 text-sm text-[var(--muted)]">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  More than 5 year of experience in Unreal engine
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  Start with UE version 4.23
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  Experience on UE 5 newer features PCG, Motion Matching, motion
                  warp
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                  Familiar with Terrain Design , Environment Design
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
                  title: "FPS Projects",
                  items: [
                    "Unreal Engine 5",
                    "C++ gameplay systems",
                    "blueprints",
                    "Hit reactions",
                    "Ragdoll physics",
                  ],
                },
                {
                  title: "AI NPC Systems",
                  items: [
                    "Behavior Trees",
                    "Blackboard",
                    "Perception",
                    "AIController",
                  ],
                },
                {
                  title: "Ledge Grab System",
                  items: ["Motion warp"],
                },
                {
                  title: "Vehicle Destruction Systems",
                  items: [
                    "Vehicle Physics",
                    "Vehicle Deformation",
                    "Weight paint on meshes",
                  ],
                },
                {
                  title: "Animation with Metahuman Characters",
                  items: [
                    "use of in Anim montage",
                    "use of Control rig",
                    "use of blender for animation",
                  ],
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
          <section id="skills" className="w-full">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                SOME OF MY WORK
              </h2>
              <p className="text-sm text-[var(--muted)]">
                (LinkedIn posts with video demos)
              </p>
              <section className="flex w-full mt-5  flex-col gap-5 justify-between rounded-3xl border border-[var(--ink)]/10 bg-white/90 p-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="w-full flex justify-between gap-5">
                  <h1>AI NPC Hide-and-Seek System</h1>
                  <a
                    href="https://www.linkedin.com/posts/rashmika-siriwardhana-b155b7258_unrealengine5-ue5-gamedev-ugcPost-7270798475661852672-beLG/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9y7IEBMSz-VK8Wwm05LkKHCv_uUrNXxGY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on LinkedIn
                  </a>
                </div>
                <div className="w-full flex justify-between">
                  <h1>Vehicle Steering Animation with MetaHuman Characters</h1>
                  <a
                    href="https://www.linkedin.com/posts/rashmika-siriwardhana-b155b7258_unrealengine5-gamedevelopment-ue5-ugcPost-7271737992694657024-cgVK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9y7IEBMSz-VK8Wwm05LkKHCv_uUrNXxGY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on LinkedIn
                  </a>
                </div>
                <div className="w-full flex justify-between">
                  <h1>
                    Physics Material-Based Hit Reactions & Vehicle Damage System
                  </h1>
                  <a
                    href="https://www.linkedin.com/posts/rashmika-siriwardhana-b155b7258_unrealengine5-gamedevelopment-vehicledeformation-ugcPost-7314391288403935232-tNbC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9y7IEBMSz-VK8Wwm05LkKHCv_uUrNXxGY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on LinkedIn
                  </a>
                </div>
              </section>
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
