import { ArrowUpRight } from "lucide-react";
import { credentials, profile } from "@/data/profile";
import { Reveal, SectionHeader } from "./Reveal";

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
      <SectionHeader
        eyebrow="credentials"
        title="Verified badges."
        intro="Every badge links to its Credly page."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.map((c, i) => (
          <Reveal key={c.id} delay={i * 60}>
            <a
              href={`https://www.credly.com/badges/${c.id}`}
              target="_blank"
              rel="noreferrer"
              className="card-cyber flex h-full items-center gap-5 p-5"
            >
              <img src={c.img} alt={c.name} loading="lazy" width={72} height={72} className="h-[72px] w-[72px] shrink-0 object-contain" />
              <div className="min-w-0">
                <p className="font-mono text-[10px] tracking-[0.2em] text-cyber">
                  {c.issuer.toUpperCase()} · {c.date.toUpperCase()}
                </p>
                <p className="mt-1 font-display text-base font-semibold leading-snug">{c.name}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        {profile.credly.map((u, i) => (
          <a key={u} href={u} target="_blank" rel="noreferrer" className="btn-ghost !px-5 !py-2.5 text-sm">
            Credly profile {i + 1} <ArrowUpRight className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
