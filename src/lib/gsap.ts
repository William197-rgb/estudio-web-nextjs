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
        // A pin adds scroll space above everything after it. If the page was resting on a #anchor
        // below (a shared link, a nav jump), keep that anchor where it was.
        const anchor = window.location.hash ? document.getElementById(window.location.hash.slice(1)) : null;
        const before = anchor?.getBoundingClientRect().top;
        mm = mods.gsap.matchMedia(scope);
        setup(mods, mm);
        if (anchor && before !== undefined && before > -40 && before < 160) {
          const after = anchor.getBoundingClientRect().top;
          if (Math.abs(after - before) > 1) window.scrollBy(0, after - before);
        }
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
