# Citelines · Design System

Citelines is a legal citation website. The brand pairs the **gravity of legal
publishing** (printed reports, marginalia, footnotes, ruled paper) with a
**warm, plainspoken, librarian-like welcome** — a serious tool that treats
researchers as people, not subscribers.

The design system here gives any designer or agent the foundations to build
Citelines surfaces — marketing pages, the research app, decks, exports — that
all feel like the same product.

> **Source materials**
> No existing codebase, Figma file, or brand guide was attached when this
> system was created. Everything in this repo was synthesized from the brief:
>
> > _"Citelines, a legal citation website. Warm, friendly, and inviting,
> > with blue tones. Very easy to read with clear fonts and spacing. Not
> > cluttered."_
>
> If real assets exist (logo files, fonts, brand colors, screenshots),
> drop them in and we'll re-derive tokens to match.

---

## Index

| File / folder           | What it is                                              |
| ----------------------- | ------------------------------------------------------- |
| `README.md`             | This file — brand context, content, visual foundations. |
| `SKILL.md`              | Agent-Skill manifest. Read first when invoked as a skill. |
| `colors_and_type.css`   | Single source of truth for color + type + spacing tokens. |
| `fonts/`                | Webfont notes (Hanken Grotesk / JetBrains Mono). |
| `assets/`               | Logos, marks, ruled-paper pattern.                      |
| `preview/`              | Cards rendered in the Design System tab.                |
| `ui_kits/web-app/`      | The research application — sidebar, document reader, search, results. |
| `ui_kits/marketing/`    | The public marketing site — hero, pricing, testimonials, footer. |

---

## Brand at a glance

- **Name** — Citelines. The mark is a `C` with a single horizontal "cite line"
  bisecting its counter, plus a small superscript dot (a footnote reference).
- **Tone** — Warm, plain, precise. Less "BigLaw partner", more "a knowledgeable
  reference librarian who is glad you asked".
- **Promise** — Every case, statute, and citation in context, with the lineage
  visible. _"Follow every line of the law."_

---

## Content Fundamentals

The Citelines voice is **professional but not stiff**. Plain words first;
legalese only where precision demands it. Treat the reader as a smart adult
who is short on time.

**Casing.** Sentence case everywhere — buttons, page titles, nav, settings.
Reserve Title Case for proper nouns and case names. ALL CAPS is for tiny
labels only (eyebrows, meta tags ≤ 12px), never for emphasis.

**Person.** Address the reader as **"you"**. We refer to ourselves as
**"Citelines"** in formal copy and **"we"** in support / conversational copy.
Never "the user".

**Sentence length.** Short. Two to three lines max in body copy. If a sentence
runs longer than that, break it.

**Voice samples.**

| Where        | Bad                                          | Good                                              |
| ------------ | -------------------------------------------- | ------------------------------------------------- |
| Hero         | "Revolutionize your legal research workflow." | "Find the cases that matter. Read why they do."   |
| Empty state  | "No results found."                           | "Nothing for that query yet. Try a broader term, or jump to a citation directly." |
| Button       | "Submit Query"                                | "Search"                                          |
| Pricing      | "Enterprise-grade plans."                     | "One price. All jurisdictions. Cancel any month." |
| Error        | "Authentication failure."                     | "We couldn't sign you in. Check the email and try again." |
| Tooltip      | "View additional information"                 | "See how this case has been treated since."       |

**Emoji.** **No.** Emoji never appears in product UI, marketing, or copy.
Citation marks (¶, §, †, ¹), small dots, and short rules carry the same
visual job in a way that fits the brand.

**Citation styling in prose.** Real citations are set in `var(--font-mono)`,
weight 500, ink-blue (`--ink-700`). E.g. `Brown v. Board of Education, 347 U.S. 483 (1954)`
— the case name in italic display serif, the rest in mono.

**Numbers and dates.** "1954" not "'54". "March 14, 2024" not "3/14/24" in
prose; the short form is fine in dense table cells.

---

## Visual Foundations

The look is **warm document**, not "tech SaaS". Imagine a well-lit reading
room: cream paper, ink-blue type, brass accents, generous margins.

### Colors

- **Primary ink** — `--ink-600` `#214b7c`. A deep, slightly-warm blue. Used
  for primary actions, links, headers on cream.
- **Paper** — `--paper-50` `#fbf8f3`. The canvas. Never pure white. White
  (`#ffffff`) appears only on cards floating over paper.
- **Warm slate** — neutrals are tinted warm; pure gray is forbidden.
- **Accents** — amber (annotations, "starred"), moss (affirmed / good
  standing), coral (overruled / destructive). Used in small doses — a chip,
  a dot, a left-rule on a quote. Never as a fill across large areas.
- **Imagery vibe** — warm, slightly desaturated, soft contrast. Black-and-white
  photography is welcome (it reads as archival). No cool/blue-tinted stock.

### Type

- Display + Body: **Hanken Grotesk** (humanist sans). One family does it all
  — hierarchy comes from weight (700 for display, 600 for subheads, 400–500
  for body), size, and tight letter-spacing on big sizes. Italics are used
  sparingly for case names and pull quotes.
