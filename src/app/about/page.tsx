import Container from "@/components/layout/container";
import { aboutData } from "@/data/about";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Aryan Golakiya, a Backend Developer specializing in Node.js, NestJS, TypeScript, MongoDB, Redis, and scalable backend systems.",
  alternates: {
    canonical: "/about"
  }
};

const AboutPage = () => {
  return (
    <main className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                About
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Backend Developer focused on scalable and maintainable systems
            </h1>

            <p className="mt-6 text-lg leading-8 text-(--muted-foreground)">
            {aboutData.intro}
            </p>
        </div>

         <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
              What I Work On
            </p>

            <p className="mt-4 leading-7 text-(--muted-foreground)">
              {aboutData.description}
            </p>
          </section>

          <section className="rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
              Development Approach
            </p>

            <p className="mt-4 leading-7 text-(--muted-foreground)">
              {aboutData.approach}
            </p>
          </section>
        </div>
        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
            Education
          </p>

          <div className="mt-6 rounded-2xl border border-(--border) bg-(--card) p-6 sm:p-8">
            <h2 className="text-xl font-semibold">
              {aboutData.education.degree}
            </h2>

            <p className="mt-2 text-(--muted-foreground)">
              {aboutData.education.university}
            </p>

            <div className="mt-4 flex flex-col gap-1 text-sm text-(--muted-foreground) sm:flex-row sm:gap-4">
              <span>{aboutData.education.period}</span>
              <span className="hidden sm:inline">•</span>
              <span>{aboutData.education.location}</span>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default AboutPage
