# Citelines

A study companion to the Bluebook's blue pages, built for first-year law students.

Citelines walks 1Ls through the citation rules they actually use day-to-day —
citation sentences, signals, parentheticals, full case citations, short forms,
North Carolina authorities, and Table 6 abbreviations — with patient lessons,
topic-by-topic practice, and three full 20-question assessments.

## Pages

- [`index.html`](./index.html) — Landing page with quick links to the three sections.
- [`learn.html`](./learn.html) — Step-by-step lessons covering each Citeline rule, with inline practice checkpoints.
- [`practice.html`](./practice.html) — Topic picker with several drill problems per rule and instant feedback.
- [`assessment.html`](./assessment.html) — Three 20-question mixed-rule tests with per-question walk-through after submission.

## Citeline rules covered

| Rule | Topic |
| ---- | ----- |
| B1.1 | Citation sentences and clauses |
| B1.2 | Introductory signals |
| B1.3 | Explanatory parentheticals |
| B5.3 | Modifying quotations and citations for clarity |
| B10.1 | Full case citation |
| B10.1.1 | Case names |
| B10.1.2 | Reporters and pinpoint citations |
| B10.1.3 | Court and year of decision |
| B10.2 | Short-form citation |
| T1 | North Carolina (`N.C.`, `N.C. Ct. App.`, `N.C. Gen. Stat.`) |
| T6 | Case-name and institutional-author abbreviations |

## Design system

Visual styling is driven by the Citelines design system in `./design-system/`.
The shared site stylesheet (`site.css`) imports `design-system/colors_and_type.css`
as the single source of truth for color, type, and spacing tokens.

## Running locally

It's a static site — no build step. Open `index.html` in a browser.

To host with GitHub Pages: in **Settings → Pages**, set the source to the
`main` branch and the root directory. The site will be served at
`https://ejf1000.github.io/citelines/`.

## License

Educational use. Always confirm citation rules against the current edition of
*The Bluebook: A Uniform System of Citation*.
