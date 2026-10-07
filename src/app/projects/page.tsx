import type { Metadata } from "next";
import Container from "@/components/layout/container";
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore backend and full-stack projects by Aryan Golakiya, including Node.js, NestJS, TypeScript, MongoDB, Redis, BullMQ, and production SaaS systems.",
    alternates: {
        canonical: "/projects"
    }
}

const ProjectPage = () => {
  return (
    <main>
        <Container>
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                    Projects
                </p>

                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                    Selected work and backend systems
                </h1>

                <p className="mt-5 text-base leading-7 text-(--muted-foreground) sm:text-lg">
                    A collection of production systems, APIs, integrations, and
                    application backends I&apos;ve worked on across SaaS, mobile, and
                    e-commerce projects.
                </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                    key={project.slug}
                    project={project}
                    />
                ))}
            </div>
        </Container>
    </main>
  )
}

export default ProjectPage;