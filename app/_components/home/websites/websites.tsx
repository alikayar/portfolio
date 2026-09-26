import WebsiteSection, {
  type WebsiteProject,
} from "@/app/_components/home/sections/website-section";
import { assetUrl } from "@/config/environment";

const projects: WebsiteProject[] = [
  {
    description: "A multilingual website for a residential development in Podgorica, Montenegro.",
    href: "https://ckgroupinvestment.com/en",
    image: assetUrl("/images/public-work/ck-group-investment-website.webp"),
    imageAlt: "CK Group Investment website homepage",
    stack: [
      { icon: "/icons/astro.svg", label: "Astro" },
      { icon: "/icons/tailwindcss.svg", label: "Tailwind CSS" },
    ],
    title: "CK Group Investment",
  },
  {
    description: "A multilingual insurance website for product discovery and quote capture.",
    href: "https://solarasigorta.com/en",
    image: assetUrl("/images/public-work/solara-insurance-website.webp"),
    imageAlt: "Solara Insurance website product page",
    stack: [
      { icon: "/icons/nextdotjs.svg", label: "Next.js" },
      { icon: "/icons/typescript.svg", label: "TypeScript" },
      { icon: "/icons/postgresql.svg", label: "PostgreSQL" },
    ],
    title: "Solara Insurance",
  },
];

export default function Websites() {
  return (
    <section
      aria-labelledby="websites-heading"
      className="section-gap scroll-mt-[var(--header-height)] bg-card text-foreground"
      id="websites"
    >
      <header className="mx-auto max-w-xl text-center">
        <h2 id="websites-heading">Websites</h2>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
        {projects.map((project) => (
          <WebsiteSection key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
