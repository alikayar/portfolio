import type { ComponentProps } from "react";

type ButtonProps = Omit<ComponentProps<"button">, "className">;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full bg-secondary-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-secondary-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      {children}
    </button>
  );
}
