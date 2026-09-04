import Contact from "@/components/contact";
import Hero from "@/components/hero";
import KnowledgeSupport from "@/components/systems/knowledge-support";
import SupplierCatalog from "@/components/systems/supplier-catalog";
import Websites from "@/components/websites/websites";

export default function Home() {
  return (
    <div className="px-3 sm:px-5">
      <div className="mx-auto w-full max-w-7xl">
        <Hero />
        <SupplierCatalog />
        <KnowledgeSupport />
        <Websites />
        <Contact />
      </div>
    </div>
  );
}
