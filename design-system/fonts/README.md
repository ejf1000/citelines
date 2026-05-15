# Fonts

Citelines uses an **all-sans** type system, loaded from Google Fonts.
`colors_and_type.css` `@import`s the families from the Google Fonts CDN.

| Role            | Family              | Why                                              |
| --------------- | ------------------- | ------------------------------------------------ |
| Display + Body  | **Hanken Grotesk**  | Humanist sans. Warm, very legible at small sizes, scales well to big display weights at 700/800. |
| Mono            | **JetBrains Mono**  | Citation strings (`347 U.S. 483`), statute refs, code. |

Hierarchy is carried by weight, size, and tight letter-spacing — not by
mixing typefaces.

## To self-host

1. Download Hanken Grotesk and JetBrains Mono from <https://fonts.google.com>.
2. Drop them into this `fonts/` directory.
3. Replace the `@import` at the top of `colors_and_type.css` with `@font-face`
   blocks pointing at the local files.

## Substitution note (FLAGGED)

These families were chosen by the designer based on the brief. They are not
pulled from an existing Citelines brand spec. If real brand fonts exist,
drop them in `fonts/` and update the CSS variables.
