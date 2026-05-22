# Aya Dental Studio UI/UX Plan

This document defines the user experience, page strategy, and implementation-ready product intent for the Aya Dental Studio website.

## 1. Target Users

Primary users:

- New patients comparing dental clinics in Addis Ababa.
- Nervous dental patients who need calm, clear information.
- Families looking for trustworthy dental care.
- Cosmetic dentistry patients exploring smile-improvement services.
- People searching for a dentist near Bole Atlas or a specialist dental clinic in Addis Ababa.

User concerns:

- Is this clinic trustworthy?
- Can I contact or book easily on mobile?
- Where is the clinic?
- What services are available?
- Will the clinic explain options clearly?
- Is the environment clean and modern?
- Can I understand the process before I visit?

## 2. UX Priorities

1. Trust first
   - Lead with calm, professional visual design.
   - Use real clinic details and verified claims only.
   - Avoid fake testimonials, ratings, awards, credentials, and before/after promises.

2. Easy booking
   - Keep appointment actions visible.
   - Offer call, WhatsApp, and appointment request paths.
   - Keep forms short and privacy-conscious.

3. Mobile-first contact
   - Prioritize tap targets, sticky contact access, and short content blocks.
   - Make location, phone, and booking easy to find.

4. Plain-language service explanations
   - Explain each service in simple, reassuring language.
   - Avoid overpromising outcomes.
   - Use service pages to answer basic patient concerns.

5. Clinic transparency
   - Include location, team placeholders, gallery placeholders, and 360 tour readiness.
   - Clearly mark TODOs that require real clinic input.

6. Low anxiety
   - Use calm pacing, warm off-white backgrounds, restrained teal accents, and simple layouts.
   - Avoid intimidating treatment imagery on first impression.

## 3. Homepage Wireframe

Homepage order:

1. Top contact bar
   - Phone placeholder.
   - Bole Atlas / Landmark Plaza location placeholder.
   - Working hours placeholder.
   - Compact on desktop; simplified or hidden on small screens.

2. Header / nav
   - Use the provided Aya Dental Studio logo asset from the project/public assets. Do not recreate the logo in text or with an icon unless the image fails to load.
   - Primary navigation.
   - Navigation items: Home, About, Services, Gallery, FAQ, Contact.
   - No separate 360 navigation route.
   - Call button.
   - WhatsApp button.
   - Book Appointment button.
   - Sticky behavior.
   - Accessible mobile menu with keyboard support, focus trap, and Escape close.

3. Hero
   - H1: calm specialist dental care for healthier smiles in Addis Ababa.
   - Short supporting paragraph.
   - Book Appointment CTA.
   - Call Now CTA.
   - WhatsApp CTA.
   - Real clinic image placeholder.
   - No fake doctor image unless a real asset exists.
   - No clutter or stock-photo styling.

4. Trust strip
   - Addis Ababa / Bole Atlas location.
   - Patient-first dental care.
   - Clean modern clinic environment.
   - Personalized treatment planning.

5. Services preview
   - Service groups: Preventive Care, Restorative Care, Cosmetic Care, Advanced Care.
   - Links to individual service detail pages.
   - Plain-language descriptions.
   - Equal visual rhythm and card height.

6. Why patients choose Aya
   - Clean, carefully prepared environment.
   - Clear treatment explanations.
   - Thoughtful appointment experience.
   - Patient-first treatment planning.

7. Inside the Studio
   - One embedded interactive 360 viewer directly on the homepage.
   - Eyebrow: "Inside the Studio".
   - Heading: "Take a 360° look inside Aya Dental Studio".
   - Use `/images/virtual-tour/aya-reception-360.jpg` until the real image is provided.
   - Lazy-load only when the section is near the viewport.
   - No modal, popup, route change, or separate tour page.

8. Care for every stage of life
   - Children & families.
   - Teens & orthodontic care.
   - Adults & restorative care.
   - Cosmetic smile care.

9. About dentist / team preview
   - Photo placeholder.
   - Credentials placeholder.
   - Name placeholder.
   - Role placeholder.
   - Areas of care TODO.
   - Languages spoken TODO.
   - TODO comments for real clinic input.

10. Patient journey
   - Book.
   - Consultation.
   - Treatment plan.
   - Treatment.
   - Aftercare.

11. Testimonials / Google Reviews placeholder
   - No fake review content.
   - TODO for verified Google Reviews integration.

12. FAQ preview
   - 4 to 6 common questions.
   - Link to full FAQ.

13. Final CTA block
   - Book appointment.
   - Call.
   - WhatsApp.
   - Map / location link.

