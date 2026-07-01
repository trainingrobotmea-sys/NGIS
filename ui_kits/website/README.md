# NGIS Website — UI Kit

A high-fidelity, click-through recreation of the **NextGen International School**
marketing website, built entirely from the NGIS design system (tokens +
`components/core` primitives).

> **Note:** No production website or Figma was supplied for NGIS. These screens
> are a representative marketing site reasoned from the brand (logo, palette,
> academic tone), not a copy of an existing site. Treat layouts as on-brand
> reference, and replace copy/imagery with real content when available.

## Run
Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, and the
screen modules below.

## Screens & navigation
- **Home** (`HomeScreen.jsx`) — navy hero, proof stats, the four crest pillars,
  programme pathways, news, and a tour CTA.
- **Academics** (`AcademicsScreen.jsx`) — page header, interactive year-group
  filters, programme detail cards, curriculum highlights.
- **Admissions** (`AdmissionsScreen.jsx`) — five-step process, an interactive
  enquiry form (submits to a success Alert), key dates, and contact.

Navigate with the header nav or the in-page buttons; the **Apply** button jumps
to Admissions.

## Composition
- `Header.jsx` / `Footer.jsx` — shared navy chrome with the crest lockup.
- `Icon.jsx` — curated Lucide icon set (line, 2px, round) exposed as
  `window.Icon`. Substitution flagged in the root readme.
- All buttons, cards, badges, tags, inputs, selects, alerts, and stats come from
  `window.NGISDesignSystem_f6dc23` — the kit does not re-implement primitives.

Each `.jsx` registers its component on `window` (Babel files don't share scope).
