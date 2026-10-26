import { ViewTransition } from "react";
import { AdStudio } from "@/components/AdStudio";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Rebuild } from "@/components/Rebuild";
import { RubrosGrid } from "@/components/RubrosGrid";

export default function Home() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      <main id="contenido">
        <Hero />
        <Rebuild />
        <RubrosGrid />
        <AdStudio />
        <Process />
        <Pricing />
        <Proof />
        <Contact />
      </main>
    </ViewTransition>
  );
}
