import type { ReactNode } from "react";
import { MaskedIcon } from "@/components/ui/masked-icon";

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
          <h3>{title}</h3>
          <div className="mt-8 space-y-8">
            {problem?.length ? <TextList title="Problem" items={problem} /> : null}
            {solution?.length ? <TextList title="Solution" items={solution} /> : null}
          </div>

          <div className="mt-8">
            <h4>Impact</h4>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {impactItems.map((item) => (
                <li key={item.value}>
                  <span className="font-semibold">{item.value}</span> — {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4>Tech Stack</h4>
            <ul
              className="tech-stack-text mt-3 flex flex-wrap gap-x-5 gap-y-2"
              aria-label="Technology stack"
            >
              {stack.map(({ icon, label }) => (
                <li className="flex items-center gap-2" key={label}>
                  <MaskedIcon src={icon} />
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
      <h4>{title}</h4>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
