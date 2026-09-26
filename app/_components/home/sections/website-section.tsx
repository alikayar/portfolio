import { SkeletonImage } from "@/components/ui/skeleton-image";
import { MaskedIcon } from "@/components/ui/masked-icon";

export type WebsiteProject = {
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  stack: { icon: string; label: string }[];
  title: string;
};

type WebsiteSectionProps = {
  project: WebsiteProject;
};

export default function WebsiteSection({ project }: WebsiteSectionProps) {
  return (
    <article>
      <a
        aria-label={`Visit ${project.title}`}
        className="group relative block aspect-[16/10] overflow-hidden rounded-3xl border border-border/80 bg-background transition-colors hover:border-secondary-foreground/50"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        <SkeletonImage
          alt={project.imageAlt}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          fill
          sizes="(min-width: 1280px) 39rem, (min-width: 768px) 47vw, 100vw"
          src={project.image}
        />
      </a>

      <div className="mt-5">
        <h3>
          <a href={project.href} rel="noreferrer" target="_blank">
            <span data-underline="">{project.title}</span>
          </a>
        </h3>
        <p>{project.description}</p>
        <ul
          aria-label="Technology stack"
          className="tech-stack-text mt-4 flex flex-wrap gap-x-5 gap-y-2"
        >
          {project.stack.map(({ icon, label }) => (
            <li className="flex items-center gap-2" key={label}>
              <MaskedIcon src={icon} />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
