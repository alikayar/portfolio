import Hero from "@/components/hero";
import KnowledgeSupport from "@/components/systems/knowledge-support";
import SupplierCatalog from "@/components/systems/supplier-catalog";

export default function Home() {
  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto w-full max-w-7xl">
        <Hero />
        <SupplierCatalog />
        <KnowledgeSupport />
      </div>
    </div>
  );
}