14. Footer
   - Brand summary.
   - Navigation links.
   - Service links.
   - Contact placeholders.
   - Legal pages.
   - Social placeholders.
   - Do not expose email in raw HTML.

## 4. Page-Level UX Goals

### Homepage `/`

Goal: establish trust quickly and convert visitors into appointment requests, calls, WhatsApp chats, or location visits.

Must include:

- Premium hero.
- Trust strip.
- Services preview.
- Team preview.
- Embedded 360 studio preview.
- Patient journey.
- FAQ preview.
- Final CTA.

### About `/about`

Goal: make the clinic feel human, professional, and transparent.

Must include:

- Clinic story placeholder.
- Values.
- Team and dentist placeholders.
- Photo placeholders.
- TODOs for verified credentials, certifications, affiliations, and real staff names.

### Services Overview `/services`

Goal: help patients understand what care is available and choose the right service page.

Must include:

- Intro copy.
- All 8 services.
- Plain-language summaries.
- Links to detail pages.
- CTA to book or call if unsure.

### Service Detail Pages

Routes:

- `/services/teeth-whitening`
- `/services/dental-implants`
- `/services/tooth-extraction`
- `/services/dental-cleaning`
- `/services/fillings`
- `/services/root-canal`
- `/services/crowns-and-bridges`
- `/services/orthodontics`

Goal: explain each service calmly, support SEO, and convert without pressure.

Each page must include:

- Unique H1 and metadata.
- Brief plain-language overview.
- When this service may be recommended.
- What to expect.
- Preparation or aftercare notes where appropriate.
- FAQ section relevant to the service.
- CTA to book, call, WhatsApp, or ask a question.
- Breadcrumb JSON-LD.

Avoid:

- Guaranteed outcomes.
- "Painless" claims unless clinic-approved.
- Fake before/after examples.
- Medical advice that replaces consultation.

### Gallery `/gallery`

Goal: prepare for real clinic photos without making unverified claims.

Must include:

- Clinic photo placeholders.
- Space for reception, treatment room, equipment, and team images.
- Consent warning comments for patient photos.
- No fake before/after claims.
- No patient-identifiable media without written consent.

### Embedded 360 Studio Preview

Goal: let users preview the clinic environment directly on the homepage without harming initial page performance.

Must include:

- No separate `/virtual-tour` route.
- One lazy-loaded equirectangular 360 viewer embedded on the homepage.
- Static poster/loading state.
- Loading state.
- Graceful error state.
- Accessible explanatory text.
- Mobile-friendly touch controls.
- Consent and image optimization comments.
- Placeholder path: `/images/virtual-tour/aya-reception-360.jpg`.
- The viewer must not load above the fold.
- No popup, modal, overlay tour, or route change.

### FAQ `/faq`

Goal: reduce anxiety and answer common pre-visit questions.

Must include:

- Full keyboard-accessible accordion.
- FAQPage JSON-LD.
- Clear disclaimers when answers require consultation.
- Link to contact and appointment actions.

### Contact `/contact`

Goal: provide every practical path to reach or visit the clinic.

Must include:

- Map embed.
- Location placeholder: Bole Atlas Traffic Light, Landmark Plaza, 2nd Floor, Addis Ababa.
- Phone links.
- WhatsApp link.
- Appointment request form.
- Contact form or contact prompt.
- Privacy consent and bot protection placeholders.
- Do not expose email directly in frontend HTML.

### Privacy Policy `/privacy-policy`

Goal: explain how form data and analytics placeholders will be handled.

Must include:

- Privacy-conscious healthcare caveats.
- TODO for legal review.
- TODO for Ethiopia-specific data privacy review.
- No claim of HIPAA compliance.

### Cookie Policy `/cookie-policy`

Goal: prepare for analytics consent without loading analytics by default.

Must include:

- GA4 disabled-by-default placeholder.
- Consent-gated analytics plan.
- Explanation of essential vs optional cookies.

### Terms `/terms`

Goal: set basic website use expectations.

Must include:

- Informational-only medical content note.
- No replacement for clinical consultation.
- Appointment requests are not guaranteed until confirmed by clinic staff.

### Blog `/blog`

Goal: prepare for future dental education and local SEO content.

Must include:

- Empty or placeholder state.
- CMS/MDX-ready structure.
- No fabricated articles.

### Blog Detail `/blog/[slug]`

Goal: support future MDX or CMS-backed posts.

Must define frontmatter schema:

- `title`
- `slug`
- `date`
- `excerpt`
- `author`
- `coverImage`
- `tags`

### Not Found `app/not-found.tsx`

Goal: help users recover from broken links.

Must include:

- Calm message.
- Link home.
- Link to services.
- Contact action.

