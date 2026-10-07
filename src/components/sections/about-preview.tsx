import { ArrowRight } from "lucide-react";
import Container from "../layout/container";
import { FadeIn } from "../animation/fade-in";
import { aboutData } from "@/data/about";
import Link from "next/link";

const AboutPreview = () => {
  return (
    <section className="border-b border-(--border) py-20 sm:py-24 lg:py-28">
        <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <FadeIn>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                            About Me
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Backend-focused developer building reliable systems
                        </h2>
                    </div>
                </FadeIn>

                <div>
                    <FadeIn delay={0.08}>
                        <p className="text-lg leading-8 text-(--muted-foreground)">
                            {aboutData.intro}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.14}>
                        <p className="mt-5 leading-7 text-(--muted-foreground)">
                            {aboutData.description}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <Link
                            href="/about"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-400"
                        >
                            More about me
                            <ArrowRight className="size-4" />
                        </Link>
                    </FadeIn>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutPreview
