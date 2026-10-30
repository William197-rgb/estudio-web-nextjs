---
name: William Acosta, diseño web
description: A one-person web studio's site that shows real example sites on real devices before any adjective.
colors:
  paper: "#ffffff"
  tint: "#f4f6f5"
  mist: "#e8edeb"
  ink: "#0e1a16"
  ink-muted: "#44524d"
  accent: "#0a7d55"
  accent-hover: "#086a48"
  accent-soft: "#e3f2ec"
  night: "#0e1a16"
  night-raised: "#172720"
  night-line: "#2a3b34"
  on-night: "#eef3f1"
  on-night-muted: "#a7b7b0"
  on-night-accent: "#5fd3a4"
  dead-signal: "#ff6b5b"
  field-stroke: "#c9d3cf"
  field-stroke-hover: "#9fb0a9"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 0.9rem + 5.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.5rem + 2.6vw, 3.7rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2.1rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 0.98rem + 0.2vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(0.88rem, 0.85rem + 0.15vw, 0.94rem)"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Schibsted Grotesk, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 0.98rem + 0.2vw, 1.1rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.005em"
rounded:
  mark: "8px"
  field: "12px"
  frame: "14px"
  chat: "22px"
  phone: "28px"
  player: "34px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4.5vw, 64px)"
  container: "1240px"
  section: "clamp(80px, 11vw, 160px)"
  head-gap: "clamp(40px, 5vw, 72px)"
  stack: "20px"
  card-pad: "28px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1.5em"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.75em 1.5em"
    height: "52px"
  button-header:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5em 1.15em"
    height: "44px"
  button-disabled:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink-muted}"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.8em 1em"
    height: "52px"
  price-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "28px 24px 30px"
  price-card-featured:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.frame}"
    padding: "28px 24px 30px"
  badge:
    backgroundColor: "{colors.on-night-accent}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0.25em 0.75em"
  device-frame:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.frame}"
  panel-tint:
    backgroundColor: "{colors.tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    padding: "28px"
  process-dot:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    size: "45px"
  process-dot-on:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
---

# Design System: William Acosta, diseño web

## Overview

**Creative North Star: "The Product on the Counter"**

The category standard for a web studio, played straight: Stripe's finish, Framer's structure. The visitor sees the product (real example sites inside laptop, phone and browser frames) before reading a single claim, and the studio's own surface steps back so those frames carry the color. The ground is white, one tone step marks alternating bands, a single deep-green ink family sets both the text and the dark bands, and one accent green is kept for actions and progress.

Density is calm and generous: sections breathe on 80 to 160px of vertical padding, headings are heavy and tight, body text is regular and readable. Depth is reserved for things that float in the real world (devices, the chat preview); everything else is flat color fields with soft 14px corners. Motion is one hero entrance, one reveal per section, the pinned rebuild story, the process line drawing and the score counters; nothing loops for decoration.

The build refuses the old night-and-neon look and any costume world: no gradients, no rules or dividers, no eyebrow labels over headings, no monospace.

