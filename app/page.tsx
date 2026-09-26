import type { Metadata } from "next";
import Contact from "@/app/_components/home/contact";
import Hero from "@/app/_components/home/hero";
import SelectedWork from "@/app/_components/home/systems/selected-work";
import Websites from "@/app/_components/home/websites/websites";
import { assetUrl } from "@/config/environment";
import { getOpenGraphMetadata } from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: getOpenGraphMetadata(assetUrl("/images/og-default.jpg"), "/"),
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Websites />
      <Contact />
    </main>
  );
}
