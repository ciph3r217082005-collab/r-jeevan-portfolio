import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { Arsenal, Process } from "@/components/portfolio/Arsenal";
import { Contact, Footer, Journey } from "@/components/portfolio/Contact";
import { Credentials } from "@/components/portfolio/Credentials";
import { Expertise, WhyMe } from "@/components/portfolio/Expertise";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Work } from "@/components/portfolio/Work";

const title = "R Jeevan";
const description =
  "Portfolio of R Jeevan: VAPT, network security, cryptography and responsible disclosure. ISC2 CC, AWS & Splunk certified B.Tech CSE (Cyber Security) student at Amrita.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <WhyMe />
      <Expertise />
      <Process />
      <Work />
      <Arsenal />
      <Credentials />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
