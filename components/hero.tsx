import Image from "next/image";

const coreStack = [
  { icon: "/icons/typescript.svg", label: "TypeScript" },
  { icon: "/icons/nextdotjs.svg", label: "Next.js" },
  { icon: "/icons/nodedotjs.svg", label: "Node.js" },
  { icon: "/icons/postgresql.svg", label: "PostgreSQL" },
  { icon: "/icons/docker.svg", label: "Docker" },
  { icon: "/icons/linux.svg", label: "Linux" },
  { icon: "/icons/cloudflare.svg", label: "Cloudflare" },
  { icon: "/icons/githubactions.svg", label: "GitHub Actions" },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100svh-4.5rem)] overflow-hidden bg-background px-3 text-foreground sm:px-5">
      <div className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl content-center items-start gap-8 pt-12 md:grid-cols-2 md:gap-12 md:pt-0">
        <header className="mx-auto w-full max-w-lg text-center md:mx-0 md:text-left">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            Independent Product Engineer
          </p>
          <h1 className="whitespace-nowrap font-display text-[clamp(1.65rem,3vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-secondary-foreground">
            Building Scalable Systems
          </h1>
          <p className="mx-auto mt-6 max-w-sm text-pretty text-base leading-7 text-muted-foreground md:mx-0">
            I build reliable web applications, backend systems, and automation
            that simplify complex workflows and solve real operational
            problems.
          </p>

          <ul
            aria-label="Core stack"
            className="mx-auto mt-8 grid max-w-lg grid-cols-2 justify-items-center gap-x-4 gap-y-3 text-xs text-muted-foreground md:mx-0 md:grid-cols-4 md:justify-items-start"
          >
            {coreStack.map(({ icon, label }) => (
              <li className="flex items-center gap-2" key={label}>
                <span
                  aria-hidden
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
        </header>

        <div className="flex items-center justify-center md:justify-end">
          <Image
            alt="Ali Kayar"
            className="aspect-[1238/1096] w-full max-w-lg rounded-3xl object-cover"
            height={1096}
            priority
            sizes="(min-width: 768px) 48vw, 90vw"
            src="/images/profile-hero.jpg"
            width={1238}
          />
        </div>
      </div>
    </section>
  );
}
