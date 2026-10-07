export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    description:
      "Backend technologies I use to build APIs, services, and scalable application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "BullMQ",
    ],
  },
  {
    title: "Databases & Caching",
    description:
      "Databases and caching technologies used for application data and performance.",
    skills: [
      "MongoDB",
      "MySQL",
      "Redis",
    ],
  },
  {
    title: "Frontend",
    description:
      "Frontend technologies used for API integration and modern web interfaces.",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Languages",
    description:
      "Core programming languages used across backend and frontend development.",
    skills: [
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Tools used for source control, API testing, development, and productivity.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Cursor",
      "ChatGPT",
    ],
  },
];