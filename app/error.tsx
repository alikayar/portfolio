"use client";

import StatusPage from "@/app/_components/status-page";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ retry }: { retry: () => void }) {
  return (
    <StatusPage
      title="This page couldn't load."
      description="Something went wrong while loading this page. Try again, or head back home."
      illustration="/illustrations/error.svg"
    >
      <Button onClick={retry}>Try again</Button>
    </StatusPage>
  );
}
