import type { Experience } from "@/types/experience";

type ExperienceItemProps = {
    experience: Experience;
}

import React from 'react'

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <article className="relative border-l border-(--border) pl-8">
        <span className="absolute -left-1.25 top-2 size-2.5 rounded-full bg-blue-500" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h3 className="text-xl font-semibold tracking-tight">{experience.role}</h3>
                <p className="mt-1 text-base font-medium text-blue-500">{experience.company}</p>
            </div>
            <p className="text-sm text-(--muted-foreground)">{experience.period}</p>
        </div>

        <p className="mt-5 max-w-3xl leading-7 text-(--muted-foreground)">{experience.summary}</p>

        {experience.technologies?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-(--border) bg-(--card) px-3 py-1 text-xs font-medium text-(--muted-foreground)">{technology}</span>
                ))}
            </div>
        ) : null}

        <ul className="mt-6 space-y-3">
            {experience.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-3 text-(--muted-foreground)">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" />

                    <span className="leading-7">{responsibility}</span>
                </li>
            ))}
        </ul>
    </article>
  )
}

export default ExperienceItem;
