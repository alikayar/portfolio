import type { ComponentProps } from "react";

type Props = ComponentProps<"span"> & { overlay?: boolean };

export function Skeleton({ className = "", overlay = false, ...props }: Props) {
  return (
    <span
      {...props}
      aria-hidden="true"
      className={`skeleton-wave block ${overlay ? "absolute" : "relative"} ${className}`}
    />
  );
}
