import KnowledgeSupport from "@/app/_components/home/systems/knowledge-support";
import SupplierCatalog from "@/app/_components/home/systems/supplier-catalog";

export default function SelectedWork() {
  return (
    <section
      aria-labelledby="selected-work-heading"
      className="section-gap scroll-mt-[var(--header-height)] bg-card text-foreground"
      id="systems"
    >
      <header className="mx-auto max-w-xl text-center">
        <h2 id="selected-work-heading">Selected Work</h2>
      </header>

      <div className="mt-12">
        <SupplierCatalog />
        <div className="section-gap">
          <KnowledgeSupport />
        </div>
      </div>
    </section>
  );
}
