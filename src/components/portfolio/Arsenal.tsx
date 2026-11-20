import { useState } from "react";
import { arsenal, process } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeader } from "./Reveal";
import { ShowMoreButton, useMobileLimit } from "./ShowMore";

export function Arsenal() {
  const list = useMobileLimit(3);
  return (
    <section id="arsenal" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
      <SectionHeader
        eyebrow="the arsenal"
        title="Tools of the trade."
        intro="What I reach for in labs, CTFs and research — and the languages I use to script my own when nothing fits."
      />
      <Reveal className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface md:mt-14">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 font-mono text-xs md:px-6">
          <span className="text-cyber">$ ls ~/arsenal</span>
          <span className="hidden text-muted-foreground sm:inline">learning since 2023 · always online</span>
        </div>
        <div className="divide-y divide-border">
          {arsenal.map((g, i) => (
            <div key={g.group} className={cn("grid gap-3 px-5 py-5 md:grid-cols-[220px_1fr] md:items-center md:gap-4 md:px-6 md:py-6", list.hiddenClass(i))}>
              <p className="font-mono text-xs font-bold tracking-[0.2em] text-cyber">{g.group.toUpperCase()}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="chip transition-colors hover:border-neon hover:text-neon">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
      <ShowMoreButton
        open={list.open}
        onClick={list.toggle}
        more={`Show full arsenal (${arsenal.length} groups)`}
        className="btn-more-block mt-4"
      />
    </section>
  );
}

const stepTones = ["text-neon", "text-cyber", "text-matrix", "text-cyber", "text-neon"];

export function Process() {
  const [active, setActive] = useState(1);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">// how I work</p>
          <h2 className="section-title mt-4">Recon. Assess. Exploit. Harden.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            The same methodical loop I use on every pentest, challenge and lab.
          </p>
        </Reveal>
        <div className="space-y-3 md:space-y-4">
          {process.map((p, i) => (
            <Reveal key={p.tag} delay={i * 60}>
              <div
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "rounded-2xl border bg-surface p-5 transition-colors md:p-7",
                  active === i ? "border-neon/60" : "border-border",
                )}
              >
                <p className={cn("flex items-center gap-3 font-mono text-xs", stepTones[i])}>
                  0{i + 1} · {p.tag}
                  <span className={cn("h-2 w-2 rounded-full", active === i ? "bg-neon" : "bg-muted")} />
                </p>
                <h3 className="mt-2 text-xl font-medium md:mt-3 md:text-2xl">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