- Mono: **JetBrains Mono**. Citation strings, statute refs, code.
- One-family by design: clarity over contrast. Easy to read, calm to scan.

### Spacing

8px grid. We err generous — the brief calls for "not cluttered". Default page
gutters are 32–64px; section spacing is 64–96px. Card padding is 24px
(compact) or 32px (default). **Lists breathe** — 12px between rows of body
text, 16px between blocks.

### Backgrounds

- **Paper-50** is the default canvas.
- **Ink-700** is for inverted hero blocks and the footer.
- The optional **ruled-paper pattern** (`assets/pattern-rules.svg`) is used
  sparingly — as a watermark behind hero copy, or as the background of a
  blockquote / annotation panel. Never tiled across a whole page.
- **No gradients** as primary surfaces. A very subtle top-to-bottom warming
  (paper-50 → paper-100) is allowed on long pages.
- **No glass / blur.** Citelines is a document brand, not a frosted-glass one.

### Borders, radii, cards

- Borders are **hairline** by default — 1px in `--border-hairline` (a warm
  cream-shadow). Stronger borders only on focus/active states.
- Radii are **modest**: 8px for buttons & inputs, 12px for cards, 20px for
  hero panels, 2–4px for chips and tags.
- A card is **white surface + hairline border + tiny warm shadow**, not a
  big drop-shadow. Pressed/hovered cards darken the border, not the fill.

### Shadows

Warm-toned, low-spread. The reference: a sheet of paper resting on a desk,
not a Material Design card hovering in midair. See `--shadow-xs/sm/md/lg`.

### Motion

- Default duration: **200ms**. Long motions: **320ms**.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` — soft standard. For things that
  enter (toasts, panels), use the entrance curve `(0.16, 1, 0.3, 1)`.
- Hover: 200ms, ease-standard. **No bounce.** No springs. The brand is
  considered, not playful.
- Press: a 1–2px translateY-down + slight darkening of border. Never a
  scale-shrink — that reads as toy.

### Hover, focus, press

- **Hover** — color steps one rung darker (e.g. `--ink-600 → --ink-700`).
  Links gain a thicker underline (`text-decoration-thickness: 2px`).
- **Focus** — `box-shadow: var(--ring-focus)` (3px ink-500 @ 25%). Always
  visible. Never `outline: none` without a replacement.
- **Press** — fill darkens one more rung, border darkens, translateY 1px.
- **Disabled** — opacity 0.5, no pointer events, no hover.

### Transparency & blur

Used **sparingly**. Acceptable: a 92%-opaque paper-50 sticky header over
scrolling content. Not acceptable: glass nav, frosted side panels, blurred
backgrounds.

### Layout rules

- **Reading width** is a primary constraint: long-form text caps at ~68ch
  (~640px); even product pages keep main columns ≤ 1100px.
- Sidebars are calm and quiet — `--bg-sunken` (paper-100), no shadow.
- Footers are dark (`--bg-ink`) with light type — a heavy "publisher's
  colophon" feel.

### Citation-specific signals

Citelines has a tiny vocabulary of "treatment" colors that show up across
case lists, headers, and badges:

- **Affirmed / good standing** — moss `#4a7c59` (`--treat-affirmed`)
- **Questioned / criticized** — amber `#c98b3c` (`--treat-questioned`)
- **Overruled** — coral `#c8553d` (`--treat-overruled`)
- **Cited** — ink-500 (the default)

Always paired with a label, never color-alone.

---

## Iconography

Citelines uses **[Lucide](https://lucide.dev)** as its icon library
(`lucide-react` in code, or the CDN sprite for prototypes).

Why Lucide:

- Open license, stable, very wide coverage.
- 1.5px stroke — calm, document-feeling weight that pairs with both
  Hanken Grotesk without fighting it.
- Outline-only — no filled glyphs, which keeps the visual rhythm consistent.

**Rules.**

- **Stroke 1.5px.** Don't override.
- **Size 20px** for inline UI icons (next to a label). **16px** for dense
  table cells, **24px** for standalone affordances (buttons, empty states).
- **Color** matches the surrounding text by default (`currentColor`). On
  brand surfaces, use `--fg-2`; on dark surfaces, `--fg-on-ink`.
- **Never use emoji** in product. **Never use Unicode characters as icons**
  except for the four typographic marks that are part of the brand:
  `§` (section), `¶` (paragraph), `†` (dagger / annotation), `¹` (footnote ref).

**Substitution note (FLAGGED).** No icon set was attached. Lucide was chosen
as a sensible default. If a real Citelines icon set exists, drop the SVGs
into `assets/icons/` and update the kit to point there.

---

## Iteration

This system is a v1 synthesized from a short brief. The places that most
need real input from you:

1. **Brand colors.** The blue is a designer pick — confirm or swap.
2. **Typography.** Hanken Grotesk + JetBrains Mono is a pick; swap if you
   have licensed brand fonts.
3. **Logo.** The wordmark + footnote-ref mark are concepts; replace with
   real artwork when available.
4. **Real product screens.** The UI kits show the design vocabulary, not
   the real Citelines product. Send screenshots / Figma / code and we'll
   re-derive.
