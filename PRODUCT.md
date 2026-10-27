# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and decision-makers in Paraguay who need a website and decide from their phone, usually over WhatsApp:

- Local businesses in Asunción and Central (clinics, vets, real estate, accountants, shops), many with no website or with the free Google page (negocio.site) that stopped working. This is the original core audience.
- Businesses anywhere else in Paraguay; the work is done remotely.
- Independent professionals (lawyers, doctors, architects, accountants) who want a personal site.
- Instagram-first brands that sell through Instagram and WhatsApp and want their own catalogue or shop.
- Medium-sized companies with a team or several branches that need a larger site.

## Product Purpose

A one-person web design studio (William Acosta) that builds fast, phone-first websites with WhatsApp contact and Google visibility, so a business keeps answering customers after it closes. Success is a visitor sending a WhatsApp message asking for a proposal.

## Positioning

"Su local cierra. Su web sigue atendiendo." The studio sells the website as the part of the business that keeps working after hours. It shows its own quality with real Lighthouse measurements of this same site, and lets the visitor watch a promo video built live with their business name.

## Operating Context

- Visitors arrive from Google searches (per city and per trade), from WhatsApp shares and from direct outreach.
- Contact happens through WhatsApp (wa.me link with a prefilled message). Payment is by bank transfer after the site is published and approved.
- The site is a Next.js 16 static export deployed on Cloudflare Workers (`npm run deploy`); `worker.js` serves the Search Console verification file.

## Capabilities and Constraints

- Plans and prices in `src/data/precios.ts` (Gs., IVA incluido, delivery in 7 to 14 days, no monthly hosting fee, optional domain in the client's name). Kept in sync with `prospectos-web-central/tabla_precios.md`.
- Trade example pages `/rubros/[slug]` and city landing pages `/diseno-web/[ciudad]` exist for search; their content lives in `src/data/`.
- A Remotion Player renders a personalised promo video with the business name the visitor types.
- Open decision: there is no published plan or price for medium-sized companies, professionals' personal sites or Instagram shops beyond the four listed plans. Do not invent one; route those visitors to a WhatsApp conversation.

## Brand Commitments

- Main line: "Su local cierra. Su web sigue atendiendo."
- Voice: Paraguayan Spanish, addressing the visitor as "usted"; plain, concrete, no jargon.
- Owner name: William Acosta. WhatsApp 0986 639 005.
- The four plans, their prices and terms stay as published.
- The personalised promo video stays.
- Standing visual preference (chosen 2026-10-27 over the dealt directions): the category standard for a web studio, played straight at full craft. Quality bar: Stripe for finish (type, space, restraint, subtle motion) and Framer for structure (large product mockups, clear benefits and pricing).

## Evidence on Hand

- Real Lighthouse scores of this site in `src/data/lighthouse.json`.
- Example businesses on the trade pages are fictional and must stay labelled "Ejemplo".
- No published client work, testimonials, client logos, photos of the owner, or business statistics exist. Never fabricate them.

## Product Principles

1. Every page ends in one clear WhatsApp action.
2. Show, do not claim: measured scores, working examples and the live video instead of adjectives.
3. Phone first: the site must be as fast and clear on a mid-range phone on mobile data as on desktop.
4. Honest about scale: one person, real prices, no invented proof.

## Accessibility & Inclusion

Keep the current standard: Lighthouse accessibility 100, keyboard operable, reduced-motion respected.
