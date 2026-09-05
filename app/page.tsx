import Contact from "@/components/contact";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import SelectedWork from "@/components/systems/selected-work";
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
        <SelectedWork />
        <Websites />
        <Contact />
      </div>
    </main>
  );
}
