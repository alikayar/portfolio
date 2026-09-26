import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full rounded-full border border-secondary bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground [overflow-wrap:anywhere]">
      {children}
    </span>
  );
}
