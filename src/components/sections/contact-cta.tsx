import { ArrowRight, Mail } from "lucide-react";
import Link from 'next/link';
import Container from "../layout/container";
import React from 'react'
import { FadeIn } from "../animation/fade-in";
import { contactData } from "@/data/contact";

const ContactCTA = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
        <Container>
            <FadeIn>
                <div className="relative overflow-hidden rounded-3xl border border-(--border) bg-(--card) p-8 sm:p-10 lg:p-14">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-blue-500/10 blur-3xl"
                    />

                    <div className="relative max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                            Let&apos;s Work Together
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            Have a backend opportunity or project in mind?
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-(--muted-foreground) sm:text-lg">
                            {contactData.message}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                            >
                                Contact Me
                                <ArrowRight className="size-4" />
                            </Link>

                            <a
                                href={`mailto:${contactData.email}`}
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-(--border) px-5 text-sm font-semibold transition-colors hover:bg-neutral-500/10"
                            >
                                <Mail className="size-4" />
                                {contactData.email}
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    </section>
  )
}

export default ContactCTA;
