import { useEffect, useState } from "react";
import { Sparkles, Waves } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { isReducedMotionPreference } from "@/lib/motion-preference";

const KEY = "reduce-motion";

function useReducedMotionToggle() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const initial = isReducedMotionPreference(saved);
    setReduced(initial);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduced);
  }, [reduced]);
  const toggle = () =>
    setReduced((r) => {
      localStorage.setItem(KEY, r ? "0" : "1");
      return !r;
    });
  return { reduced, toggle };
}

const links = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "work", label: "Work" },
  { id: "arsenal", label: "Arsenal" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;

/** Highlights the menu item for the section currently in the middle of the screen. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => window.scrollY < window.innerHeight * 0.5 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);
  return active;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return p;
}

export function Nav() {
  const { reduced, toggle } = useReducedMotionToggle();
  const active = useActiveSection();
  const progress = useScrollProgress();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" hash="top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyber/40 bg-accent font-mono text-sm font-bold text-cyber">
            {">_"}
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-bold">{profile.brand}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-1.5 backdrop-blur lg:flex">
          {links.map((l) => (
            <Link
              key={l.id}
              to="/"
              hash={l.id}
            activeOptions={{ includeHash: true }}
              className={cn("nav-pill", active === l.id && "nav-pill-active")}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-pressed={reduced}
            aria-label={reduced ? "Turn animations back on" : "Reduce motion"}
            title={reduced ? "Animations: reduced" : "Animations: full"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-neon aria-pressed:border-neon/50 aria-pressed:text-neon"
          >
            {reduced ? <Waves className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
          </button>
          <Link to="/" hash="contact" className="btn-neon !px-5 !py-2.5 text-sm">
            Get in Touch
          </Link>
        </div>
      </div>
      <nav className="nav-tabs-mobile flex justify-between gap-0.5 overflow-x-auto border-t border-border/60 px-2 py-1.5 max-[359px]:px-1 sm:justify-center sm:gap-1 lg:hidden">
        {links.map((l) => (
          <Link
            key={l.id}
            to="/"
            hash={l.id}
            activeOptions={{ includeHash: true }}
            className={cn("nav-pill shrink-0 !px-1.5 !py-2 text-[11px] max-[359px]:!px-1 sm:!px-3 sm:text-xs", active === l.id && "nav-pill-active")}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
    </header>
  );
}
