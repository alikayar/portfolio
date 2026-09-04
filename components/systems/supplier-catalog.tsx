import Image from "next/image";
import SystemSection from "@/components/systems/system-section";

const stack = [
  { icon: "/icons/typescript.svg", label: "TypeScript" },
  { icon: "/icons/postgresql.svg", label: "PostgreSQL" },
  { icon: "/icons/redis.svg", label: "Redis" },
  { icon: "/icons/docker.svg", label: "Docker" },
];

export default function SupplierCatalog() {
  return (
    <section className="bg-card px-3 py-24 text-foreground sm:px-5 md:py-32" id="systems">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.035em] text-secondary-foreground sm:text-5xl">
            Systems I&apos;ve built
          </h2>
        </header>

        <div className="mt-12">
          <SystemSection
            diagram={
              <figure className="ml-auto max-w-[640px] overflow-hidden bg-transparent">
                <figcaption className="sr-only">Supplier catalog system flow</figcaption>
                <Image
                  alt=""
                  aria-hidden
                  className="h-auto w-full border border-border/30"
                  height={702}
                  src="/diagrams/supplier-catalog.svg"
                  width={613}
                />
              </figure>
            }
            impactItems={[
              { value: "10×", label: "Higher processing throughput" },
              { value: "Always-on", label: "Continuous production workflow" },
              {
                value: "Deterministic",
                label: "Reduced manual intervention and deterministic processing",
              },
            ]}
            problem={[
              "Supplier analysis relied on repetitive processing of large CSV and Excel files across multiple data providers.",
              "Processing was slow, error-prone, and could not run continuously.",
            ]}
            solution={[
              "Built a full-stack application that standardized file ingestion, mapping, and processing.",
              "Background workers handled file parsing, external API requests, automated calculations, and document generation.",
            ]}
            stack={stack}
            title="Supplier Catalog Automation"
          />
        </div>
      </div>
    </section>
  );
}
