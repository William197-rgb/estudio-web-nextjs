"use client";

import { useEffect } from "react";

type GsapModule = typeof import("./gsap-core");
type Setup = (mods: GsapModule, mm: gsap.MatchMedia) => void;

// Scroll animations are not needed for the first paint, so GSAP is downloaded and set up once the
// browser is idle (or after 1.5 s at most). Each section's setup runs inside a matchMedia scoped
// to the section, which also reverts everything on unmount.
export function useIdleGsap(scopeId: string, setup: Setup) {
  useEffect(() => {
    let alive = true;
    let mm: gsap.MatchMedia | undefined;

    const start = () => {
      import("./gsap-core").then((mods) => {
        const scope = document.getElementById(scopeId);
        if (!alive || !scope) return;
        mm = mods.gsap.matchMedia(scope);
        setup(mods, mm);
      });
    };

    const idle = typeof requestIdleCallback === "function";
    const id = idle ? requestIdleCallback(start, { timeout: 1500 }) : setTimeout(start, 200);

    return () => {
      alive = false;
      if (idle) cancelIdleCallback(id as number);
      else clearTimeout(id);
      mm?.revert();
    };
    // setup is a module-level function in every caller.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeId]);
}
