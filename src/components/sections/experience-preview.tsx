import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "../layout/container";
import { FadeIn } from "../animation/fade-in";
import { experiences } from "@/data/experience";

const ExperiencePreview = () => {
  const recentExperiences = experiences.slice(0, 3);
  return (
    <section className="border-b border-(--border) py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Experience
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Where I&apos;ve worked
              </h2>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-4 leading-7 text-(--muted-foreground)">
                Professional experience across SaaS platforms, APIs, mobile
                backends, and modern web applications.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.16}>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
            >
              View full experience
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-10 divide-y divide-(--border) border-y order-(--border)">
          {recentExperiences.map((experience, index) => (
            <FadeIn
              key={`${experience.company}-${experience.role}`}
              delay={0.08 + index * 0.05}
            >
              <div className="grid gap-3 py-7 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <h3 className="font-semibold">{experience.role}</h3>
                  <p className="mt-1 text-sm text-(--muted-foreground)">{experience.company}</p>
                </div>

                <p className="text-sm text-(--muted-foreground)">{experience.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ExperiencePreview
