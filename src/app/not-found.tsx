import Link from "next/link";

import Container from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Page not found
          </h1>

          <p className="mt-4 leading-7 text-(--muted-foreground)">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Go to homepage
          </Link>
        </div>
      </Container>
    </main>
  );
}