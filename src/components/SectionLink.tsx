"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

// next/link ignores a click whose URL equals the current one, so a "#precios" link stopped working
// once the address already ended in #precios. For links to a section of the page already open, this
// scrolls to it on every click (and a link to the page itself goes back to the top); links to another
// page keep the normal client navigation.
export function SectionLink({ href, onClick, ...props }: ComponentProps<typeof Link> & { href: string }) {
  const jump = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = new URL(href, window.location.href);
    if (url.pathname !== window.location.pathname) return;
    if (!url.hash) {
      e.preventDefault();
      if (window.location.hash) history.pushState(history.state, "", url.pathname + url.search);
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    if (window.location.hash !== url.hash) history.pushState(history.state, "", url.hash);
    target.scrollIntoView({ block: "start" });
  };

  return <Link href={href} onClick={jump} {...props} />;
}
