import { FadeIn } from "@/components/animation/fade-in";
import { skillGroups } from "@/data/skills";
import Container from "@/components/layout/container";
import SkillCard from "@/components/sections/skill-card";

export function Skills() {
  return (
    <section className="border-b border-[var(--border)] py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Tech Stack
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Technologies I work with
            </h2>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">
              My development stack is focused on scalable backend systems,
              API development, databases, caching, modern web applications,
              and reliable production workflows.
            </p>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <FadeIn
              key={group.title}
              delay={0.08 + index * 0.05}
              className="h-full"
            >
              <SkillCard
                title={group.title}
                description={group.description}
                skills={group.skills}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}