**Key Characteristics:**
- White ground, one tint band (#f4f6f5), deep-green ink and dark bands, one action green.
- One family, Schibsted Grotesk: 800 and tight for display, 400 for text, 700 for actions.
- Pill buttons; 14px frames; flat bands; shadows only under floating devices.
- Example sites inside frames wear their own brands; the studio never borrows them.

## Colors

A near-monochrome green-black system on white, with one saturated green that only ever means "do this" or "you are here".

### Primary
- **Counter Green** (accent): every action. Primary and header buttons, the arrow back link, the selection highlight, the focus outline on light grounds, the process line fill and step dots, and the price checkmarks. Hovered buttons deepen to **Pressed Green** (accent-hover).
- **Halo Green** (accent-soft): only the 4px focus halo around text fields.

### Secondary
- **Night Mint** (on-night-accent): the accent's voice on dark grounds. Focus outlines inside night bands, the rebuild stage and the footer; the "Recomendado" badge; checkmarks in the featured price card.

### Neutral
- **Paper** (paper): page ground, header ground, price cards and the "need something bigger" panel on the tint band, field fill.
- **Tint** (tint): alternating section bands, device title bars, pager and city panels, the empty preview behind example cards.
- **Mist** (mist): ghost button stroke, device dots, the unfilled process track, disabled button fill.
- **Forest Ink** (ink): all headings and body text on light grounds, the wordmark tile, the phone body, the ad player bezel.
- **Moss Gray** (ink-muted): ledes, secondary copy, captions, nav links at rest, field hints.
- **Night** (night): dark bands (Medido, rebuild stage, footer) and the featured price card. Same value as Forest Ink by design: the dark bands are the ink itself.
- **Night Raised** (night-raised) and **Night Line** (night-line): the browser frame and its bar inside the dark rebuild stage; step-number rings and gauge tracks.
- **On Night** (on-night) and **On Night Muted** (on-night-muted): headings and secondary text on night grounds.
- **Field Stroke** (field-stroke) and **Field Stroke Hover** (field-stroke-hover): the 1.5px border of inputs, selects and textareas.

### Signal
- **Dead Link Coral** (dead-signal): only the broken-URL state in the rebuild story. Not an error color for the studio's own UI.

### Named Rules
**The Action Green Rule.** Counter Green marks actions and progress: buttons, links, process dots and the line, price checkmarks. Plain text, headings and decoration never take it.

**The Ink Is the Night Rule.** Dark bands are the ink color (#0e1a16), not a separate dark palette. A new dark surface uses Night, Night Raised and Night Line, never black or a blue-black.

**The Borrowed Brands Rule.** Colors inside example mocks, the promo video's example scenes, the WhatsApp chat preview (#075e54 header, #efe7de wall, #d9fdd3 bubble), the WhatsApp green (#25d366) and the Lighthouse gauge colors are quotations of other systems. They stay inside their frames and are never promoted to studio tokens.

## Typography

**Display Font:** Schibsted Grotesk (with Segoe UI, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk (same family)

**Character:** One sturdy news grotesk does every job. At 800 with tight negative tracking it reads as confident and finished; at 400 it is plain and friendly, which suits "usted" copy for business owners.

Bricolage Grotesque and DM Sans are loaded only as faces for the example sites and the promo video, so those read as other businesses' brands. They are content, not studio type.

### Hierarchy
- **Display** (800, up to 6rem, line-height 0.98, -0.04em): the hero headline only, one sentence per line, across the full container width. The footer name uses the same treatment (line-height 0.95).
- **Headline** (800, up to 3.7rem, 1.02, -0.035em): section h2s, rubro and city page h1s. Balanced wrapping.
- **Title** (800, up to 2.1rem, 1.15, -0.02em): process step titles, city subtitles.
- **Title Small** (800, up to 1.45rem, 1.15, -0.02em): card titles (rubro cards, price cards); bold pager and footer labels use this size at 700 with -0.015em.
- **Lede** (400, up to 1.45rem, 1.45): the paragraph under a heading, Moss Gray, 40 to 56ch.
- **Body** (400, up to 1.1rem, 1.6): running text, pretty wrapping, 46 to 70ch.
- **Label** (400, up to 0.94rem): captions, notes, field hints, meta lines.
- **Button** (700, body size, 1.1, -0.005em): all buttons.

Numbers that count (gauges, step numbers) use tabular figures.

### Named Rules
**The Heavy-Or-Regular Rule.** Headings are 800, actions and emphasis 700, nav 600, text 400. No light weights, no italics for emphasis, no uppercase, no letter-spaced labels.

**The No Eyebrow Rule.** A heading stands alone with its lede below it. Nothing small sits above a heading to introduce it.

## Layout

A single 1240px container with a fluid gutter (16 to 64px). Sections stack as full-bleed bands alternating Paper, Tint and Night, each padded 80 to 160px vertically; a section head (heading plus lede, max 780px, 20px gap) sits 40 to 72px above the content.

Grids are two-column asymmetric splits (0.8/1.2 in the hero, 0.85/1.15 in the rebuild, 1/0.9 in contact, 1/360px in the ad studio) that collapse to one column between 920 and 860px. Card grids run 3 columns for examples (2 under 960px, 1 under 560px) and 4 for prices (2 under 1060px, 1 under 560px). Gauges sit 4 across, 2 under 760px.

Responsive priorities are phone first: under 1180px the nav links hide and only the WhatsApp pill remains; under 520px it shortens to "WhatsApp". On phones the hero reorders to headline, lede, actions, devices, then the clock line, and the example frames get taller rather than shrinking their text.

Example mocks are em-based: one markup scales from a card thumbnail to a hero frame by setting a single size variable on the frame.

## Elevation & Depth

Flat by default. Depth comes from band color (Paper, Tint, Night) and from cards sitting one step lighter or darker than their band. Shadows exist only under objects that float in the real world: device frames, the ad player, the chat preview, and the browser in the rebuild stage. An example card is allowed to borrow the float shadow as hover feedback, because it is a clickable device preview.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 30px 60px -28px rgb(14 26 22 / 0.35), 0 8px 18px -10px rgb(14 26 22 / 0.18)`): phone frame, ad player, chat preview, example card on hover.
- **Float with edge** (Float plus `0 0 0 1px rgb(14 26 22 / 0.08)`): white laptop and hero mock frames, so a white screen keeps its edge on a white ground.
- **Night float** (`box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.55)`): the browser frame on the dark rebuild stage.

### Named Rules
**The Only Devices Float Rule.** If it is not a device, a chat or a clickable device preview, it has no shadow. Cards, panels, buttons and fields are flat.

## Shapes

Soft, consistent rounding with one exception: anything you press is a full pill. Frames, cards and panels share a 14px corner; fields are 12px; the chat preview 22px; the phone 28px with a 22px screen; the ad player 34px with a 9px ink bezel. Small marks (wordmark tile) are 8px; dots, step numbers and avatars are circles.

There are no borders as dividers and no rules between sections. Strokes appear only as control edges: the 2px ghost button stroke, the 1.5px field stroke, the 2 to 2.5px rings of numbered steps. Arrows and checkmarks are drawn from two CSS border sides rotated 45 degrees, not glyphs.

## Components

### Buttons
Confident pills that never shout beyond their color.
- **Shape:** full pill (999px), min-height 52px (44px in the header).
- **Primary:** Counter Green fill, white text, 700 weight, padding 0.75em 1.5em. The WhatsApp header button uses the same treatment, not WhatsApp's own green.
- **Ghost:** transparent with a 2px Mist stroke and inherited text color; the stroke turns Forest Ink on hover.
- **Arrow variant:** a drawn chevron after the label that slides 3px right on hover.
- **Hover / Focus / Active:** fill deepens to Pressed Green over 160ms; active nudges 1px down; focus is a 3px Counter Green outline at 3px offset (Night Mint on dark bands).
- **Disabled:** Mist fill, Moss Gray text, not-allowed cursor.

### Cards / Containers
- **Price card:** 14px corners, Paper on the Tint band, padding 28px 24px 30px, drawn checkmarks in Counter Green. The featured card inverts to Night with a Night Mint "Recomendado" pill badge.
- **Panels:** "need something bigger", rubro pager and city lists are 14px panels with 28px padding, one tone off their band.
- **Shadow Strategy:** none (see Elevation).

### Inputs / Fields
- **Style:** Paper fill, 1.5px Field Stroke, 12px corners, padding 0.8em 1em, min-height 52px, bold label above, Label-size hint below, accent caret.
- **Hover:** stroke darkens to Field Stroke Hover.
- **Focus:** stroke turns Counter Green with a 4px Halo Green outline at zero offset.

### Navigation
Sticky white header, 72px tall: wordmark (8px ink tile with "W", name, small descriptor), five or six text links at 600 weight (each audience has its own set: the business pages and /agencias) in Moss Gray that turn Forest Ink on hover, and the WhatsApp pill. Links hide under 1180px; the descriptor and "Escribir por" hide under 520px.

### Device Frames (signature)
Laptop: Paper body, 14px corners, Tint title bar with three Mist dots and a pill URL field, 16:9 screen. Phone: Forest Ink body with 7px bezel, 28px corners, overlapping the laptop's lower right. Both carry Float. Inside sits a live example mock in the example's own brand; the phone mock's status reads open or closed from Asunción time.

### Example Card
A device preview (4:4.2, 14px) above a Title Small heading and a Moss Gray line. On hover the preview lifts 6px with Float over 260ms and a drawn chevron fades in beside the heading.

### Process Timeline
A 3px Mist track with a Counter Green fill that draws on scroll; 45px circular dots with a 2.5px Counter Green ring that fill solid as each step becomes active.

### Score Gauges
Ring gauges on a Night band: 8px Night Line track, a colored arc in Lighthouse's own good/average/poor convention, and an 800-weight tabular number that counts up once.

## Do's and Don'ts

### Do:
- **Do** keep Counter Green (#0a7d55) for buttons, links, process progress and price checkmarks only.
- **Do** alternate Paper, Tint and Night bands for section rhythm instead of dividers.
- **Do** set headings at 800 with negative tracking (-0.02em to -0.04em) and text at 400.
- **Do** make every pressable control a 999px pill at least 44px tall.
- **Do** put product in frames: laptop, phone, browser and chat frames with the Float shadow.
- **Do** use Night Mint (#5fd3a4) for focus and accents on dark bands.
- **Do** respect reduced motion: transitions off, view transitions instant.

### Don't:
- **Don't** add gradients, neon, glows or any night-and-neon styling.
- **Don't** put an eyebrow or kicker label above a heading.
- **Don't** use monospace, uppercase labels or letter-spaced captions.
- **Don't** add shadows to cards, panels, buttons or fields; only devices, the chat preview and hovered example cards float.
- **Don't** draw rules or divider lines between content.
- **Don't** promote an example site's brand colors or fonts (Bricolage Grotesque, DM Sans, WhatsApp green) into the studio's own UI.
- **Don't** color plain text or headings with the accent green.
