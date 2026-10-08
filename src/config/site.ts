
export const siteConfig = {
  name: "Aryan Golakiya",
  title: "MERN Stack Developer",
  description: "MERN Stack Developer with a backend focus, specializing in Node.js, Express.js, NestJS, React.js, Next.js, MongoDB, JavaScript, TypeScript, REST APIs and scalable web applications.",

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
