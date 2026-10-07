import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";

type ProjectCardProps = {
    project: Project
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
        <div className="flex items-start justify-between gap-4">
            <div>
                <p className="text-sm text-(--muted-foreground)">{project.year}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.title}</h3>
            </div>
             <ArrowUpRight className="size-5 text-(--muted-foreground) transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500" />
        </div>

        <p className="mt-4 leading-7 text-(--muted-foreground)">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
            <span
                key={technology}
                className="rounded-full border der-(--border)bg-(--background)/50 px-3 py-1 text-xs font-medium text-(--muted-foreground)"
            >
                {technology}
            </span>
            ))}
        </div>
        <div className="mt-auto pt-8">
            <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
            >
                {project.type ? "project" : "View case study"}
                <ArrowUpRight className="size-4" />
            </Link>
        </div>
    </article>
  )
}

export default ProjectCard
