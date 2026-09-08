import Image from "next/image";
import { assetUrl } from "@/config/environment";
import { siteConfig } from "@/config/site";

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
    <section className="grid min-h-[calc(100svh-3.25rem)] content-center items-start gap-8 overflow-hidden bg-background text-foreground pt-12 md:grid-cols-2 md:gap-12 md:pt-0">
      <header className="mx-auto w-full max-w-lg text-center md:mx-0 md:text-left">
        <h1 className="text-balance font-display text-[clamp(1.65rem,3vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-secondary-foreground">
          {siteConfig.role}
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-pretty text-base leading-7 text-muted-foreground md:mx-0">
          I build websites, full-stack applications, data systems, and automation for complex
          business workflows.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-secondary-foreground md:justify-start">
          <span className="inline-flex items-center gap-2">
            <Image
              alt=""
              aria-hidden="true"
              className="h-3 w-[18px] rounded-[2px] object-cover"
              height={20}
              unoptimized
              src={siteConfig.locationFlag}
              width={30}
            />
            {siteConfig.location}
          </span>
          <span aria-hidden="true">·</span>
          <span>{siteConfig.availability}</span>
        </div>

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
          alt={`Portrait of ${siteConfig.name}`}
          className="aspect-[1238/1096] w-full max-w-lg rounded-3xl object-cover"
          height={1096}
          priority
          sizes="(min-width: 768px) 48vw, 90vw"
          src={assetUrl("/images/profile-hero.webp")}
          width={1238}
        />
      </div>
    </section>
  );
}
