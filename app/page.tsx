import Contact from "@/components/contact";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import KnowledgeSupport from "@/components/systems/knowledge-support";
import SupplierCatalog from "@/components/systems/supplier-catalog";
import Websites from "@/components/websites/websites";
import { getOpenGraphMetadata } from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: getOpenGraphMetadata("/"),
};

export default function Home() {
  return (
    <main className="px-3 sm:px-5">
      <div className="mx-auto w-full max-w-7xl">
        <Hero />
        <SupplierCatalog />
        <KnowledgeSupport />
        <Websites />
        <Contact />
      </div>
    </main>
  );
}
