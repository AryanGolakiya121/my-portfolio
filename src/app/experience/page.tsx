import type { Metadata } from 'next';
import Container from '@/components/layout/container';
import ExperienceItem from '@/components/experience/experience-item';
import { experiences } from '@/data/experience';


export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Aryan Golakiya as a Backend Developer working with Node.js, NestJS, TypeScript, MongoDB, React.js, and production SaaS platforms.",
};

const ExperiencePage = () => {
  return (
    <main className="py-20 sm:py-24 lg:py-28">
        <Container>
            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">Experience</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Professional experience</h1>

                <p className="mt-5 text-base leading-7 text-(--muted-foreground) sm:text-lg">
                    My experience spans backend development, production SaaS systems,
                    REST APIs, mobile application backends, integrations, and modern
                    web applications.
                </p>
            </div>

            <div className="mt-14 space-y-14">
                {experiences.map((experience) => (
                    <ExperienceItem
                        key={`${experience.company}-${experience.role}`}
                        experience={experience}
                    />
                ))}
            </div>
        </Container>
    </main>
  )
}

export default ExperiencePage;
