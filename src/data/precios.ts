// Starting prices, from prospectos-web-central/tabla_precios.md (list prices, IVA incluido).
// Keep both files in sync when prices change.
export type Plan = {
  name: string;
  from: string;
  days: string;
  includes: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Página única",
    from: "Gs. 1.200.000",
    days: "7 días",
    includes: [
      "Una página con sus servicios, fotos y ubicación",
      "Botón de WhatsApp a un toque",
      "Su ficha de Google al día",
    ],
  },
  {
    name: "Sitio completo",
    from: "Gs. 2.200.000",
    days: "7 días",
    includes: [
      "De 4 a 6 secciones y galería",
      "Formulario o pedidos por WhatsApp",
      "Textos pensados para aparecer en Google",
    ],
    featured: true,
  },
  {
    name: "Catálogo o inmobiliaria",
    from: "Gs. 3.000.000",
    days: "10 a 14 días",
    includes: [
      "Propiedades o productos con fotos y precio",
      "Filtros y una ficha por cada uno",
      "Consulta por WhatsApp con el ítem elegido",
    ],
  },
  {
    name: "Tienda con pedidos",
    from: "Gs. 3.500.000",
    days: "14 días",
    includes: [
      "Catálogo con carrito",
      "El pedido llega armado a su WhatsApp",
      "Delivery o retiro, a elección del cliente",
    ],
  },
];

export const PRICE_NOTES = [
  "Precios con IVA incluido y factura legal.",
  "Usted paga por transferencia cuando la web ya está publicada y aprobada.",
  "El alojamiento no tiene costo mensual. El dominio propio (.com.py o .com) es opcional y queda a su nombre.",
];
