import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { journey, profile } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

export function Journey() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <SectionHeader eyebrow="the journey" title="Milestones so far." />
      <ol className="mt-14 border-l border-border">
        {journey.map((j, i) => (
          <Reveal key={j.title} delay={i * 80}>
            <li className="relative py-6 pl-10">
              <span className="absolute -left-[7px] top-8 h-3.5 w-3.5 rounded-full border-2 border-neon bg-background" />
              <p className="font-mono text-xs tracking-[0.2em] text-cyber">{j.date.toUpperCase()}</p>
              <h3 className="mt-2 text-2xl font-semibold">{j.title}</h3>
              <p className="mt-1 text-muted-foreground">{j.place}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-28 md:px-10">
      <Reveal className="card-cyber relative overflow-hidden p-8 md:p-16">
        <div className="grid-lines absolute inset-0 opacity-40" />
        <div className="relative grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">// get in touch</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1] tracking-[-0.04em] md:text-6xl">
              This is who I am — <span className="glow-text text-neon">let's talk security.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Always up for research collaborations, CTF teams and good security conversations. Let's
              find the gaps before someone else does.
            </p>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-neon mt-8">
              Connect on LinkedIn <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex items-center gap-4">
              <Linkedin className="h-5 w-5 text-neon" />
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-neon">
                linkedin.com/in/{profile.handle}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-cyber" />
              <a href={`mailto:${profile.email}`} className="break-all hover:text-neon">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Github className="h-5 w-5 text-matrix" />
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-neon">
                github.com/{profile.githubHandle}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-matrix" />
              {profile.location}
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 font-mono text-xs tracking-[0.15em] text-muted-foreground md:flex-row md:px-10">
        <span>
          <span className="text-cyber">{">_"}</span> {profile.brand}
        </span>
        <span className="flex items-center gap-2">
          © {new Date().getFullYear()} R JEEVAN · ALL SYSTEMS SECURE
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-neon" />
        </span>
      </div>
    </footer>
  );
}
