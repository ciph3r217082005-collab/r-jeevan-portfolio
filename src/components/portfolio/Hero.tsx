import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin } from "lucide-react";
import heroAsset from "@/assets/jeevan-portrait-2x.webp.asset.json";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { MatrixRain } from "./MatrixRain";
import { Counter } from "./Reveal";

const toneClass = { neon: "text-neon", fg: "text-foreground", cyber: "text-cyber" } as const;

/** Portrait: a neon outline traced on the photo's own silhouette — no box around it. */
function Portrait({
  className,
  alt = "",
  ariaHidden = false,
}: {
  className?: string;
  alt?: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className={cn("portrait", className)}>
      <img
        src={heroAsset.url}
        alt=""
        aria-hidden
        width={1800}
        height={2248}
        className="portrait-photo portrait-halo h-full w-full object-cover object-bottom"
      />
      <img
        src={heroAsset.url}
        alt={alt}
        aria-hidden={ariaHidden || undefined}
        width={1800}
        height={2248}
        fetchPriority="high"
        className="portrait-photo relative h-full w-full object-cover object-bottom"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden bg-hero lg:h-[100dvh]">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <MatrixRain className="motion-heavy absolute inset-0 h-full w-full opacity-35" />
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute inset-x-0 top-16 select-none text-center font-display text-[22vw] font-bold leading-none tracking-tighter"
      >
        PORTFOLIO
      </div>

      <div className="relative mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-start px-5 pb-8 pt-36 md:px-10 lg:h-full lg:min-h-0 lg:justify-end lg:pb-0 lg:pt-20">
        <div className="absolute right-10 top-24 hidden text-right font-mono text-xs leading-relaxed tracking-[0.15em] lg:block">
          <p className="text-neon">ETHICAL HACKER</p>
          <p className="text-muted-foreground">SECURITY RESEARCHER</p>
        </div>

        <div className="grid items-end gap-x-8 gap-y-4 lg:grid-cols-[auto_minmax(0,1fr)_auto] xl:gap-x-12">
          <Portrait
            alt="R Jeevan wearing sunglasses and a black hoodie"
            className="anim-hero-photo hidden aspect-[900/1124] h-[calc(100dvh-6rem)] max-w-[44vw] w-auto lg:block"
          />

          <div className="anim-hero mx-auto max-w-2xl text-center lg:mx-0 lg:ml-auto lg:max-w-none lg:pb-10 lg:text-right">
            <Portrait
              ariaHidden
              className="anim-hero-photo mx-auto mb-3 aspect-[900/1124] h-[34dvh] w-auto lg:hidden"
            />
            <p className="font-script text-3xl text-cyber md:text-5xl">Hello, I'm</p>
            <h1 className="mt-1 whitespace-nowrap font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] lg:text-[clamp(3rem,5.5vw,5.5rem)]">
              {profile.firstName} <span className="glow-text text-neon">{profile.lastName}</span>
            </h1>
            <p className="mt-3 font-display text-sm md:text-lg font-bold uppercase leading-snug tracking-wide text-neon">
              {profile.role[0]}
              <br />
              {profile.role[1]}
            </p>
            <p className="mt-3 hidden max-w-md leading-relaxed text-muted-foreground mx-auto sm:block lg:mr-0">{profile.tagline}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 lg:mt-6 lg:justify-end">
              <Link to="/" hash="work" className="btn-neon">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
            <p className="mt-4 flex items-center gap-3 font-mono text-xs tracking-[0.15em] justify-center text-muted-foreground lg:mt-5 lg:justify-end">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-neon" />
              {profile.location.toUpperCase()}
            </p>
          </div>

          <div className="flex justify-center gap-6 lg:flex-col lg:pb-10 lg:gap-0 lg:divide-y lg:divide-border">
            {profile.stats.map((s) => (
              <div key={s.label.join()} className="text-center lg:py-6 lg:text-right">
                <p className={`font-display text-3xl font-bold lg:text-5xl ${toneClass[s.tone as keyof typeof toneClass]}`}>
                  <Counter value={s.value} />
                  <span className="text-neon">{s.suffix}</span>
                </p>
                <p className="mt-1 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-muted-foreground">
                  {s.label[0]?.toUpperCase()}
                  <br />
                  {s.label[1]?.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

