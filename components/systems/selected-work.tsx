import KnowledgeSupport from "@/components/systems/knowledge-support";
import SupplierCatalog from "@/components/systems/supplier-catalog";

export default function SelectedWork() {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="scroll-mt-[3.25rem] bg-card pb-12 pt-20 text-foreground md:pb-16 md:pt-24"
      id="systems"
    >
      <header className="mx-auto max-w-xl text-center">
        <h2
          className="font-display text-4xl font-semibold tracking-[-0.035em] text-secondary-foreground sm:text-5xl"
          id="selected-work-heading"
        >
          Selected Work
        </h2>
      </header>

      <div className="mt-12">
        <SupplierCatalog />
        <KnowledgeSupport />
      </div>
    </section>
  );
}
