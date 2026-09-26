"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navigation = [
  { label: "Work", href: "/#systems" },
  { label: "Websites", href: "/#websites" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const [firstName, ...lastNameParts] = siteConfig.name.split(" ");
const lastName = lastNameParts.join(" ");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = `url(/icons/${menuOpen ? "close" : "menu"}.svg) center / contain no-repeat`;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-secondary/30 backdrop-blur-md">
      <div className="px-3 sm:px-5">
        <div className="relative mx-auto flex min-h-[var(--header-height)] w-full max-w-7xl items-center justify-center gap-2 sm:gap-6 md:gap-10">
          <Link
            className="transition-opacity hover:opacity-80"
            href="/"
            onClick={(event) => {
              setMenuOpen(false);
              if (window.location.pathname !== "/") return;

              event.preventDefault();
              window.history.replaceState(null, "", "/");
              window.scrollTo({ top: 0 });
            }}
            aria-label={`${siteConfig.name} home`}
          >
            <span className="inline-flex items-baseline font-display text-lg leading-none text-secondary-foreground sm:text-xl">
              <span className="font-semibold">{firstName}</span>{" "}
              <span className="ml-[0.12em] font-bold">{lastName}</span>
            </span>
          </Link>

          <button
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="absolute right-0 flex size-9 items-center justify-center rounded-md text-secondary-foreground focus-visible:outline-2 focus-visible:outline-ring sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span
              aria-hidden="true"
              className="size-5 bg-secondary-foreground"
              style={{
                mask: menuIcon,
                WebkitMask: menuIcon,
              }}
            />
          </button>

          <nav
            aria-label="Main navigation"
            className={`${menuOpen ? "visible grid-rows-[1fr] opacity-100" : "invisible pointer-events-none grid-rows-[0fr] opacity-0"} absolute inset-x-0 top-full grid transition-[grid-template-rows,opacity,visibility] duration-200 ease-out motion-reduce:transition-none sm:static sm:visible sm:pointer-events-auto sm:block sm:opacity-100`}
            id="main-navigation"
          >
            <div className="min-h-0 overflow-hidden sm:overflow-visible">
              <div className="flex flex-col gap-1 rounded-b-lg border border-border bg-background p-2 shadow-sm sm:flex-row sm:items-center sm:gap-5 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                {navigation.map((item) => (
                  <Link
                    className="rounded px-3 py-2 sm:p-0"
                    data-underline="nav"
                    href={item.href}
                    key={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
