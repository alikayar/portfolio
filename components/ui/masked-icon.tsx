export function MaskedIcon({ src }: { src: string }) {
  const mask = `url(${src}) center / contain no-repeat`;

  return (
    <span
      aria-hidden="true"
      className="size-4 shrink-0 bg-secondary-foreground/80"
      style={{ mask, WebkitMask: mask }}
    />
  );
}
