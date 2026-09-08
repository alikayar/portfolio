"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

const navigation = [
  { label: "Work", href: "#systems" },
  { label: "Websites", href: "#websites" },
  { label: "Contact", href: "#contact" },
];

const navigationLinkClassName = [
  "relative transition-colors",
  "after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0",
  "after:bg-secondary-foreground after:transition-[width] after:duration-200",
  "hover:text-foreground hover:after:w-full",
  "focus-visible:text-foreground focus-visible:after:w-full",
].join(" ");

const [firstName, ...lastNameParts] = siteConfig.name.split(" ");
const lastName = lastNameParts.join(" ");

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-secondary/30 backdrop-blur-md">
      <div className="relative min-h-[3.25rem]">
        <div className="absolute inset-y-0 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 sm:gap-6 md:gap-10">
          <Link
            className="outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
            href="/"
            onClick={(event) => {
              if (window.location.pathname !== "/") return;

              event.preventDefault();
              window.history.replaceState(null, "", "/");
              window.scrollTo({ top: 0 });
            }}
            aria-label={`${siteConfig.name} home`}
          >
            <span className="inline-flex items-baseline font-display text-[clamp(1rem,calc(0.911rem_+_0.446vw),1.125rem)] leading-none text-secondary-foreground">
              <span className="font-semibold">{firstName}</span>{" "}
              <span className="ml-[0.12em] font-bold">{lastName}</span>
            </span>
          </Link>

          <nav
            className="flex items-center gap-3 text-[clamp(0.68rem,calc(0.62rem_+_0.3vw),0.875rem)] font-medium text-muted-foreground sm:gap-5"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link className={navigationLinkClassName} href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
