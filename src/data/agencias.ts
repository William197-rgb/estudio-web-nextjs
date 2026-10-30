// White-label offer for agencies abroad. Prices are the Fiverr packages of the general gig
// (prospectos-web-central/tabla_precios.md, section "Agencias del exterior"); keep both in sync.
export const FIVERR_PROFILE = "https://www.fiverr.com/william_acosta1";
export const FIVERR_GIG = "https://www.fiverr.com/william_acosta1/build-a-fast-mobile-first-website-for-your-small-business";

export const AGENCY_PLANS = [
  {
    name: "Página única",
    price: "USD 100",
    days: "5 días",
    includes: ["Servicios, fotos y ubicación del cliente", "Botón de WhatsApp o formulario", "Lista para el celular y para Google"],
  },
  {
    name: "Sitio de hasta 5 secciones",
    price: "USD 200",
    days: "7 días",
    includes: ["Galería y formulario o pedidos por WhatsApp", "Textos ordenados para buscadores", "Dos rondas de ajustes"],
    featured: true,
  },
  {
    name: "Catálogo o tienda",
    price: "USD 380",
    days: "12 días",
    includes: ["Productos o propiedades con filtros", "Carrito con pedido armado a WhatsApp", "Ficha propia para cada ítem"],
  },
];

// Cities where the agencies we write to are; the live preview computes delivery dates in their time.
export const AGENCY_CITIES = [
  { name: "Madrid", tz: "Europe/Madrid" },
  { name: "Barcelona", tz: "Europe/Madrid" },
  { name: "Ciudad de México", tz: "America/Mexico_City" },
  { name: "Bogotá", tz: "America/Bogota" },
  { name: "Santiago de Chile", tz: "America/Santiago" },
  { name: "Lima", tz: "America/Lima" },
  { name: "Buenos Aires", tz: "America/Argentina/Buenos_Aires" },
  { name: "Miami", tz: "America/New_York" },
  { name: "Los Ángeles", tz: "America/Los_Angeles" },
];

export const AGENCY_FAQ = [
  {
    q: "¿Su cliente se entera de que la hice yo?",
    a: "No. La web no lleva mi nombre en ningún lado, no hablo con su cliente salvo que ustedes me lo pidan, y la entrego a nombre de la agencia o del cliente.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Por Fiverr. Ustedes pagan al hacer el pedido y Fiverr me libera el pago recién cuando aprueban la entrega, así nadie arriesga. Para varias webs por mes armamos una oferta personalizada ahí mismo.",
  },
  {
    q: "¿Dónde queda publicada?",
    a: "Donde ustedes digan: en el alojamiento de la agencia o del cliente, o en Cloudflare o Netlify sin costo mensual. El dominio siempre queda a nombre de su cliente.",
  },
  {
    q: "¿En qué idiomas?",
    a: "Español e inglés. También armo webs bilingües para negocios hispanos en Estados Unidos.",
  },
  {
    q: "¿Y los cambios después de la entrega?",
    a: "La ronda de ajustes va incluida. Los cambios que pida su cliente más adelante se cotizan aparte, rápido y por escrito.",
  },
];
