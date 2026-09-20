"use client";

import StatusPage from "@/components/status-page";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <StatusPage
      title="This page couldn't load."
      description="Something went wrong while loading this page. Try again, or head back home."
      illustration="/illustrations/error.svg"
    >
      <button
        className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-secondary-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-secondary-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        onClick={retry}
        type="button"
      >
        Try again
      </button>
    </StatusPage>
  );
}
