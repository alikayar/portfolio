import Image from "next/image";
import { siteConfig } from "@/config/site";

const email = "hello@example.com";

const projectFit = [
  "Full-stack web applications",
  "Landing pages and marketing websites",
  "Data workflows, automation, and system design",
  "Web scraping, API reverse engineering, and technical consulting",
];

function BrandMark({ src }: { src: string }) {
  return (
    <span
      aria-hidden="true"
      className="size-4 shrink-0 bg-secondary-foreground/80"
      style={{
        mask: `url(${src}) center / contain no-repeat`,
        WebkitMask: `url(${src}) center / contain no-repeat`,
      }}
    />
  );
}

export default function Contact() {
  return (
    <section
      className="scroll-mt-[3.25rem] bg-background pb-20 pt-20 text-foreground md:pb-24 md:pt-24"
      id="contact"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <figure className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-3xl border border-border/70 bg-secondary lg:order-2 lg:mx-0">
          <Image
            alt={`${siteConfig.name} overlooking a coastal town`}
            className="object-cover"
            fill
            quality={85}
            sizes="(min-width: 1024px) 46vw, 100vw"
            src="/images/profile-contact.webp"
          />
        </figure>

        <div className="w-full max-w-2xl lg:order-1">
          <h2 className="max-w-[32rem] font-display text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-secondary-foreground sm:text-5xl">
            Tell me what you&apos;re building.
          </h2>
          <p className="mt-5 max-w-[38rem] text-pretty text-base leading-7 text-muted-foreground sm:text-[17px]">
            Share what you need help with and what success looks like. I&apos;ll let you know if
            I&apos;m a good fit.
          </p>

          <div className="mt-9">
            <p className="text-sm font-medium text-secondary-foreground">I can help with</p>
            <ul className="mt-4 grid gap-x-10 gap-y-3 text-[15px] leading-6 text-foreground/80 sm:grid-cols-2">
              {projectFit.map((item) => (
                <li className="flex items-start gap-2" key={item}>
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-ring"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-sm font-medium text-secondary-foreground">Contact</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
                href={`mailto:${email}`}
              >
                <BrandMark src="/icons/mail.svg" />
                {email}
              </a>

              <span aria-hidden="true" className="hidden h-5 w-px bg-border sm:block" />

              <div className="flex items-center gap-x-7 gap-y-4 text-sm font-medium">
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
                  href={siteConfig.socials.linkedin}
                  rel="me noreferrer"
                  target="_blank"
                >
                  <BrandMark src="/icons/linkedin.svg" />
                  LinkedIn
                </a>
                <a
                  className="inline-flex items-center gap-2 text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
                  href={siteConfig.socials.github}
                  rel="me noreferrer"
                  target="_blank"
                >
                  <BrandMark src="/icons/github.svg" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
