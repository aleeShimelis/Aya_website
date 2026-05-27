# Aya Dental Studio Content And UI Notes

This file lists the current placeholders and the main files to edit when replacing content, images, contact details, or design settings.

The site is intentionally conservative about claims. Do not add reviews, ratings, years of experience, awards, credentials, before/after outcomes, patient counts, or medical promises unless Aya Dental Studio provides verified source material and approves it.

## Quick Editing Map

| What you want to change | Start here |
| --- | --- |
| Clinic phone, WhatsApp, address, map links, social links, Open Graph image | `lib/constants.ts` |
| Main navigation links | `content/navigation.ts` |
| Global colors, spacing helpers, container width, hero sizing, print styles | `app/globals.css` |
| Tailwind design tokens for colors, radii, shadows, fonts, max widths | `tailwind.config.ts` |
| Button style, button font weight, button radius, button variants | `components/ui/Button.tsx` |
| Card style, card padding, card radius, card border/shadow variants | `components/ui/Card.tsx` |
| Section heading style, heading weight, heading size, eyebrow style | `components/ui/SectionHeading.tsx` |
| Desktop navbar appearance and active states | `components/layout/DesktopNav.tsx` |
| Header layout, CTA grouping, logo/nav/button spacing | `components/layout/Header.tsx` |
| Mobile menu links and mobile CTA layout | `components/layout/MobileMenu.tsx` |
| Logo image path and text fallback | `components/layout/Logo.tsx` and `public/logo/README.md` |
| Homepage section order | `app/page.tsx` |
| Homepage hero copy and hero image placeholder | `components/sections/Hero.tsx` |
| Service content and service pages | `content/services.ts` |
| Homepage service category grouping | `content/service-groups.ts` |
| FAQ content | `content/faqs.ts` |
| Appointment/contact form fields and copy | `components/forms/AppointmentForm.tsx`, `components/forms/ContactForm.tsx`, `lib/validation.ts` |
| Server-side form delivery, Turnstile, Resend placeholders | `lib/security.ts`, `app/api/appointment/route.ts`, `app/api/contact/route.ts`, `.env.example` |
| JSON-LD schema, coordinates, opening hours placeholders | `lib/schema.ts` |

## Content Placeholders To Replace

### Logo

Current placeholder:
- `public/logo/README.md` explains that the final logo asset is missing.
- `components/layout/Logo.tsx` tries to load `public/logo/aya-dental-studio-logo.svg`.
- If the file is missing, the site falls back to text: "Aya" and "Dental Studio".

Replace with:
- Add the approved logo at `public/logo/aya-dental-studio-logo.svg`.
- If the filename changes, update `logoPath` in `lib/constants.ts` and the filesystem check in `components/layout/Logo.tsx`.
- Do not recreate the logo with icons or decorative text unless the image fails to load.

### Hero Clinic Image

Current placeholder:
- `components/sections/Hero.tsx` contains the large right-side clinic image placeholder.
- Supporting placeholder surface styles live in `app/globals.css` under `.hero-media`, `.hero-media-visual`, and `.hero-media-room`.

Replace with:
- An approved real clinic photo, preferably reception, waiting area, or a calm clinic environment.
- Use `next/image` with stable `width`, `height`, and useful `alt` text.
- Keep the image calm and clinical; avoid intimidating treatment imagery as the first impression.

### About Page Clinic Photos And Story

Current placeholders:
- `app/about/page.tsx` has a clinic interior photo placeholder.
- `app/about/page.tsx` also includes TODO copy for clinic story, dentist credentials, treatment rooms, equipment, and location photos.

Replace with:
- Verified clinic story copy.
- Approved real clinic photography.
- Confirmed dentist/team names, credentials, certifications, affiliations, and experience details.

### Team / Doctor Profile

Current placeholders:
- `components/sections/TeamPreview.tsx` has a real dentist/team photo placeholder.
- It also has placeholders for name, role, credentials, areas of care, languages spoken, and a short clinic note.
- `app/about/page.tsx` also points to the same missing team/credentials content.

