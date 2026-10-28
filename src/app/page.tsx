import { ViewTransition } from "react";
import { AdStudio } from "@/components/AdStudio";
import { Builder } from "@/components/Builder";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Rebuild } from "@/components/Rebuild";
import { Reveals } from "@/components/Reveals";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      <main id="contenido">
        <Hero />
        <Work />
        <Rebuild />
        <Builder />
        <AdStudio />
        <Process />
        <Pricing />
        <Proof />
        <Contact />
        <Reveals />
      </main>
    </ViewTransition>
  );
}
