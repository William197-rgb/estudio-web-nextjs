// Contact details. If WHATSAPP_NUMBER is ever emptied, the contact form explains that the
// number is missing instead of opening a dead link.
// Format: country code + number, digits only, e.g. "595981123456".
export const WHATSAPP_NUMBER = "595986639005";
export const PHONE_DISPLAY = "0986 639 005";

export const OWNER = "William Acosta";

// Public address of the site, used for canonical URLs, the sitemap and social previews.
export const SITE_URL = "https://william-acosta-web.web-estudio.workers.dev";

export const CITIES = [
  "Asunción",
  "Luque",
  "San Lorenzo",
  "Capiatá",
  "Lambaré",
  "Fernando de la Mora",
  "Limpio",
  "Ñemby",
  "Mariano Roque Alonso",
  "Villa Elisa",
  "Itauguá",
  "San Antonio",
  "Areguá",
  "Itá",
  "Ypané",
  "Guarambaré",
  "J. Augusto Saldívar",
  "Ypacaraí",
  "Villeta",
];

export function whatsappHref(text: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