Replace with:
- Real approved portrait or team photo with consent.
- Verified name, role, degrees, certifications, affiliations, areas of care, languages, and short bio.
- Do not invent doctors, years, credentials, awards, patient counts, or specialties.

### Gallery Images

Current placeholders:
- `app/gallery/page.tsx` renders clinic media placeholders for reception, treatment room, equipment, team, exterior/location, and detail photography.
- `components/ui/MediaPlaceholder.tsx` controls the reusable placeholder visual.

Replace with:
- Approved clinic photos only.
- Use patient-identifiable photos, before/after photos, or staff photos only with documented written consent and clinic/legal approval.

### Homepage 360 Viewer

Current placeholder:
- The homepage uses `components/sections/InsideStudioTour.tsx`.
- The expected image path is `/images/virtual-tour/aya-reception-360.jpg`.
- The repository currently has `public/images/virtual-tour/README.md`, not the final image.
- The viewer behavior is in `components/virtual-tour/LazyTourViewer.tsx` and `components/virtual-tour/TourViewer.tsx`.

Replace with:
- Add the final equirectangular JPEG at `public/images/virtual-tour/aya-reception-360.jpg`.
- Recommended subject: reception or waiting area with staff, prepared with consent.
- No patients should be visible without written consent.
- Optimize the final image to about 8 MB maximum, or less if quality allows.

To change the 360 section wording:
- Edit `components/sections/InsideStudioTour.tsx`.

To change viewer loading/fallback behavior:
- Edit `components/virtual-tour/LazyTourViewer.tsx`.

To change drag/pan controls, fallback text, or image alt text:
- Edit `components/virtual-tour/TourViewer.tsx`.

### Testimonials / Reviews

Current placeholder:
- `components/sections/TestimonialsPlaceholder.tsx` shows a verified testimonial placeholder.

Replace with:
- Real patient feedback only after clinic approval and verification.
- Do not add fake Google ratings, star ratings, review counts, or quotes.
- If integrating Google Reviews later, make the source and consent/usage rules clear.

### Contact Details, Hours, Location, Map, Social Links

Current placeholders:
- `lib/constants.ts` stores phone numbers, WhatsApp number, address, map URLs, hours placeholder, Open Graph image, logo path, and social links.
- `components/layout/TopBar.tsx`, `components/layout/Footer.tsx`, `components/layout/Header.tsx`, `components/layout/StickyContactBar.tsx`, and contact buttons read from these constants.
- `app/contact/page.tsx` displays the map iframe and appointment expectations.
- `content/faqs.ts` includes TODOs for final map pin, emergency policy, pediatric scope, payment methods, insurance, and financing.

Replace with:
- Final clinic phone numbers.
- Final WhatsApp number.
- Final address, map pin, coordinates, and directions.
- Confirmed opening hours.
- Verified social profile URLs.
- Confirmed payment methods, insurance, financing, and emergency policy.

### Services And Service Groups

Current content:
- Individual service content lives in `content/services.ts`.
- Homepage service grouping lives in `content/service-groups.ts`.
- The services preview component is `components/sections/ServicesPreview.tsx`.
- Service index and detail pages are `app/services/page.tsx` and `app/services/[slug]/page.tsx`.

Replace or adjust:
- Edit `content/services.ts` for service page titles, summaries, body copy, FAQs, and metadata.
- Edit `content/service-groups.ts` to change homepage categories or which services appear under each group.
- Keep copy consultation-led and avoid outcome guarantees.

### FAQ Copy

Current placeholders:
- `content/faqs.ts` includes TODOs for location details, emergency policy, pediatric service scope, payment methods, insurance, and financing.
- `app/faq/page.tsx` renders the FAQ page.
- `components/sections/FaqPreview.tsx` renders homepage FAQ preview content.

Replace with:
- Clinic-approved answers.
- Keep medical answers general and avoid replacing a consultation.

### Blog

Current placeholders:
- `app/blog/page.tsx` is an empty/placeholder blog index.
- `app/blog/[slug]/page.tsx` is a placeholder post route.
- `content/blog/schema.ts` defines the future blog frontmatter structure.

