// Example businesses are fictional; names use Guaraní words for local flavour.
export type Rubro = {
  slug: string;
  label: string;
  business: string;
  city: string;
  hero: string;
  cta: string;
  pitch: string;
  features: string[];
  look: {
    bg: string;
    surface: string;
    ink: string;
    accent: string;
    accentInk: string;
    font: string;
    radius: string;
  };
};

export const RUBROS: Rubro[] = [
  {
    slug: "odontologia",
    label: "Odontología",
    business: "Odontología Porã",
    city: "Luque",
    hero: "Turnos en un minuto, sin llamar",
    cta: "Pedir turno",
    pitch:
      "El paciente busca dentista desde el celular y elige al que le deja pedir turno al instante. La web hace ese trabajo mientras usted atiende.",
    features: [
      "Pedido de turnos por WhatsApp con el tratamiento ya elegido",
      "Tratamientos explicados en lenguaje simple",
      "Seguros médicos que acepta, a la vista",
      "Ubicación, horarios y cómo llegar desde la ruta",
    ],
    look: {
      bg: "#EAF6F4",
      surface: "#FFFFFF",
      ink: "#0F3B37",
      accent: "#11786E",
      accentInk: "#FFFFFF",
      font: "var(--font-body)",
      radius: "1.4em",
    },
  },
  {
    slug: "veterinaria",
    label: "Veterinaria",
    business: "Veterinaria Jaguareté",
    city: "San Lorenzo",
    hero: "Urgencias: escríbanos ahora",
    cta: "Tengo una urgencia",
    pitch:
      "Cuando una mascota se enferma de noche, el dueño escribe al primero que responde. Un botón de urgencias visible gana esa consulta.",
    features: [
      "Botón de urgencias fijo, siempre a un toque",
      "Servicios: consultas, vacunas, cirugías, peluquería",
      "Turnos de baño y peluquería por WhatsApp",
      "Galería de pacientes felices para dar confianza",
    ],
    look: {
      bg: "#FFF3E2",
      surface: "#FFFFFF",
      ink: "#3B2410",
      accent: "#BD5416",
      accentInk: "#FFFFFF",
      font: "var(--font-display)",
      radius: "2em",
    },
  },
  {
    slug: "constructora",
    label: "Constructora",
    business: "Constructora Tajy",
    city: "Capiatá",
    hero: "Obras que se entregan a tiempo",
    cta: "Pedir presupuesto",
    pitch:
      "Quien va a construir quiere ver obras terminadas antes de confiar. Un portafolio ordenado vende más que cualquier folleto.",
    features: [
      "Portafolio de obras con fotos y año de entrega",
      "Servicios: viviendas, ampliaciones, galpones",
      "Pedido de presupuesto con metros y ubicación",
      "Datos de la empresa y responsables técnicos",
    ],
    look: {
      bg: "#1E1F22",
      surface: "#2A2C30",
      ink: "#F2F0EA",
      accent: "#F5C518",
      accentInk: "#1E1F22",
      font: "var(--font-display)",
      radius: "0.2em",
    },
  },
  {
    slug: "estudio-contable",
    label: "Estudio contable",
    business: "Estudio Contable Ñandutí",
    city: "Fernando de la Mora",
    hero: "Sus impuestos al día, sin sorpresas con la DNIT",
    cta: "Hacer una consulta",
    pitch:
      "Un estudio contable vende confianza. Una web sobria, con servicios claros y un canal directo, transmite orden antes de la primera reunión.",
    features: [
      "Servicios explicados: IVA, IRE, IRP, liquidación de sueldos",
      "Calendario de vencimientos para clientes",
      "Formulario de consulta que llega a WhatsApp",
      "Equipo y matrículas profesionales",
    ],
    look: {
      bg: "#F3F4F7",
      surface: "#FFFFFF",
      ink: "#1B2440",
      accent: "#1B2440",
      accentInk: "#FFFFFF",
      font: "Georgia, 'Times New Roman', serif",
      radius: "0.4em",
    },
  },
  {
    slug: "inmobiliaria",
    label: "Inmobiliaria",
    business: "Inmobiliaria Tekoha",
    city: "Luque",
    hero: "Encuentre su casa o su lote",
    cta: "Ver propiedades",
    pitch:
      "Quien busca casa o terreno mira fotos, precio y ubicación antes de escribir. Una web con todas sus propiedades responde esas preguntas y le manda consultas listas para visitar.",
    features: [
      "Propiedades con fotos, precio y ubicación en el mapa",
      "Filtros por ciudad, tipo de propiedad y precio",
      "Consulta por WhatsApp con la propiedad ya elegida",
      "Financiación y requisitos explicados en simple",
    ],
    look: {
      bg: "#F4F1EA",
      surface: "#FFFFFF",
      ink: "#1E2A3A",
      accent: "#B4461B",
      accentInk: "#FFFFFF",
      font: "var(--font-body)",
      radius: "0.9em",
    },
  },
  {
    slug: "estetica",
    label: "Estética",
    business: "Estética Yvoty",
    city: "Villa Elisa",
    hero: "Reserve su turno de belleza",
    cta: "Reservar turno",
    pitch:
      "Las clientas eligen por resultados. Una galería de antes y después y un botón para reservar convierten a quien llega desde Instagram.",
    features: [
      "Servicios con duración y, si quiere, precios",
      "Reservas por WhatsApp con el servicio elegido",
      "Galería de antes y después",
      "Enlace directo a su Instagram",
    ],
    look: {
      bg: "#FBEFEF",
      surface: "#FFFFFF",
      ink: "#4A2C34",
      accent: "#B04D72",
      accentInk: "#FFFFFF",
      font: "var(--font-body)",
      radius: "2.2em",
    },
  },
];

export function getRubro(slug: string): Rubro | undefined {
  return RUBROS.find((r) => r.slug === slug);
}
