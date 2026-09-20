import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type StatusPageProps = {
  title: string;
  description: string;
  illustration: string;
  children?: ReactNode;
};

export default function StatusPage({
  title,
  description,
  illustration,
  children,
}: StatusPageProps) {
  return (
    <main className="flex min-h-[calc(100svh-3.25rem)] items-center px-6 py-12 sm:px-10">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-16">
        <Image
          alt=""
          aria-hidden="true"
          className="mx-auto h-auto w-full max-w-52 sm:max-w-64 md:max-w-88"
          height={400}
          width={384}
          src={illustration}
          unoptimized
          preload
        />
        <div className="text-center md:text-left">
          <h1 className="text-balance font-display text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-secondary-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-pretty text-base leading-7 text-muted-foreground md:mx-0">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {children}
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:border-ring hover:bg-secondary/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              href="/"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
