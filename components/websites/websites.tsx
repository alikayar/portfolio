import WebsiteSection, { type WebsiteProject } from "@/components/websites/website-section";

const projects: WebsiteProject[] = [
  {
    category: "Real estate website",
    description: "A multilingual website for a residential development in Podgorica, Montenegro.",
    href: "https://ckgroupinvestment.com/en",
    image: "/images/public-work/ck-group-investment-website.webp",
    imageAlt: "CK Group Investment website homepage",
    stack: [
      { icon: "/icons/astro.svg", label: "Astro" },
      { icon: "/icons/tailwindcss.svg", label: "Tailwind CSS" },
    ],
    title: "CK Group Investment",
  },
  {
    category: "Insurance website",
    description: "A multilingual insurance website for product discovery and quote capture.",
    href: "https://solarasigorta.com/en",
    image: "/images/public-work/solara-insurance-website.webp",
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
      className="scroll-mt-[3.25rem] bg-card pb-16 pt-20 text-foreground md:pb-24 md:pt-24"
      id="websites"
    >
      <header className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-secondary-foreground sm:text-4xl">
          Websites
        </h2>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
        {projects.map((project) => (
          <WebsiteSection key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
