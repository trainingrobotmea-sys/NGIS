# NextGen International School (NGIS) — Design System

The official design system for **NextGen International School (NGIS)** —
**Pakistan's first ETM-powered school** (Playgroup to Grade 5, ages 3–11),
based in Karachi, whose mission per the crest is *"Transforming Education for
Better Tomorrow."* NGIS is a project of **Robotmea**, accredited by
**Robotron, South Korea**, and built on South Korean academic standards, a
STEAM-integrated curriculum aligned with the Pakistan National Curriculum
(NCP), and deep-rooted Islamic values. This system encodes the brand's voice, color, type, and
reusable UI so any team can produce on-brand academic materials: the school
website, prospectuses, admissions pages, newsletters, and presentations.

**Tone in one line:** serious, academic, and professional. Trustworthy and
established, never gimmicky or playful. No emoji, no jokes, no hype.

## Source material

This system was derived from the supplied assets:

- `assets/ngis-logo-full.jpeg` — the full NGIS crest + wordmark + tagline.
- `uploads/Prospectus.pdf` — the 14-page school prospectus.
- `uploads/Robotmea_ETM_Concept_Deck.pdf` — the ETM concept deck (standards
  stack, the One-Book/System Model, what ETM refuses to do, reimagined roles).
- `uploads/Grade Structures.xlsx` — the Playgroup–Grade 5 class structure with
  trilingual (English / Korean / Arabic) class names and inspirations.
- `uploads/AFIE SOT*.jpg` — school slides detailing the Single Book "System
  Model", the G.A.M.E.S framework, cross-curricular STEAM linking, and the
  Discovery & Innovation Hub pedagogies (Bloom's, SOLO, UDL, PBIL, the 4 C's,
  NCC·SNC). Copied into `assets/` and used across the website + gallery.

Key facts encoded (corrected from the school): the school runs **Playgroup to
Grade 5 only** (not K–12); **only Arabic is compulsory** (Korean & Arabic also
appear as class *names*, not taught languages); STEAM is **NCP-aligned and
South-Korean benchmarked**; the **One-Book "System Model"** is central.

No codebase, live website, or Figma file was supplied. Visual foundations
(color, type, spacing) are **reasoned from the logo**; the prospectus is
image/vector-heavy (built in Illustrator) so its photography and exact layout
were not extracted — campus imagery in the UI kit remains a placeholder. Where
something is an inference rather than an observed brand rule, it is marked
*(inferred)*.

### The crest

A circular crest ringed in red, topped by a single red star, cradled by green
laurel branches. The disc is split into four quadrants, each a brand color with
a white pictogram:

| Quadrant | Color | Pictogram | Meaning |
|---|---|---|---|
| Top-left | Green | Graduate in a mortarboard | Growth & academic achievement |
| Top-right | Navy | Brain + circuitry marked "4.0" | Future-ready / Industry 4.0 learning |
| Bottom-left | Cerulean | Open book | Literacy & knowledge |
| Bottom-right | Gold | Hands holding a lit bulb | Innovation, ideas & care |

Below the crest: **NEXTGEN INTERNATIONAL SCHOOL** in heavy red caps, and the
tagline **TRANSFORMING EDUCATION FOR BETTER TOMORROW** in spaced black caps.

---

## CONTENT FUNDAMENTALS

How NGIS writes. The voice is that of a respected educational institution
addressing prospective families, current parents, and students.

- **Person & address.** Speak as *"we"* / *"our"* (the school) to *"you"* /
  *"your child"* (the family). Warm but formal: *"We welcome you to discover how
  our curriculum prepares your child for a changing world."*
- **Casing.** Sentence case for headings and body. RESERVE all-caps for the
  wordmark, the tagline, and short eyebrow labels (e.g. `ADMISSIONS`,
  `WHY NGIS`) — always with wide letter-spacing. Never set long text in caps.
- **Tone.** Measured, confident, evidence-led. Favor concrete outcomes
  ("small classes", "98% university placement") over adjectives ("amazing",
  "world-class"). Avoid exclamation marks. Avoid marketing hyperbole.
- **Vocabulary.** Academic and inclusive: *learners, faculty, curriculum,
  enquiry, holistic, character, scholarship, community, pathways, well-being.*
  Prefer British-international spelling conventions where natural
  (*enrolment, programme, enquiry*) *(inferred — confirm regional standard).*
- **Emoji.** Never. Not in product, marketing, or social.
- **Numbers & dates.** Spell out one–nine in prose; use figures for stats and
  ages ("Years 7–13", "ages 3–18"). Write dates as *14 September 2026*.
- **Calls to action.** Direct and respectful: "Book a tour", "Enquire now",
  "Apply for admission", "Download the prospectus". Title or sentence case,
  never shouty.
- **The vibe.** A school you trust your child with — disciplined, globally
  minded, forward-looking. Gravitas first, warmth second.

**Example headline + sub:**
> **A globally minded education, grounded in character.**
> From early years to graduation, NGIS prepares confident, curious learners for
> a world being reshaped by technology.

---

## VISUAL FOUNDATIONS

