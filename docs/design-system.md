# Aya Dental Studio Design System

This document defines the visual and interaction system for Aya Dental Studio, also known as Aya Speciality Dental Clinic. It is the source of truth for the website implementation.

## 1. Brand Personality

Aya Dental Studio should feel:

- Premium without feeling cold.
- Calm and low-anxiety.
- Clinical, clean, and precise.
- Human, reassuring, and respectful.
- Trustworthy and transparent.
- Elegant, with restrained use of color and decoration.

The design should feel closer to a premium international healthcare brand than a generic local clinic template. Avoid exaggerated claims, stock-photo energy, fake awards, and visual clutter.

## 2. Color Tokens

All UI colors must use CSS custom properties. Do not introduce arbitrary Tailwind colors or one-off hex values outside these tokens unless this document is updated first.

```css
:root {
  --color-background: #fbfaf7;
  --color-foreground: #172124;
  --color-muted-bg: #f1f5f4;
  --color-muted-text: #5d6b6f;
  --color-charcoal: #172124;
  --color-slate: #33464d;
  --color-teal: #2f8f8a;
  --color-teal-light: #dff1ef;
  --color-border: #d9e2e0;
  --color-card-bg: #ffffff;
  --color-success: #237a57;
  --color-warning: #9a6b16;
  --color-error: #b42318;
  --color-focus-ring: #1f7a76;
}
```

Usage rules:

- Charcoal is the primary UI color for headings, primary buttons, and high-emphasis text.
- Slate is secondary and should be used for supporting surfaces, icons, and quieter navigation text.
- Teal is the accent color for calls to action, selected states, focus support, and small brand highlights.
- Warm off-white is the default page background.
- White is reserved for cards, forms, and clean content panels.
- Orange must not be a main UI color. If the final logo contains orange, use it only as a tiny optional accent or omit it.
- Error, warning, and success states must always include text, not color-only signaling.

Contrast requirements:

- Body text must meet at least WCAG 2.1 AA contrast of 4.5:1.
- Focus rings must be visible on both white and off-white backgrounds.
- Muted text is for secondary copy only, never for critical instructions or errors.

## 3. Typography System

Use a maximum of two font families:

- Primary UI and body font: `Inter`, loaded with `next/font`, `font-display: swap`.
- Editorial heading accent font: `Cormorant Garamond`, loaded with `next/font`, `font-display: swap`.

If performance or language support becomes a concern, use `Inter` only.

Base rules:

- Body minimum font size: 16px.
- Letter spacing: 0 for body, buttons, cards, and headings.
- Maximum prose width: 65ch.
- Maximum narrow explanatory copy width: 52ch.
- Avoid all-caps paragraphs. Small labels may use uppercase only if letter spacing remains readable and contrast is strong.

Heading scale:

```css
h1 {
  font-size: 44px;
  line-height: 52px;
  font-weight: 600;
}

h2 {
  font-size: 34px;
  line-height: 42px;
  font-weight: 600;
}

h3 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
}

h4 {
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
}

body {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
}
```

Responsive typography:

- Mobile h1: 38px / 46px.
- Mobile h2: 30px / 38px.
- Do not scale type with viewport units.
- Keep compact UI text at 16px minimum unless it is a non-essential label, where 14px may be used with strong contrast.

## 4. Spacing System

Use consistent spacing tokens and Tailwind theme values mapped to these decisions.

Section padding:

- Mobile: 56px top and bottom.
- Tablet: 72px top and bottom.
- Desktop: 96px top and bottom.
- Compact sections: 40px mobile, 56px tablet, 72px desktop.

Layout:

- Site container: fluid full-width layout with clamped responsive side padding.
- Narrow content max width: 760px.
- Wide content: fluid full-width layout for expansive media-led sections.
- Site container side padding: 20px minimum, scaling with viewport width up to 88px.
- Narrow container side padding: 20px mobile, 32px tablet, 48px desktop, 64px large desktop.
- Text paragraphs must stay readable and should not exceed 60-68ch.
- Large desktop layouts must use available space intentionally through grids, media, and full-width section backgrounds, while preserving readable text widths.
- Full-width section backgrounds should extend edge-to-edge, with content held inside the site or wide container.
- Desktop sections should prefer strong 12-column or balanced grid compositions over narrow centered stacks when there is supporting media or card content.
- Hero layout rule: desktop hero uses a wide 12-column grid, with content occupying about 5-6 columns and media occupying about 6-7 columns.
- Hero desktop min-height target: about 680-760px, with vertically centered content and a dominant media block.

Component spacing:

