// City landing pages (/diseno-web/[ciudad]). Each intro is specific to the city so the pages
// are useful to a local reader, not copies of one another.
export type Ciudad = {
  slug: string;
  name: string;
  intro: string;
  rubros: string[]; // rubro slugs to feature first
};

export const CIUDADES: Ciudad[] = [
  {
    slug: "luque",
    name: "Luque",
    intro:
      "Luque crece hacia todos lados: loteamientos nuevos, consultorios, ópticas y comercios sobre las avenidas. Cuando alguien busca un servicio en Luque desde el celular, gana el negocio que muestra todo en una sola página y responde por WhatsApp.",
    rubros: ["inmobiliaria", "odontologia", "estetica"],
  },
  {
    slug: "san-lorenzo",
    name: "San Lorenzo",
    intro:
      "En San Lorenzo hay mucha competencia en pocas cuadras. Una web propia le permite mostrar precios, horarios y ubicación antes de que el cliente pregunte, y aparecer cuando lo buscan en Google.",
    rubros: ["odontologia", "veterinaria", "estudio-contable"],
  },
  {
    slug: "capiata",
    name: "Capiatá",
    intro:
      "Muchos clientes de Capiatá llegan desde la ruta y desde las ciudades vecinas. Una web con cómo llegar, horarios y un botón de WhatsApp convierte esa búsqueda rápida en una visita.",
    rubros: ["inmobiliaria", "constructora", "veterinaria"],
  },
  {
    slug: "lambare",
    name: "Lambaré",
    intro:
      "Lambaré comparte clientes con Asunción. Para que lo elijan a usted y no a uno del centro, su web tiene que ser rápida, clara y estar en Google con su barrio.",
    rubros: ["estetica", "odontologia", "inmobiliaria"],
  },
  {
    slug: "fernando-de-la-mora",
    name: "Fernando de la Mora",
    intro:
      "Entre Asunción y San Lorenzo, Fernando de la Mora tiene clientes de paso todos los días. Una web que carga rápido en el celular y muestra sus servicios a un toque hace que lo encuentren y le escriban.",
    rubros: ["estudio-contable", "odontologia", "estetica"],
  },
  {
    slug: "limpio",
    name: "Limpio",
    intro:
      "En Limpio muchos negocios todavía dependen solo de Facebook. Una web propia aparece en Google, no se pierde entre publicaciones y deja que el cliente le escriba con lo que ya eligió.",
    rubros: ["inmobiliaria", "veterinaria", "constructora"],
  },
  {
    slug: "nemby",
    name: "Ñemby",
    intro:
      "Ñemby tiene barrios nuevos y familias que buscan servicios cerca de casa. Una web con su ubicación y sus horarios hace que lo encuentren cuando buscan en Google desde el celular.",
    rubros: ["odontologia", "estetica", "inmobiliaria"],
  },
  {
    slug: "mariano-roque-alonso",
    name: "Mariano Roque Alonso",
    intro:
      "Mariano Roque Alonso recibe clientes de Asunción y del Chaco. Una web clara, con fotos y un botón de WhatsApp, les ahorra la llamada y le trae consultas ya decididas.",
    rubros: ["constructora", "inmobiliaria", "veterinaria"],
  },
];

export function getCiudad(slug: string): Ciudad | undefined {
  return CIUDADES.find((c) => c.slug === slug);
}
