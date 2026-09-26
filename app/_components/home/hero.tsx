import Image from "next/image";
import { SkeletonImage } from "@/components/ui/skeleton-image";
import { MaskedIcon } from "@/components/ui/masked-icon";
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
    <section className="page-top grid items-start gap-8 bg-background text-foreground md:grid-cols-2 md:gap-12">
      <header className="mx-auto w-full max-w-lg text-center md:mx-0 md:text-left">
        <h1>{siteConfig.role}</h1>
        <p>
          I build websites, full-stack applications, data systems, and automation for complex
          business workflows.
        </p>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 md:justify-start">
          <span className="inline-flex items-center gap-2">
            <Image
              alt=""
              aria-hidden="true"
              className="h-3 w-[18px] rounded-[2px] object-cover"
              height={20}
              src={siteConfig.locationFlag}
              unoptimized
              width={30}
            />
            {siteConfig.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true">·</span>
            {siteConfig.availability}
          </span>
        </p>

        <ul
          aria-label="Core stack"
          className="tech-stack-text mx-auto mt-8 grid max-w-lg grid-cols-[repeat(2,max-content)] justify-between gap-x-4 gap-y-3 md:mx-0 lg:grid-cols-[repeat(4,max-content)] lg:justify-start"
        >
          {coreStack.map(({ icon, label }) => (
            <li className="flex items-center gap-2" key={label}>
              <MaskedIcon src={icon} />
              {label}
            </li>
          ))}
        </ul>
      </header>

      <div className="flex items-center justify-center md:justify-end">
        <SkeletonImage
          alt={`Portrait of ${siteConfig.name}`}
          className="aspect-[1238/1096] w-full object-cover"
          height={1096}
          priority
          sizes="(min-width: 1024px) 32rem, (min-width: 768px) 45vw, 90vw"
          src={assetUrl("/images/profile-hero.webp")}
          width={1238}
          wrapperClassName="w-full max-w-lg overflow-hidden rounded-3xl"
        />
      </div>
    </section>
  );
}