### Error Boundary `app/error.tsx`

Goal: provide a composed recovery state if the app fails.

Must include:

- Plain-language error message.
- Retry action.
- Contact action.

### Loading State `app/loading.tsx`

Goal: provide a subtle loading state matching the design system.

Must include:

- Minimal skeleton or loading indicator.
- No flashy animation.
- Respect reduced motion.

## 5. Appointment And Contact UX

Forms should collect only v1 fields:

- Full name.
- Phone.
- Preferred contact method.
- Service.
- Preferred date.
- Short message, maximum 500 characters.
- Privacy consent checkbox.
- Bot protection token.

Form behavior:

- Validate client-side for user convenience.
- Validate server-side with Zod as the source of truth.
- Show inline field errors.
- Preserve user input after recoverable validation errors.
- Show a calm success confirmation when submitted.
- Do not include raw email in frontend HTML.
- Do not store or print sensitive medical details.

Appointment confirmation print behavior:

- The confirmation state must be print-friendly.
- Printed output must hide nav, footer, sticky contact bar, CTA buttons, decorative media, and form controls.
- Printed output must show only the appointment request confirmation details, non-sensitive submitted values, location placeholder, and next-step guidance.
- This print stylesheet is part of the WCAG 2.1 AA accessibility implementation.

## 6. SEO And Local Search UX

Primary local SEO targets:

- dentist in Addis Ababa.
- dental clinic in Addis Ababa.
- dental clinic in Bole Atlas.
- specialist dental clinic in Addis Ababa.
- teeth whitening Addis Ababa.
- dental implants Addis Ababa.
- root canal Addis Ababa.

Every page must have:

- Unique title.
- Unique meta description.
- Canonical URL.
- Open Graph metadata.
- Twitter Card metadata.
- One clear H1.
- Logical heading hierarchy.

Structured data:

- Dentist, LocalBusiness, and MedicalBusiness on relevant pages.
- BreadcrumbList on inner pages.
- FAQPage on `/faq`.
- Verified reviews only; omit ratings until verified.

## 7. Accessibility UX Requirements

Target WCAG 2.1 AA.

Must include:

- Skip-to-content link as first focusable element.
- Semantic landmarks.
- Visible focus states.
- Keyboard-accessible mobile menu.
- Keyboard-accessible FAQ accordion.
- Proper labels for all form fields.
- Inline error messages.
- Minimum 16px body text.
- Minimum 44px tap targets.
- No color-only communication.
- Print-friendly appointment confirmation state.

## 8. Performance UX Requirements

The site should feel fast on mobile.

Must include:

- Server components by default.
- Client components only for mobile menu, accordions, forms, cookie consent, and tour viewer.
- `next/image` for images.
- Stable image dimensions.
- Lazy loading below the fold.
- Dynamic import for the 360 viewer with SSR disabled.
- The embedded homepage 360 viewer must lazy-load only when the section nears the viewport.
- No 360 viewer bundle in the initial hero load.
- No synchronous third-party analytics scripts.

## 9. Content Placeholder Rules

Use TODO placeholders for:

- Dentist credentials.
- Years of experience.
- Certifications.
- Affiliations.
- Opening hours.
- Payment options.
- Insurance information.
- Testimonials.
- Google review rating.
- Before/after images.
- Real staff names and photos.
- Final logo asset.
- Real clinic photography.
- 360 tour image.
- Amharic translations.

Do not fabricate:

- Testimonials.
- Ratings.
- Awards.
- Credentials.
- Before/after results.
- "Best dentist" body-copy claims.
- "World-class" claims.
- "Painless" claims.
- Guaranteed outcomes.

## 10. Anti-Patterns To Avoid

- Generic medical template.
- Too many cards.
- Too many icons.
- Random gradients.
- Cluttered hero.
- Fake smiling stock-photo feel.
- Tiny text.
- Weak contrast.
- Hidden contact options.
- Form asking for excessive medical information.
- Auto-loading heavy 360 viewer on homepage.
- Separate 360 route or modal/popup tour.
- Glassmorphism.
- Excessive animation.
- Arbitrary colors outside tokens.
- Arbitrary spacing outside the design system.
- Fake trust signals.

## 11. Design Doc Confirmation Gate

Implementation must stop after creating:

- `docs/design-system.md`
- `docs/ui-ux-plan.md`

At that point:

- Output both documents in full.
- Wait for explicit approval before proceeding.
- Do not create folders, components, pages, app files, config files, assets, `.env.example`, README, or any implementation structure beyond the required `docs` folder and the two docs.

Continuing beyond this gate without explicit approval is a violation of the build plan.
