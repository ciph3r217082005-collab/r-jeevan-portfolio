import { Activity, Cloud, Flag, KeyRound, Search, Shield } from "lucide-react";
import { counters, expertise, reasons } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Counter, Reveal, SectionHeader } from "./Reveal";
import { ShowMoreButton, useMobileLimit } from "./ShowMore";

const icons = { activity: Activity, key: KeyRound, search: Search, flag: Flag, cloud: Cloud, shield: Shield };
const tones = ["text-neon", "text-cyber", "text-matrix"];

export function Expertise() {
  const list = useMobileLimit(3);
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <SectionHeader
        eyebrow="what I do"
        title={<>Offense, defense &amp; everything in between.</>}
        intro="Six areas I train in every week — from penetration testing web apps to securing cloud workloads."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
        {expertise.map((e, i) => {
          const Icon = icons[e.icon];
          return (
            <Reveal key={e.title} delay={(i % 3) * 100} className={list.hiddenClass(i)}>
              <article className="card-cyber h-full p-6 md:p-7">
                <Icon className={`h-7 w-7 ${tones[i % 3]}`} strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-semibold md:mt-6">{e.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
      <ShowMoreButton
        open={list.open}
        onClick={list.toggle}
        more={`Show all ${expertise.length} areas`}
        className="btn-more-block mt-4"
      />
    </section>
  );
}

export function WhyMe() {
  const list = useMobileLimit(2);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">// why choose me</p>
          <h2 className="section-title mt-4">Curious enough to dig. Disciplined enough to finish.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Not chasing titles — just building real skills, one system at a time. Here's what I bring.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <div className="grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.title} className={cn("border-border bg-surface p-6 max-sm:[&:not(:last-child)]:border-b sm:p-7 sm:odd:border-r sm:[&:nth-child(-n+2)]:border-b", list.hiddenClass(i))}>
                <span
                  className={`inline-grid h-11 w-11 place-items-center rounded-lg border border-border bg-accent font-mono text-sm ${tones[i % 3]}`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold md:mt-5">{r.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{r.body}</p>
              </div>
            ))}
          </div>
          <ShowMoreButton
            open={list.open}
            onClick={list.toggle}
            more={`Show all ${reasons.length} reasons`}
            className="btn-more-block mt-4"
          />
        </Reveal>
      </div>
      <Reveal className="mt-12 grid grid-cols-2 gap-6 border-y border-border py-8 md:mt-20 md:grid-cols-4 md:gap-8 md:py-12">
        {counters.map((c) => (
          <div key={c.label}>
            <p className="font-display text-4xl font-bold md:text-5xl">
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
