import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Container from "@/components/layout/container";
import { contactData } from "@/data/contact";


export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aryan Golakiya for backend development opportunities, Node.js projects, SaaS development and API engineering work.",
  alternates: {
    canonical: "/contact"
  }
};


const ContactPage = () => {
  return (
    <main className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Contact
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s build something reliable.
            </h1>

            <p className="mt-6 text-lg leading-8 text-(--muted-foreground)">
                {contactData.message}
            </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
            <a
                href={`mailto:${contactData.email}`}
                className="group rounded-2xl border border-(--border) bg-(--card) p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40"
            >
                <Mail className="size-6 text-blue-500" />

                <h2 className="mt-5 text-lg font-semibold">
                Email
                </h2>

                <p className="mt-2 text-(--muted-foreground)">
                    {contactData.email}
                </p>
            </a>

            <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-(--border) bg-(--card) p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40"
            >
                <FaLinkedinIn className="size-6 text-blue-500" />

                <h2 className="mt-5 text-lg font-semibold">
                    LinkedIn
                </h2>

                <p className="mt-2 text-(--muted-foreground)">
                    Connect with me professionally
                </p>
            </a>

            {contactData.github && (
                <a
                    href={contactData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-(--border) bg-(--card) p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40"
                >
                    <FaGithub className="size-6 text-blue-500" />

                    <h2 className="mt-5 text-lg font-semibold">
                        GitHub
                    </h2>

                    <p className="mt-2 text-(--muted-foreground)">
                        Explore my code and projects
                    </p>
                </a>
            )}

            <div className="rounded-2xl border border-(--border) bg-(--card) p-6">
                <MapPin className="size-6 text-blue-500" />

                <h2 className="mt-5 text-lg font-semibold">
                    Location
                </h2>

                <p className="mt-2 text-(--muted-foreground)">
                    {contactData.location}
                </p>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default ContactPage;