Replace with:
- A real MDX or CMS-backed blog system when ready.
- Clinic-reviewed articles only.
- No medical claims without review.

### Legal And Privacy Pages

Current placeholders:
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`
- `app/cookie-policy/page.tsx`
- `docs/security-checklist.md`

Replace with:
- Final legal copy reviewed by qualified counsel.
- Ethiopia-specific privacy review.
- Provider-specific privacy language after form/email/storage providers are finalized.
- Do not publicly claim HIPAA compliance. Use privacy-conscious or HIPAA-ready only until provider and legal verification are complete.

### Forms, Turnstile, Resend, Rate Limiting

Current placeholders:
- `.env.example` lists environment variables.
- `components/forms/AppointmentForm.tsx` and `components/forms/ContactForm.tsx` use a development Turnstile placeholder token.
- `lib/security.ts` contains Turnstile and Resend placeholder behavior.
- `lib/rate-limit.ts` contains rate limiting logic.
- `app/api/appointment/route.ts` and `app/api/contact/route.ts` handle forms server-side.
- `lib/validation.ts` defines Zod validation for form fields.

Replace with:
- Real Cloudflare Turnstile site key and secret.
- Real Resend API key and verified sender/domain setup.
- Production rate limiting provider such as Upstash.
- Final clinic inbox stored only in environment variables.
- Do not expose clinic email directly in frontend HTML.
- Do not collect detailed medical history in v1.

### Metadata, SEO, JSON-LD, Open Graph

Current placeholders:
- `lib/constants.ts` sets `ogImage` to `/images/og-placeholder.svg`.
- `public/images/og-placeholder.svg` is a placeholder preview image.
- `lib/schema.ts` includes TODO coordinates and opening hours in JSON-LD.
- `lib/seo.ts` builds metadata.
- `app/sitemap.ts` and `app/robots.ts` define crawler files.

Replace with:
- Final Open Graph image.
- Confirmed coordinates and opening hours.
- Final canonical production URL through `NEXT_PUBLIC_SITE_URL`.

### Amharic Support

Current placeholder:
- `app/layout.tsx` has a TODO for future Amharic language routing.
- The project should not fabricate Amharic translations.

Replace with:
- Approved Amharic copy.
- A localization layer such as `next-intl` only after translations are approved.

## UI And Design System Notes

### Change Colors

Edit colors in two places:

1. `app/globals.css`
   - Change the CSS variables inside `:root`.
   - Examples: `--color-charcoal`, `--color-teal`, `--color-background`, `--color-border`.

2. `tailwind.config.ts`
   - Tailwind tokens already map to those CSS variables.
   - Add new colors here only if they are part of the design system.

Do not use arbitrary Tailwind colors such as `bg-blue-500`, `text-gray-700`, or `border-slate-200` in components. Use mapped tokens like `bg-card-bg`, `text-charcoal`, `text-muted-text`, `border-border`, `bg-teal`, and `bg-teal-light`.

### Change Font Family

Edit `tailwind.config.ts`:
- `fontFamily.sans` controls the main body font.
- `fontFamily.serif` controls the display/heading serif.

Also check `app/globals.css`:
- The `body` rule sets the default font stack.

If you add web fonts, update `app/layout.tsx` or the relevant Next.js font setup and verify performance.

### Change Font Weight

Common places:

- Body text default: `app/globals.css`, the `body` rule.
- Hero heading weight: `components/sections/Hero.tsx`, class `font-semibold` on the `h1`.
- Section heading weight: `components/ui/SectionHeading.tsx`, class `font-semibold` on the `h2`.
- Buttons: `components/ui/Button.tsx`, `baseClassName` includes `font-semibold`.
- Navbar links: `components/layout/DesktopNav.tsx`, links include `font-semibold`.
- Logo fallback: `components/layout/Logo.tsx`, fallback text uses `font-semibold`.

Use existing Tailwind weights intentionally, such as `font-medium`, `font-semibold`, or `font-bold`. Avoid making every element bold; the current tone depends on quiet hierarchy.

### Change Button Styles

Edit `components/ui/Button.tsx`.

Main controls:
- `baseClassName` changes height, radius, font weight, padding, focus ring, transition, and shared button layout.
- `variants.primary` changes Book Appointment style.
- `variants.secondary` changes Call style.
- `variants.teal` changes WhatsApp/contact accent style.

Keep button heights consistent, especially in the header and mobile sticky contact bar.

### Change Cards

Edit `components/ui/Card.tsx`.

Main controls:
- Shared radius and padding are in the returned class: `rounded-card p-6`.
- Standard card border/background/shadow are in `variants.standard`.
- Highlight card styling is in `variants.highlight`.

If you need new card variants, add them here instead of styling one-off cards with arbitrary colors or shadows.

### Change Spacing, Containers, And Desktop Width

Edit `app/globals.css`.

Main controls:
- `.container-site` controls the main fluid full-width container.
- `.container-narrow` controls readable narrow content.
- `.section-padding` controls standard vertical spacing.
- `.section-padding-compact` controls smaller vertical spacing.
- `.prose-width` keeps paragraphs readable.

The current desktop layout uses a fluid full-width container with clamped side padding. If you change it, also update the documentation in `docs/design-system.md`.

### Change Hero Layout

Edit:
- `components/sections/Hero.tsx` for content, grid columns, CTA order, and placeholder markup.
- `app/globals.css` for `.hero-section`, `.hero-grid`, `.hero-copy`, `.hero-title`, `.hero-media`, and related responsive sizing.

Keep paragraph widths readable. Do not stretch body copy across the full desktop width.

### Change Navbar

Edit:
- `content/navigation.ts` for nav labels and URLs.
- `components/layout/DesktopNav.tsx` for the desktop nav pill, spacing, active states, hover states, and font weight.
- `components/layout/Header.tsx` for the three-zone desktop header layout and CTA grouping.
- `components/layout/MobileMenu.tsx` for mobile menu behavior and mobile nav presentation.

Keep the desktop header around 76-84px tall unless the design system is intentionally updated.

### Change Forms

Edit:
- `components/forms/FormField.tsx` for input, textarea, select, labels, helper text, and error styling.
- `components/forms/AppointmentForm.tsx` for appointment fields, confirmation copy, and print confirmation details.
- `components/forms/ContactForm.tsx` for contact fields and success/error copy.
- `lib/validation.ts` for field validation rules.
- `app/api/appointment/route.ts` and `app/api/contact/route.ts` for server-side behavior.

The appointment confirmation print stylesheet lives in `app/globals.css` under `@media print`.

### Change Homepage Section Order

Edit `app/page.tsx`.

Current homepage sections are imported and rendered there. Reorder sections by moving the component calls, but keep the 360 section below the early trust/about area and out of the hero.

### Change Page-Level Copy

Edit route files in `app/`:

- Home: `app/page.tsx` plus section components in `components/sections/`.
- About: `app/about/page.tsx`.
- Services index: `app/services/page.tsx`.
- Service detail pages: `app/services/[slug]/page.tsx` and `content/services.ts`.
- Gallery: `app/gallery/page.tsx`.
- FAQ: `app/faq/page.tsx` and `content/faqs.ts`.
- Contact: `app/contact/page.tsx`.
- Privacy, cookie, terms: `app/privacy-policy/page.tsx`, `app/cookie-policy/page.tsx`, `app/terms/page.tsx`.

## Before Publishing Checklist

- Replace final logo asset.
- Replace Open Graph placeholder image.
- Add approved real clinic photos.
- Add final 360 image with consent documentation.
- Confirm no patient-identifiable media appears without written consent.
- Confirm clinic phone, WhatsApp, address, map pin, coordinates, and hours.
- Confirm dentist/team names, roles, credentials, affiliations, languages, and profile copy.
- Confirm payment, insurance, financing, pediatric scope, and emergency policy.
- Configure Turnstile, Resend, and production rate limiting.
- Complete legal/privacy review.
- Run `npm.cmd run lint`.
- Run `npm.cmd run build`.
