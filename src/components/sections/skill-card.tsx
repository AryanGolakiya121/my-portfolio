import type { SkillGroup } from "@/data/skills";

type SkillCardProps = SkillGroup;

import React from 'react'

const SkillCard = ({ title, description, skills }: SkillCardProps) => {
  return (
    <article className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">
      <h3 className="text-lg font-semibold tracking-tight">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[var(--border)] bg-[var(--background)]/50 px-3 py-1.5 text-sm text-[var(--muted-foreground)] transition-colors group-hover:border-blue-500/20"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default SkillCard
