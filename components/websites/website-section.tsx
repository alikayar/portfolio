import Image from "next/image";

export type WebsiteProject = {
  category: string;
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
        className="group relative block aspect-[16/10] overflow-hidden rounded-3xl border border-border/80 bg-background outline-none transition-colors hover:border-secondary-foreground/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        href={project.href}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          alt={project.imageAlt}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          fill
          sizes="(min-width: 1024px) 620px, 100vw"
          src={project.image}
        />
      </a>

      <div className="mt-5">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-secondary-foreground sm:text-3xl">
          <a
            className="outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            {project.title}
          </a>
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-muted-foreground">{project.description}</p>
        <ul
          aria-label="Technology stack"
          className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs leading-6"
        >
          {project.stack.map(({ icon, label }) => (
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
        <a
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
          href={project.href}
          rel="noreferrer"
          target="_blank"
        >
          Visit website
          <span aria-hidden="true" className="text-base leading-none">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
