import { useEffect, useState } from "react";
import { about, highlights, terminal } from "@/data/profile";
import { Reveal, useInView } from "./Reveal";

function Terminal() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const lines = terminal.flatMap((t) => [
    { kind: "cmd" as const, text: `$ ${t.cmd}` },
    ...t.out.map((o) => ({ kind: "out" as const, text: o })),
  ]);
  const full = lines.map((l) => l.text).join("\n");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= full.length) {
          clearInterval(id);
          return c;
        }
        return c + 2;
      });
    }, 30);
    return () => clearInterval(id);
  }, [inView, full.length]);

  let remaining = count;
  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-neon/30 bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-destructive" />
        <span className="h-3 w-3 rounded-full bg-neon" />
        <span className="h-3 w-3 rounded-full bg-matrix" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">jeevan@sec: ~</span>
      </div>
      <div className="min-h-[260px] space-y-1.5 p-5 font-mono text-sm">
        {lines.map((l, i) => {
          if (remaining <= 0) return null;
          const shown = l.text.slice(0, remaining);
          remaining -= l.text.length + 1;
          const typing = remaining <= 0;
          return (
            <p
              key={i}
              className={l.kind === "cmd" ? "pt-2 font-bold text-cyber first:pt-0" : "text-foreground/85"}
            >
              {shown}
              {typing && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyber" />}
            </p>
          );
        })}
        {count >= full.length && (
          <p className="pt-2 text-cyber">
            $ <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyber" />
          </p>
        )}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <div className="grid items-start gap-14 lg:grid-cols-2">
        <Reveal>
          <Terminal />
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">// whoami</p>
          <h2 className="section-title mt-4">Hi, I'm R Jeevan — turning curiosity into security skills.</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {about.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 divide-x divide-border">
            {highlights.map((h) => (
              <div key={h.title} className="px-4 first:pl-0">
                <p className="font-display text-xl font-bold">{h.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{h.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
