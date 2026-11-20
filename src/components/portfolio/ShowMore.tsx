import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * "Read more" helpers. Long lists are trimmed on phones only; long text can be clamped on
 * every screen size (3 lines on phones, 4 on larger screens) with its own toggle.
 */

export function ShowMoreButton({
  open,
  onClick,
  more,
  less = "Show less",
  allSizes = false,
  className,
}: {
  open: boolean;
  onClick: () => void;
  more: string;
  less?: string;
  /** Show the toggle on tablets and computers too, not just phones. */
  allSizes?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      className={cn("btn-more", !allSizes && "md:hidden", className)}
    >
      {open ? less : more}
      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")} />
    </button>
  );
}

/** A paragraph clamped to a few lines on every screen, with a Read more toggle when it overflows. */
export function ClampText({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (open) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);
  return (
    <div>
      <p ref={ref} className={cn(className, !open && "clamp-text")}>
        {children}
      </p>
      {(overflows || open) && (
        <ShowMoreButton open={open} onClick={() => setOpen((o) => !o)} more="Read more" allSizes className="mt-3" />
      )}
    </div>
  );
}

/** Trims a list to `limit` items on phones; returns a class per item plus the toggle state. */
export function useMobileLimit(limit: number) {
  const [open, setOpen] = useState(false);
  return {
    open,
    toggle: () => setOpen((o) => !o),
    hiddenClass: (index: number) => (!open && index >= limit ? "max-md:hidden" : ""),
  };
}
