import Link from "next/link";

const navigation = [
  { label: "Systems", href: "#systems" },
  { label: "Websites", href: "#websites" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const navigationLinkClassName = [
  "relative transition-colors",
  "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0",
  "after:bg-secondary-foreground after:transition-[width] after:duration-200",
  "hover:text-foreground hover:after:w-full",
  "focus-visible:text-foreground focus-visible:after:w-full",
].join(" ");

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="relative min-h-[4.5rem]">
        <div className="absolute inset-y-0 left-1/2 flex w-max -translate-x-1/2 items-center gap-10">
          <Link
            className="outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            href="/"
            aria-label="Ali Kayar home"
          >
            <span className="inline-flex items-baseline font-display text-[clamp(1rem,calc(0.911rem_+_0.446vw),1.125rem)] leading-none text-secondary-foreground">
              <span className="font-semibold">Ali</span>
              <span className="ml-[0.22em] font-bold">Kayar</span>
            </span>
          </Link>

          <nav
            className="flex items-center gap-5 text-[clamp(0.75rem,calc(0.661rem_+_0.446vw),0.875rem)] font-medium text-muted-foreground"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                className={navigationLinkClassName}
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
