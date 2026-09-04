import type { ReactNode } from "react";

type SystemSectionProps = {
  title: string;
  problem?: string[];
  solution?: string[];
  impactItems: { value: string; label: string }[];
  stack: { icon: string; label: string }[];
  diagram: ReactNode;
};

export default function SystemSection({
  title,
  problem,
  solution,
  impactItems,
  stack,
  diagram,
}: SystemSectionProps) {
  return (
    <article className="bg-background py-5 sm:py-6">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-10">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-secondary-foreground sm:text-3xl">
            {title}
          </h3>
          <div className="mt-8 space-y-8">
            {problem?.length ? <TextList title="Problem" items={problem} /> : null}
            {solution?.length ? <TextList title="Solution" items={solution} /> : null}
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-secondary-foreground">Impact</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/70">
              {impactItems.map((item) => (
                <li key={item.value}>
                  <span className="font-semibold text-secondary-foreground">{item.value}</span> —{" "}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-secondary-foreground">Tech Stack</p>
            <ul
              className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-6"
              aria-label="Technology stack"
            >
              {stack.map(({ icon, label }) => (
                <li className="flex items-center gap-2 text-xs text-muted-foreground" key={label}>
                  <span
                    aria-hidden="true"
                    className="size-4 shrink-0 bg-secondary-foreground/80"
                    style={{
                      mask: `url(${icon}) center / contain no-repeat`,
                      WebkitMask: `url(${icon}) center / contain no-repeat`,
                    }}
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0 w-full">{diagram}</div>
      </div>
    </article>
  );
}

function TextList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-medium text-secondary-foreground">{title}</p>
      <ul className="mt-3 w-full list-disc space-y-2 pl-5 text-[15px] leading-7 text-foreground/70">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
