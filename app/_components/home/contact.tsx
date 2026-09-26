import { SkeletonImage } from "@/components/ui/skeleton-image";
import { MaskedIcon } from "@/components/ui/masked-icon";
import { assetUrl, contactEmail } from "@/config/environment";
import { siteConfig } from "@/config/site";

const projectFit = [
  "Full-stack web applications",
  "Landing pages and marketing websites",
  "Data workflows, automation, and system design",
  "Web scraping, API reverse engineering, and technical consulting",
];

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="section-gap scroll-mt-[var(--header-height)] bg-background pb-20 text-foreground md:pb-24"
      id="contact"
    >
      <header className="mx-auto max-w-xl text-center">
        <h2 id="contact-heading">Contact</h2>
      </header>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <figure className="relative mx-auto aspect-[3/2] w-full overflow-hidden rounded-3xl border border-border/70 bg-secondary lg:order-2 lg:mx-0">
          <SkeletonImage
            alt={`${siteConfig.name} overlooking a coastal town`}
            className="object-cover"
            fill
            quality={85}
            sizes="(min-width: 1280px) 38rem, (min-width: 1024px) 46vw, 100vw"
            src={assetUrl("/images/profile-contact.webp")}
          />
        </figure>

        <div className="w-full max-w-2xl lg:order-1">
          <h3 className="max-w-[32rem]">Tell me what you&apos;re building.</h3>
          <p>
            Share what you need help with and what success looks like. I&apos;ll let you know if
            I&apos;m a good fit.
          </p>

          <div className="mt-9">
            <h4>I can help with</h4>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              {projectFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h4>Reach me</h4>
            <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a className="inline-flex min-w-0 items-center gap-2" href={`mailto:${contactEmail}`}>
                <MaskedIcon src="/icons/mail.svg" />
                <span data-underline="" className="min-w-0 break-all">
                  {contactEmail}
                </span>
              </a>

              <span aria-hidden="true" className="hidden h-5 w-px bg-border sm:block" />

              <div className="flex items-center gap-x-7 gap-y-4">
                <a
                  className="inline-flex items-center gap-2"
                  href={siteConfig.socials.linkedin}
                  rel="me noreferrer"
                  target="_blank"
                >
                  <MaskedIcon src="/icons/linkedin.svg" />
                  <span data-underline="">LinkedIn</span>
                </a>
                <a
                  className="inline-flex items-center gap-2"
                  href={siteConfig.socials.github}
                  rel="me noreferrer"
                  target="_blank"
                >
                  <MaskedIcon src="/icons/github.svg" />
                  <span data-underline="">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
