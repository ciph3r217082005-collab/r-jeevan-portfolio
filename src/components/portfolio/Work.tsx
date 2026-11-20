import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="selected work"
        title="Research, disclosures & builds."
        intro="Hands-on projects where I break things, fix them and write up what I learned."
      />
      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        {work.map((w, i) => (
          <Reveal key={w.title} delay={(i % 2) * 120}>
            <article className="card-cyber relative flex h-full flex-col overflow-hidden p-8 md:p-10">
              <span
                aria-hidden
                className="text-outline pointer-events-none absolute -right-2 -top-8 select-none font-display text-[8rem] font-bold leading-none"
              >
                0{i + 1}
              </span>
              <p className="relative flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground">
                <span className="tag-neon">{w.tag}</span>
                <span className="tag-neon">{w.badge.value.toUpperCase()}</span>·{" "}
                {[w.org, w.year].filter(Boolean).join(" · ")}
              </p>
              <h3 className="relative mt-5 text-3xl font-semibold leading-tight md:text-4xl">{w.title}</h3>
              <p className="relative mt-4 leading-relaxed text-muted-foreground">{w.body}</p>
              <div className="relative mt-6 grid max-w-md grid-cols-3 divide-x divide-border overflow-hidden rounded-xl border border-border">
                {w.metrics.map((m) => (
                  <div key={m.l} className="p-4">
                    <p className="font-display text-xl font-bold">{m.v}</p>
                    <p className="text-xs text-muted-foreground">{m.l}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                <span className="mr-2 font-mono text-[10px] tracking-[0.2em] text-muted-foreground">STACK</span>
                {w.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
              {"href" in w && (
                <a href={w.href} target="_blank" rel="noreferrer" className="btn-ghost relative mt-6 w-fit !px-5 !py-2.5 text-sm">
                  View on GitHub <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
