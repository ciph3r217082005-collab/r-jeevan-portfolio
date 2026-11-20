import { useEffect, useRef } from "react";

export function MatrixRain({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cssVar = (name: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    // Falling code uses only the site's green interface accents.
    const lime = cssVar("--cyber");
    const palette: Array<[string, number]> = [
      [lime, 0.6],
      [cssVar("--matrix"), 0.25],
      [cssVar("--neon"), 0.15],
    ];
    const pickColor = () => {
      const r = Math.random();
      let acc = 0;
      for (const [c, w] of palette) {
        acc += w;
        if (r <= acc) return c;
      }
      return lime;
    };
    const glyphs = "01アイウエオカキクケコ#$%&<>/\\{}[]";
    const size = 16;
    let cols: number[] = [];
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Array.from({ length: Math.ceil(canvas.offsetWidth / size) }, () =>
        Math.floor((Math.random() * canvas.offsetHeight) / size),
      );
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 70) return;
      last = t;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.globalCompositeOperation = "source-over";
      ctx.font = `${size - 4}px "JetBrains Mono", monospace`;
      cols.forEach((y, i) => {
        if (Math.random() > 0.55) return;
        const ch = glyphs[Math.floor(Math.random() * glyphs.length)] ?? "0";
        ctx.fillStyle = pickColor();
        ctx.globalAlpha = 0.25 + Math.random() * 0.35;
        ctx.fillText(ch, i * size, y * size);
        cols[i] = y * size > canvas.offsetHeight && Math.random() > 0.97 ? 0 : y + 1;
      });
      ctx.globalAlpha = 1;
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
