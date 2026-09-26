import { SkeletonImage } from "@/components/ui/skeleton-image";
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
    <main className="flex min-h-[calc(100svh-var(--header-height))] items-center py-12">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-16">
        <SkeletonImage
          alt=""
          aria-hidden="true"
          className="h-auto w-full"
          height={365}
          width={384}
          wrapperClassName="mx-auto w-full max-w-52 sm:max-w-64 md:max-w-88"
          src={illustration}
          unoptimized
          preload
        />
        <div className="text-center md:text-left">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {children}
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-3 hover:border-ring hover:bg-secondary/25"
              href="/"
            >
              <span aria-hidden="true">←</span>
              <span data-underline="">Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
