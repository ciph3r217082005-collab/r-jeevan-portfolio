import { Activity, Cloud, Flag, KeyRound, Search, Shield } from "lucide-react";
import { counters, expertise, reasons } from "@/data/profile";
import { Counter, Reveal, SectionHeader } from "./Reveal";

const icons = { activity: Activity, key: KeyRound, search: Search, flag: Flag, cloud: Cloud, shield: Shield };
const tones = ["text-neon", "text-cyber", "text-matrix"];

export function Expertise() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <SectionHeader
        eyebrow="what I do"
        title={<>Offense, defense &amp; everything in between.</>}
        intro="Six areas I train in every week — from penetration testing web apps to securing cloud workloads."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map((e, i) => {
          const Icon = icons[e.icon];
          return (
            <Reveal key={e.title} delay={(i % 3) * 100}>
              <article className="card-cyber h-full p-7">
                <Icon className={`h-7 w-7 ${tones[i % 3]}`} strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function WhyMe() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">// why choose me</p>
          <h2 className="section-title mt-4">Curious enough to dig. Disciplined enough to finish.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Not chasing titles — just building real skills, one system at a time. Here's what I bring.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.title} className="border-border bg-surface p-7 sm:odd:border-r [&:nth-child(-n+2)]:border-b">
                <span
                  className={`inline-grid h-11 w-11 place-items-center rounded-lg border border-border bg-accent font-mono text-sm ${tones[i % 3]}`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-20 grid grid-cols-2 gap-8 border-y border-border py-12 md:grid-cols-4">
        {counters.map((c) => (
          <div key={c.label}>
            <p className="font-display text-5xl font-bold">
              <Counter value={c.value} />
              <span className="text-neon">{c.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
