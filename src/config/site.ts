
export const siteConfig = {
  name: "Aryan Golakiya",
  title: "Backend Developer",
  description: "Backend Developer specializing in Node.js, NestJS, TypeScript, MongoDB, Redis, and scalable API development.",

   url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  email: "aryangolakiya121@gmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/aryan-golakiya-9583b3218",
    github: "https://github.com/AryanGolakiya121",
  },

  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
} as const;