- Card padding: 24px mobile, 28px desktop.
- Small card padding: 20px.
- Grid gaps: 20px mobile, 24px tablet, 32px desktop.
- Header height: 76px desktop, 68px mobile.
- Top contact bar height: 36px desktop; hidden or simplified on small mobile screens.
- Button height: 48px minimum.
- Small icon button tap target: 44px minimum.
- Form field height: 48px minimum.
- Textarea minimum height: 128px.

Spacing rules:

- Do not use random one-off spacing values.
- Use tighter spacing inside operational UI and larger rhythm between major sections.
- Avoid stacking too many cards in a row without meaningful visual hierarchy.

## 5. Border Radius System

```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-pill: 999px;
  --radius-card: 8px;
}
```

Usage rules:

- Cards use `--radius-card`.
- Inputs use `--radius-md`.
- Buttons may use `--radius-pill` for premium call-to-action styling.
- Do not use large rounded cards or playful pill-heavy layouts that weaken the clinical tone.

## 6. Shadow System

Subtle shadows only:

```css
:root {
  --shadow-sm: 0 1px 2px rgb(23 33 36 / 0.06);
  --shadow-md: 0 12px 28px rgb(23 33 36 / 0.08);
  --shadow-focus: 0 0 0 3px rgb(47 143 138 / 0.24);
}
```

Rules:

- Use borders before shadows for most cards.
- Use `--shadow-md` sparingly for the header, important CTA panels, and active overlays.
- Avoid glassmorphism, heavy blur, neon glow, and fake depth effects.

## 7. Component Rules

### Buttons

Maximum three variants:

1. Primary
   - Charcoal background, white text.
   - Used for "Book Appointment" and primary conversion actions.
   - Hover: slightly lighter charcoal or subtle lift.

2. Secondary
   - White or transparent background, charcoal text, border using `--color-border`.
   - Used for "Call Now", secondary navigation actions, and low-pressure CTAs.

3. Teal
   - Teal background, white text.
   - Used for WhatsApp/contact actions or selected accent actions.

Button rules:

- Minimum height: 48px.
- Minimum tap target: 44px by 44px.
- Include icons only when they clarify the action.
- Disabled states must remain legible and must not rely only on opacity.

### Links

- Inline links use charcoal text with a teal underline or underline on hover.
- Navigation links should be plain, restrained, and visibly focused.
- External map and WhatsApp links must have clear accessible labels.

### Navigation

- Sticky header with logo, primary nav, call action, WhatsApp action, and book action.
- Mobile menu must be keyboard navigable, focus-trapped, and close on Escape.
- Use `aria-expanded`, `aria-controls`, and clear button labels for menu controls.
- Keep the top contact bar short and scannable.

### Cards

Maximum two card styles:

1. Standard card
   - White background.
   - Border using `--color-border`.
   - Radius `--radius-card`.
   - Optional `--shadow-sm`.

2. Highlight card
   - Muted background or teal-light background.
   - Border using `--color-border`.
   - Used for CTA blocks, trust notes, and important patient guidance.

Do not nest cards inside cards.

### Forms

- All fields require visible labels.
- Placeholder text must not replace labels.
- Inline errors must be tied to fields with `aria-describedby`.
- Required fields must be marked in text.
- Use privacy consent checkbox before submission.
- Do not ask for excessive medical information in v1.
- Do not expose the clinic email address in frontend HTML.
- API handlers must validate and sanitize all inputs with Zod.
- Bot protection uses Cloudflare Turnstile placeholders.
- Email delivery uses Resend placeholders.

### Accordions

- Use native buttons for accordion triggers.
- Support keyboard navigation through normal tab order.
- Reflect state with `aria-expanded`.
- Keep FAQ answers concise and plain-language.

### Testimonial Cards

- Use placeholders only until real testimonials or verified Google reviews are provided.
- Do not fabricate review text, ratings, names, dates, or outcomes.
- Include TODO comments for future Google Reviews integration.

### Service Cards

- Consistent height and visual rhythm.
- Plain-language descriptions.
- One calm icon style across all services.
- No exaggerated claims like "guaranteed" or "painless" unless clinic-approved.

### Doctor Cards

- Use photo placeholders until real staff photos are provided.
- Use TODO placeholders for credentials, certifications, affiliations, specializations, and years of experience.
- Do not invent names or credentials.

### CTA Blocks

- Clear primary action: book appointment.
- Secondary actions: call, WhatsApp, map/location.
- Copy must be calm and non-pushy.
- Avoid dense CTA clusters on mobile.

### Mobile Sticky Contact Bar

