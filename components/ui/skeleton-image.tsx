"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { useDelayedSkeleton } from "@/hooks/use-delayed-skeleton";
import { Skeleton } from "./skeleton";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  wrapperClassName?: string;
};

export function SkeletonImage({
  src,
  className,
  wrapperClassName,
  onLoad,
  onError,
  ...props
}: Props) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const loaded = loadedSrc === src;
  const showSkeleton = useDelayedSkeleton(src, loaded);

  return (
    <span
      className={`${props.fill ? "absolute inset-0" : "relative block"} ${wrapperClassName ?? ""}`}
    >
      <Image
        {...props}
        className={className}
        onError={(event) => {
          setLoadedSrc(src);
          onError?.(event);
        }}
        onLoad={(event) => {
          setLoadedSrc(src);
          onLoad?.(event);
        }}
        src={src}
        style={{ ...props.style, opacity: loaded ? 1 : 0 }}
      />
      {showSkeleton && <Skeleton overlay className="pointer-events-none inset-0" />}
    </span>
  );
}
