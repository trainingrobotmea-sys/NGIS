# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Two things live side by side here:

1. **The NGIS design system** — a generated design-system package (tokens, `components/core` primitives, `guidelines/` specimen cards, `ui_kits/website` reference kit, `templates/`) for **NextGen International School (NGIS)**, a Karachi-based Playgroup–Grade 5 school. See `readme.md` for the full brand voice/color/type/iconography spec and `SKILL.md` for the quick-reference summary — read those before producing any NGIS-branded UI or copy.
2. **`hostinger-deploy/`** — the actual **live production website**, deployed to Hostinger. It started as a copy of `ui_kits/website/` but has **diverged**: it has its own `assets/` (real photos, video, logos), its own `tokens/`, `styles.css`, and a real PHP backend (`send-enquiry.php`). Files with the same name in `ui_kits/website/` and `hostinger-deploy/` are NOT kept in sync — edit them independently and expect them to differ.

There is no build system, package.json, bundler, or test suite. Everything is static HTML + React loaded via Babel-standalone in the browser (see below).

## Running / previewing

- Open `index.html` at the repo root — it redirects to `ui_kits/website/`.
- Or open `ui_kits/website/index.html` / `hostinger-deploy/index.html` directly in a browser. Each page loads React, ReactDOM, and `@babel/standalone` from CDN, then compiles `.jsx` screen files client-side (`type="text/babel"` script tags) — no build step, just serve/open the static files.
- There is no dev server requirement; a plain static file server (or `file://`) works since everything compiles in-browser.

## Architecture

### Design system core (`tokens/`, `styles.css`, `components/core/`)
- `styles.css` is the single global entry point — a list of `@import`s pulling in `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`. Consumers link only this file.
- `tokens/colors.css` defines the full color ramp (red/navy/blue/green/gold scales + semantic aliases like `--brand`, `--surface-page`, `--text-body`) as CSS custom properties. `tokens/typography.css` and `tokens/spacing.css` follow the same pattern (type scale, spacing scale, radii, shadows, durations/easings).
- `components/core/*.jsx` are React primitives (Button, IconButton, Badge, Tag, Card, Stat, EyebrowLabel, Input, Select, Alert, Avatar), each with a matching `.d.ts` and some with a `.prompt.md`. They're compiled into `_ds_bundle.js` and exposed globally as `window.NGISDesignSystem_f6dc23` — consuming screens (in `ui_kits/website/`, `hostinger-deploy/`) do **not** re-implement primitives, they pull from this global.
- `_ds_manifest.json` and `_ds_bundle.js` are **generated artifacts** of the design-system tooling (component list, token list, guideline "cards", thumbnails) — don't hand-edit `_ds_bundle.js`; edit the source `components/core/*.jsx` / token files instead.
- `guidelines/*.html` are individual specimen cards (color, type, spacing, brand) referenced by the manifest, viewable as standalone HTML.

### Website screens (`ui_kits/website/` and `hostinger-deploy/`)
Both are React SPAs with the same structural pattern:
- `index.html` bootstraps a single `App` component holding `route` state (no router library) and renders `Header` + the active screen + `Footer`. Navigation is done by calling `onNav(routeName, anchor)`, which either sets React state (screen swap) or smooth-scrolls to an in-page anchor if already on that route.
- Each screen (`HomeScreen.jsx`, `AcademicsScreen.jsx`, `AdmissionsScreen.jsx`, `FacultyScreen.jsx`, `GalleryScreen.jsx`, `WhyNgisScreen.jsx`, `ContactScreen.jsx`, `Campuses.jsx`) is a standalone Babel-compiled file that registers itself on `window` (e.g. `window.HomeScreen = ...`) since these script-tag files don't share module scope.
- `Icon.jsx` exposes a curated Lucide icon subset as `window.Icon` — the system's icon substitute (NGIS has no official icon set; flagged in `readme.md`).
- `Decor.jsx` holds shared decorative elements.
- `responsive.css` carries breakpoint/responsive overrides on top of the token-driven `styles.css`.
- `hostinger-deploy/send-enquiry.php` is the live backend for the admissions enquiry form (`AdmissionsScreen.jsx`): receives JSON POST, validates/sanitizes fields (strips control chars to prevent header injection), and emails `admissions@ngis.com` via PHP `mail()`. Requires a real PHP/mail-configured host — won't work on static hosting.

### Templates (`templates/website-page/`)
Copy-to-start scaffold for new consuming projects: `WebsitePage.dc.html` is the entry point, `ds-base.js` loads the design system, `support.js` has supporting logic.

## Working conventions

- **Brand tone is strict**: serious/academic/professional, no emoji, no exclamation marks, sentence case except wordmark/tagline/eyebrow labels. Full rules in `readme.md` (Content Fundamentals + Visual Foundations sections) — consult it before writing copy or new UI.
- Colors/type/spacing must come from the CSS custom properties in `tokens/`, never hardcoded hex/px values, to stay consistent with the generated `_ds_manifest.json` token list.
- Icons: Lucide only, via `Icon.jsx`, line/outline style, `currentColor`. No emoji, no other icon sets.
- When editing a screen that exists in both `ui_kits/website/` and `hostinger-deploy/`, decide deliberately which (or both) to change — they are independent copies, not synced by tooling.
