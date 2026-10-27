import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Imported only through loadGsap(), so GSAP ships in its own chunk, off the first paint.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
