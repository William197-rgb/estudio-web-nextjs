export type Work = {
  slug: string;
  name: string;
  kind: string;
  place: string;
  live: string;
  stripHeight: number;
};

const DEMOS = "https://william-demos.web-estudio.workers.dev/ejemplos";

// Showcase sites built on 2026-10-28 for fictional businesses (portafolio/showcase in prospectos-web-central).
export const WORK: Work[] = [
  { slug: "navaja", name: "Navaja", kind: "Barbería", place: "Miami", live: "Elija servicios y vea el total y la próxima silla libre", stripHeight: 3200 },
  { slug: "hollis", name: "Hollis & Sons", kind: "Constructora", place: "Austin, Texas", live: "Calcula el presupuesto según la obra, el tamaño y la terminación", stripHeight: 2825 },
  { slug: "ring9", name: "Ring 9", kind: "Gimnasio de boxeo", place: "Nueva York", live: "Un cronómetro de round que suena como en la clase", stripHeight: 2497 },
  { slug: "costa-alta", name: "Costa Alta", kind: "Inmobiliaria", place: "Punta del Este", live: "Propiedades en venta o alquiler, con precios en tres monedas", stripHeight: 3200 },
];

export const workUrl = (w: Work) => `${DEMOS}/${w.slug}/`;
