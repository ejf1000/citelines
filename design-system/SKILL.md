---
name: citelines-design
description: Use this skill to generate well-branded interfaces and assets for Citelines, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file in this skill first — it defines the brand voice,
content fundamentals, visual foundations, iconography rules, and an index of
the other files available here.

Key files:

- `colors_and_type.css` — all color and type tokens. Import this anywhere.
- `assets/` — logos and the ruled-paper pattern.
- `ui_kits/web-app/` — the research application: sidebar, search, results,
  case reader, folders. JSX components, click-thru via `index.html`.
- `ui_kits/marketing/` — the public marketing site (single-page HTML).
- `preview/` — small specimen cards illustrating individual tokens.

If you're creating visual artifacts (slides, mocks, throwaway prototypes,
landing-page variations, decks), copy assets out and write static HTML files
for the user to view. The token CSS file is the source of truth — import it.

If you're working on production code, you can copy the assets and read the
rules in `README.md` to design with this brand correctly.

If the user invokes this skill with no other guidance, ask them what they
want to build, ask 4–10 focused questions about audience / fidelity /
variations, and then act as an expert designer who outputs HTML artifacts
or production code, depending on the need.

**Flagged substitutions** (always tell the user about these when they're
relevant):

- The blue palette and warm-cream paper colors are designer picks from a
  short brief, not lifted from a real brand spec.
- Fonts are Hanken Grotesk + JetBrains Mono via Google Fonts (all-sans
  system). If real Citelines fonts exist, swap them.
- Icon set is Lucide. If a real icon set exists, swap.
