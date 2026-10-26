# Estudio de diseño web · William Acosta

Sitio de mi estudio de páginas web para negocios de Paraguay, hecho con **Next.js 16, React 19 y TypeScript**, exportado como sitio estático y publicado en **Cloudflare Workers**.

**En vivo:** https://william-acosta-web.web-estudio.workers.dev

*English: the website of my web design studio for small businesses in Paraguay. Next.js 16 static export, React 19, TypeScript, GSAP animations and an embedded Remotion video player, deployed on Cloudflare Workers.*

## Qué tiene

- **Portada animada con GSAP**: letrero de neón y reloj en vivo con la hora de Paraguay.
- **Animación ligada al scroll** (ScrollTrigger) que muestra cómo se reconstruye una web caída, pieza por pieza.
- **Ejemplos por rubro** (`/rubros/[rubro]`) con su propia maqueta y transiciones entre páginas.
- **Video promocional personalizable** hecho con Remotion y reproducido dentro de la web con `@remotion/player`: escribís el nombre de un negocio y el video lo usa.
- **Páginas por ciudad** (`/diseno-web/[ciudad]`) y sección de precios, generadas desde datos en `src/data/`.
- **SEO técnico**: `sitemap.ts`, `robots.ts`, datos estructurados JSON-LD y metadatos por página.

## Calidad

Google Lighthouse en celular: **100 en accesibilidad, 100 en buenas prácticas y 100 en SEO**.

## Estructura

```
src/
  app/          rutas (portada, /rubros/[rubro], /diseno-web/[ciudad]), sitemap y robots
  components/   secciones de la página (Hero, Rebuild, Pricing, AdStudio, ...)
  remotion/     composición del video promocional
  data/         contenido: rubros, ciudades, precios, datos de contacto
  lib/gsap.ts   registro de plugins de GSAP
scripts/flatten-segments.mjs   ajuste posterior al build para la exportación estática
worker.js       worker de Cloudflare que sirve los archivos estáticos
```

## Uso

```bash
npm install
npm run dev       # desarrollo en http://localhost:3000
npm run build     # exportación estática en ./out
npm run deploy    # build + wrangler deploy a Cloudflare
```

El número de WhatsApp y la URL del sitio se configuran en `src/data/site.ts`.
