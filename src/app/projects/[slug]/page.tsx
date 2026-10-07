import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    // Github
} from "lucide-react";

import Container from "@/components/layout/container";
import { getProjectBySlug } from "@/lib/projects";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => {
    return projects.map((project) => ({ slug: project.slug }))
}
export const generateMetadata = async({ params }: ProjectPageProps): Promise<Metadata> => {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
      return {
        title: "Project Not Found | Aryan Golakiya",
      }
    }
    return {
      title:  `${project.title} | Aryan Golakiya`,
      description: project.summary,
      alternates: {
        canonical: `/projects/${project.slug}`,
      },
      openGraph: {
        type: "article",
        title: project.title,
        description: project.summary,
        url: `/projects/${project.slug}`,
      },

      twitter: {
        card: "summary_large_image",
        title: project.title,
        description: project.summary,
      },
    }
}

const ProjectPage = async({ params }: ProjectPageProps) => {
    
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-20 sm:py-24 lg:py-28">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-(--muted-foreground) transition-colors hover:text-blue-500"
        >
          <ArrowLeft className="size-4" />
          Back to projects
        </Link>

        <article className="mt-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-(--border) px-3 py-1 text-sm text-(--muted-foreground)">
                {project.year}
              </span>

              {project.featured && (
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-500">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-(--muted-foreground)">
              {project.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-(--border) bg-(--card) px-3 py-1.5 text-sm text-(--muted-foreground)"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(project.github || project.liveUrl) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-(--border) bg-(--card) px-5 text-sm font-semibold transition-colors hover:bg-neutral-500/10"
                  >
                    {/* <Github className="size-4" /> */}
                    GitHub
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                  >
                    Live Project
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-(--border) bg-(--card) p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">
                Overview</p>
              <p className="mt-4 leading-7 text-(--muted-foreground)">{project.summary}</p>
            </section>

            {project.role && (
              <section className="rounded-2xl border border-(--border) bg-(--card) p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">Role</p>
                <p className="mt-4 leading-7 text-(--muted-foreground)">{project.role}</p>
              </section>
            )}

            {project.focus && (
              <section className="rounded-2xl border border-(--border) bg-(--card) p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">Focus</p>
                <p className="mt-4 leading-7 text-(--muted-foreground)">{project.focus}</p>
              </section>
            )}

          </div>

          {project.responsibilities && project.responsibilities.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight">Responsibilities</h2>

              <ul className="mt-6 space-y-3">
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex gap-3 text-(--muted-foreground)">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span className="leading-7">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </Container>
    </main>
  )
}

export default ProjectPage;