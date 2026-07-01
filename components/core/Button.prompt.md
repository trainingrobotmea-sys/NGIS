Primary interactive control for NGIS — use for actions like "Apply", "Book a tour", "Enquire now".

```jsx
<Button variant="primary" size="md">Apply for admission</Button>
<Button variant="navy">Book a tour</Button>
<Button variant="secondary" iconLeft={icon}>Download prospectus</Button>
<Button variant="ghost" size="sm">Learn more</Button>
```

**Variants:** `primary` (red — main CTA), `navy` (authoritative alt), `secondary` (outline on white), `ghost` (text-only).
**Sizes:** `sm`, `md`, `lg`. Props: `fullWidth`, `disabled`, `iconLeft`, `iconRight`.
Use one primary action per view. Red is reserved for the single most important action.
