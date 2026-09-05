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
    <SystemSection
      diagram={
        <figure className="relative h-[400px] w-full overflow-hidden bg-transparent sm:h-[500px] lg:h-[680px]">
          <figcaption className="sr-only">Supplier catalog system flow</figcaption>
          <Image
            alt=""
            aria-hidden
            className="object-contain object-center lg:object-right"
            fill
            src="/diagrams/supplier-catalog.svg"
            sizes="(min-width: 1024px) 65vw, 100vw"
          />
        </figure>
      }
      impactItems={[
        { value: "10×", label: "Higher processing throughput" },
        { value: "24/7", label: "Continuous production workflow" },
        {
          value: "Deterministic",
          label: "Consistent processing with less manual intervention",
        },
      ]}
      problem={[
        "Supplier analysis relied on repetitive processing of large CSV and Excel files across multiple data providers.",
        "Processing was slow, error-prone, and could not run continuously.",
      ]}
      solution={[
        "Built a full-stack application for data extraction, file ingestion, mapping, and processing.",
        "Background workers handled file parsing, external API requests, automated calculations, and document generation.",
      ]}
      stack={stack}
      title="Supplier Catalog Automation"
    />
  );
}