### Color
Five brand colors, sampled from the crest. **Red is primary** (the ring and
wordmark) and carries the main action / brand accent. **Navy** is the
authoritative anchor for headers, footers, and headings. Green, cerulean, and
gold are **secondary accents** — used sparingly to color-code sections,
faculties, or to enliven a stat or icon. They are never combined all at once in
a single component; pick one accent per surface.

- Red `#e41e27` · Navy `#183763` · Cerulean `#2394be` · Green `#4ab84b`
  · Gold `#fdcc0e`
- Neutrals are a **cool slate ramp** (`--ink-*`) that harmonizes with navy.
- Backgrounds are predominantly white or very light slate (`--surface-subtle`).
  Navy is used for full-bleed header/footer bands and the occasional feature
  section. Tinted accent backgrounds (`--*-50`) are reserved for small
  callouts, badges, and status messaging.

### Type
- **Spectral** (serif) for display and headings — gives editorial, academic
  gravitas. Set tight (`--leading-tight`, `--tracking-tight`) at large sizes.
- **Mulish** (sans) for all UI, labels, and body copy — clean and legible.
  Body runs at 16–18px / `--leading-normal`; long-form articles use
  `--leading-relaxed` on a ~720px measure.
- Eyebrows / kicker labels: Mulish, uppercase, `--tracking-wide`, small,
  often in red or navy.

### Backgrounds & imagery
- No gradients as decoration, **no purple/blue tech gradients**. Solid fields
  only: white, light slate, or navy.
- Imagery *(inferred — no photos supplied)*: warm, natural-light photography of
  real students, classrooms, and campus — candid over staged. Keep it bright
  and authentic; avoid heavy filters or duotones. Pair photos with a subtle
  navy gradient scrim only when text must sit over them.
- Decorative motif: the crest's quadrant grid and laurel can inform tasteful
  dividers; do not over-decorate. No repeating patterns or textures by default.

### Shape, borders, radius
- Restrained, institutional radii: 8px default (buttons/inputs/badges), 12px
  cards, 18px feature panels, pill only for tags. Nothing fully rounded except
  small pills/avatars.
- Borders are 1px `--border` (light slate). Section and accent rules use a 3px
  bar in a brand color (top or left).

### Shadows & elevation
- Soft, cool-tinted shadows (`--shadow-*`), never heavy or dark. Cards rest on
  `--shadow-sm`; raised/hover states lift to `--shadow-md`; modals/menus use
  `--shadow-lg`. Many surfaces use a 1px border *instead of* a shadow.

### Motion
- Subtle and quick. Fades and short transl(4–8px) rises on entrance; hover/lift
  on cards. `--dur-base` (220ms) with `--ease-standard`; entrances use
  `--ease-out`. **No bounces, no springy or playful motion** — it must feel
  composed. Respect `prefers-reduced-motion`.

### Interaction states
- **Hover:** primary buttons darken (red → `--red-600`); secondary/ghost gain a
  light slate or tinted fill; links underline. Cards lift one elevation step.
- **Active/press:** darken one more step (`--red-700`); no scale-down shrink.
- **Focus:** always-visible 3px cerulean focus ring (`--shadow-focus`) for
  accessibility — important for a school audience.
- **Disabled:** 45% opacity, no pointer.

### Transparency & blur
- Used sparingly: a translucent navy scrim over hero photos, and an optional
  blurred sticky header on scroll. Not a decorative device elsewhere.

---

## ICONOGRAPHY

No icon set was supplied with the brand. The crest's pictograms (mortarboard,
brain/circuit, open book, idea bulb, laurel, star) are **emblematic** — reserve
them for the logo and crest-derived art, not as a general UI icon set.

- **UI icons:** use **Lucide** (https://lucide.dev) — a clean, consistent
  open-source line set at ~1.75–2px stroke that matches the system's
  professional, non-playful tone. Loaded from CDN in cards and kits.
  *This is a substitution — NGIS has no documented icon library. Flag for
  confirmation / replacement with an official set.*
- **Stroke & style:** line (outline) icons only, rounded joins, consistent
  weight. Avoid filled, duotone, or cartoon icon styles.
- **Emoji:** never used, anywhere.
- **Unicode glyphs as icons:** avoid; use Lucide for any glyph need.
- Keep icons monochrome — inherit `currentColor` (navy or slate in UI, white on
  dark bands). Color an icon only to color-code a section with one accent.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (links all tokens + fonts). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**`tokens/`** — CSS custom properties
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css`

**`assets/`**
- `ngis-logo-full.jpeg` — full crest + wordmark + tagline.

**`guidelines/`** — foundation specimen cards (Design System tab): color,
type, spacing, brand.

**`components/`** — reusable React primitives (see each `.prompt.md`):
- `core/` — Button, IconButton, Badge, Tag, Card, Stat, EyebrowLabel,
  Input, Select, Alert, Avatar.

**`ui_kits/website/`** — high-fidelity recreation of the NGIS marketing
website (homepage, academics, admissions).

**`templates/`** — copy-to-start artifacts for consuming projects.
- `website-page/` — branded marketing homepage (header, hero, proof stats,
  programmes, CTA band, footer) composed from the component library. Entry:
  `WebsitePage.dc.html`; loads the system via `ds-base.js`.
