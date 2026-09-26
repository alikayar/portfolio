"use client";

import { useState } from "react";
import { SkeletonImage } from "@/components/ui/skeleton-image";

type Props = {
  src: string;
  sizes: string;
  preload?: boolean;
};

export default function CoverImage({ src, sizes, preload }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg bg-background">
      <SkeletonImage
        alt=""
        className={`relative h-auto w-full transition-transform duration-300 group-hover:scale-[1.02] ${
          failed ? "invisible" : ""
        }`}
        height={500}
        onError={() => setFailed(true)}
        preload={preload}
        sizes={sizes}
        src={src}
        unoptimized
        width={1200}
        wrapperClassName="w-full"
      />
      {failed && (
        <output className="absolute inset-0 flex items-center justify-center bg-secondary/25 text-muted-foreground">
          Image unavailable
        </output>
      )}
    </div>
  );
}
