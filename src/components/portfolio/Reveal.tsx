import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "left" | "right" | "fade";
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0);
  return (
    <div
      ref={ref}
      className={cn("reveal", variant && `reveal-${variant}`, inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Counter({ value, duration = 1600 }: { value: number; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  return <span ref={ref}>{n}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end", className)}>
      <div>
        <p className="eyebrow">// {eyebrow}</p>
        <h2 className="section-title mt-4">{title}</h2>
      </div>
      {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
