import type { ReactNode } from "react";
import { Footer } from "./Contact";
import { Nav } from "./Nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <div className="pt-24 lg:pt-16">{children}</div>
      <Footer />
    </main>
  );
}
