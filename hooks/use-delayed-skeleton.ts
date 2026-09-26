"use client";

import { useEffect, useState } from "react";

export function useDelayedSkeleton(src: string | undefined, ready: boolean) {
  const [visibleSrc, setVisibleSrc] = useState<string>();

  useEffect(() => {
    if (ready || !src) return;

    const timer = window.setTimeout(() => setVisibleSrc(src), 200);
    return () => window.clearTimeout(timer);
  }, [src, ready]);

  return !ready && visibleSrc === src;
}
