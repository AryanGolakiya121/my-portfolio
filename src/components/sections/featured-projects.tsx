import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../layout/container";
import { FadeIn } from "../animation/fade-in";
import ProjectCard from "../projects/project-card";
import { projects } from "@/data/projects";


const FeaturedProjects = () => {

    const featuredProjects = projects.filter((project) => project.featured);

    return (
        <section className="border-b border-(--border) py-20 sm:py-24 lg:py-28">
            <Container>
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <FadeIn>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Featured Work</p>
                        </FadeIn>

                        <FadeIn delay={0.06}>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                                Selected projects
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.12}>
                            <p className="mt-4 text-base leading-7 text-(--muted-foreground)">
                                A selection of backend systems and production applications
                                I&apos;ve worked on, focused on APIs, integrations,
                                scalability, and application architecture.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.16}>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                        >
                            View all projects
                            <ArrowRight className="size-4" />
                        </Link>
                    </FadeIn>
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                    {featuredProjects.map((project, index) => (
                        <FadeIn key={project.slug} delay={0.08 + index * 0.06} className="h-full">
                            <ProjectCard project={project}/>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default FeaturedProjects;