- Visible on small screens when useful.
- Include call, WhatsApp, and book actions.
- Do not cover important form controls.
- Respect safe-area insets.

### Appointment Confirmation Print State

- Successful appointment submission must render a confirmation state that can be printed.
- Print output must hide navigation, footer, sticky contact bar, buttons, decorative media, and unrelated page chrome.
- Print output must show only the confirmation title, reference/status message, submitted non-sensitive details, clinic location placeholder, and next-step guidance.
- Do not print bot tokens, internal IDs, email routing information, or unnecessary health details.
- Scope print styles to the appointment confirmation container so normal pages are not affected.

## 8. Motion Rules

- Use subtle hover transitions only: color, border, and small transform changes.
- Reveal animations should be minimal and non-essential.
- Respect `prefers-reduced-motion`.
- No distracting parallax, bouncing, floating shapes, or continuous animation.
- Avoid animation libraries unless a specific need emerges.

Recommended transition:

```css
transition-property: color, background-color, border-color, box-shadow, transform;
transition-duration: 180ms;
transition-timing-function: ease;
```

## 9. Imagery And Media

- Use real clinic imagery when available.
- Until real media is available, use stable placeholders with clear TODO comments.
- Avoid generic smiling stock-photo direction.
- All meaningful images require alt text.
- All images must have stable width and height to prevent layout shift.
- Use `next/image` for site imagery.
- Below-fold images should be lazy-loaded.

360 tour media rules:

- Use one equirectangular 360 JPEG for v1.
- Optimize to about 8 MB maximum before production.
- Reception or waiting area is preferred.
- Staff consent is required before going live.
- No patients visible without written consent.
- Treatment room is acceptable only if clean, staged, and not intimidating.
- There is no separate `/virtual-tour` page.
- The homepage includes one embedded lazy-loaded 360 viewer section using `/images/virtual-tour/aya-reception-360.jpg`.
- The 360 viewer must not load above the fold or inside the initial hero bundle.
- The viewer must show a static poster/loading state until the section nears the viewport.

## 10. Favicon And App Icons

Required icon outputs:

- 16x16 favicon.
- 32x32 favicon.
- 180x180 `apple-touch-icon.png`.
- 192x192 web app icon.
- 512x512 web app icon.

TODO:

- Generate all icons from the final approved logo asset.
- Add `public/manifest.json` as a PWA-readiness placeholder after implementation begins.
- Confirm background color and safe area padding for the final logo mark.

## 11. Accessibility Rules

- First focusable element must be a skip-to-content link.
- Use semantic landmarks: `header`, `nav`, `main`, `footer`, `section`, and `article`.
- Visible focus states on every interactive element.
- Minimum body text size: 16px.
- Minimum tap target: 44px.
- No color-only communication.
- Strong contrast for text, controls, and focus states.
- Mobile menu must be focus-trapped and Escape-closeable.
- Forms must expose helpful inline errors.
- Appointment confirmation must include a print-friendly state as defined above.

## 12. Language And Localization

- Primary language: English.
- The logo may include Amharic text from the provided brand asset.
- Do not fabricate Amharic translations.
- TODO: add future Amharic language support using `next-intl` or an equivalent localization layer after approved translations are provided.

## 13. Implementation Enforcement Rules

- All colors must be mapped into CSS variables and Tailwind theme tokens before use.
- Components must not use arbitrary Tailwind colors like `bg-blue-500`, `text-gray-700`, `rounded-3xl`, `shadow-xl`, or similar defaults unless they are explicitly mapped to the design system.
- Border radii, shadows, spacing, and typography must follow the tokens and rules in this document.
- UI must be reviewed against this design system before the final response.
- The final build must not look like a generic AI-generated healthcare template. It should feel specific to Aya Dental Studio: calm, premium, clinical, trustworthy, and restrained.
- The desktop navbar must use three clear zones: logo/brand, grouped navigation, and contact CTAs.
- The navbar no longer includes a 360 route; the homepage owns the embedded studio preview.

## 14. Security Implementation Requirements

- Assume production is HTTPS only.
- Implement secure headers: `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and production-only `Strict-Transport-Security`.
- Handle all forms server-side only.
- Validate and sanitize all form inputs with Zod.
- Add rate limiting or a clearly documented production placeholder.
- Add a Cloudflare Turnstile or reCAPTCHA placeholder to each public form.
- Do not expose the clinic email address in frontend HTML.
- Do not hardcode secrets or provider API keys.
- Use environment variables for all providers and secrets.
- Do not collect detailed medical history in v1.
- Do not publicly claim HIPAA compliance. Use privacy-conscious / HIPAA-ready language only, pending provider selection and legal verification.
