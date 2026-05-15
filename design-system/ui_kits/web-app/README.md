# Citelines · Web Application UI Kit

A high-fidelity recreation of the **Citelines research application** — the
authenticated product where a lawyer searches citations, reads opinions, and
manages folders of saved work.

> **Source note.** No codebase or Figma was attached. The screens here are
> invented from the brief and the design system foundations. They demonstrate
> the design _vocabulary_ Citelines should use, not the real product.

## Screens included

- `index.html` — the live click-thru. Boots into the **search dashboard**;
  results, case reader, and folders are reachable from the sidebar.
- `Sidebar.jsx` — left nav, folders, recent searches.
- `Topbar.jsx` — header with citation search, user menu.
- `SearchDashboard.jsx` — empty/landing state with quick paths in.
- `ResultsList.jsx` — case results with treatment badges, jurisdictions, year.
- `CaseReader.jsx` — opinion document reader with marginalia citations panel.
- `FolderView.jsx` — a saved-research folder.
- `components/` — `Button.jsx`, `Badge.jsx`, `Chip.jsx`, `Field.jsx`, `Card.jsx`.

## How to run

Open `index.html`. React + Babel are loaded via CDN; tokens come from
`../../colors_and_type.css`.
