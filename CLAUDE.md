# Citelines Workspace — Persistent Context

This workspace contains the **Citelines Design System**, which should be used
whenever you create HTML, prototypes, mocks, slides, or any visual artifact
for this project.

## Design system location

`./design-system/`

## How to use it

**Always read these files first** before producing any visual output for Citelines:

1. `./design-system/SKILL.md` — short overview and substitution flags
2. `./design-system/README.md` — full brand voice, content fundamentals, visual foundations, iconography rules
3. `./design-system/colors_and_type.css` — single source of truth for color, type, and spacing tokens. **Import this in every HTML file you produce.**

## Key references

- `./design-system/assets/` — logos (mark, wordmark light/dark), ruled-paper pattern SVG
- `./design-system/preview/` — small specimen cards showing tokens in use
- `./design-system/ui_kits/web-app/` — the research app pattern (sidebar, search, results, case reader, folders)
- `./design-system/ui_kits/marketing/` — the public marketing site pattern (hero, pricing, testimonials, footer)

## Brand summary (for quick recall)

- **What** — Citelines, a legal citation website
- **Tone** — Warm, plain, precise. "Knowledgeable reference librarian," not "BigLaw partner"
- **Visual feel** — Gravity of legal publishing (printed reports, marginalia, ruled paper) + warm welcome (blue tones, warm cream paper)
- **Casing** — Sentence case everywhere except proper nouns and case names. ALL CAPS only for tiny eyebrow labels ≤ 12px
- **Fonts** — Hanken Grotesk + JetBrains Mono via Google Fonts (flagged substitution — swap if real fonts exist)
- **Icons** — Lucide (flagged substitution)
- **Colors** — Blue palette + warm-cream paper (flagged substitution — designer picks, not from a real spec)

## Workflow

When the user asks for HTML designs, mocks, prototypes, decks, or any
Citelines visual:

1. Read `SKILL.md` and `README.md` from `./design-system/`
2. Link or inline `./design-system/colors_and_type.css` in your output
3. Reuse patterns from `ui_kits/` when applicable
4. Flag any of the documented substitutions when relevant
