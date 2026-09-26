import SystemDiagram from "@/app/_components/home/systems/system-diagram";
import SystemSection from "@/app/_components/home/sections/system-section";

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
        <SystemDiagram
          description="Supplier catalog system flow"
          height={1006}
          src="/diagrams/supplier-catalog.svg"
          width={1039}
        />
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
