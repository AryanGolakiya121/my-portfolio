import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "@/components/layout/container";
import { FadeIn } from "@/components/animation/fade-in";
import { siteConfig } from "@/config/site";

const technologies = [
  "Node.js",
  "NestJS",
  "TypeScript",
  "MongoDB",
  "MySQL",
  "Redis",
  "BullMQ",
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-(--border)">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[48px_48px] mask-[linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <Container className="relative">
        <div className="flex min-h-[calc(100vh-72px)] items-center py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card)/80 px-4 py-2 text-sm backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>

                <span className="ext-(--muted-foreground)">
                  Available for backend opportunities
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Backend Developer
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
                Building scalable
                <span className="block ext-(--muted-foreground)">
                  backend systems.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-7 max-w-2xl text-base leading-8 ext-(--muted-foreground) sm:text-lg">
                I&apos;m Aryan Golakiya, a Backend Developer with 4+ years of
                experience building APIs, SaaS platforms, mobile application
                backends, third-party integrations, and reliable server-side
                systems using Node.js, NestJS, TypeScript, MongoDB, MySQL,
                Redis, and BullMQ.
              </p>
            </FadeIn>

            <FadeIn delay={0.27}>
              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--border) bg-(--card) px-3 py-1.5 text-sm ext-(--muted-foreground)"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.34}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  View Projects
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href="/resume/AryanNodeJS.pdf"
                  download="AryanNodeJS.pdf"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--border) bg-(--card) px-5 text-sm font-semibold transition-colors hover:bg-neutral-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Download Resume
                  <Download className="size-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-10 flex items-center gap-5">
                {siteConfig.links.github && (
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="ext-(--muted-foreground) transition-colors hover:text-(--foreground)"
                  >
                    <FaGithub className="size-6 text-blue-500" />

                  </a>
                )}

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="ext-(--muted-foreground) transition-colors hover:text-(--foreground)"
                >
                  <FaLinkedinIn className="size-6 text-blue-500" />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Send email"
                  className="ext-(--muted-foreground) transition-colors hover:text-(--foreground)"
                >
                  <Mail className="size-6 text-blue-500" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;