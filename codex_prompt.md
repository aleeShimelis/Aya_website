You are an experienced Senior UI/UX Designer and Senior Web Engineer. Build a production-quality website for Aya Dental Studio / Aya Specialty Dental Clinic.

This is not a quick mockup. Do not "vibe code." Do not generate a generic dental template. Build the site from a strict UI/UX design system, with clean architecture, consistent spacing, consistent typography, strong accessibility, strong SEO, secure forms, and production-ready structure.

Before writing any implementation, inspect the repository. If this is a new project, create a clean Next.js project. If a project already exists, adapt to the existing structure instead of replacing everything blindly.

============================================================
PROJECT CONTEXT
============================================================

Client:
Aya Dental Studio, also known as Aya Speciality Dental Clinic.

Brand:

- Public-facing brand name: Aya Dental Studio.
- Secondary/legal/service name: Aya Speciality Dental Clinic.
- Logo includes:
  - "Aya"
  - "DENTAL STUDIO"
  - Amharic text: "አያ ዴንታል ስቱዲዮ"
- Use the uploaded logo assets.
- The logo has a premium, elegant, clinical feel.
- Primary visual direction: clean, calm, modern, professional, trustworthy, elegant.
- Main color direction:
  - charcoal / deep slate
  - white / warm off-white
  - soft teal
- Avoid orange as a main UI color.
  If orange exists in the logo, use it only as a tiny optional accent, or omit it if it weakens the visual system.

Language note:

- The primary site language is English.
- The logo includes Amharic. Add a TODO placeholder for future Amharic (አማርኛ) language support via next-intl or equivalent.
- Do not fabricate Amharic translations. Leave them as TODO.

Location:
Addis Ababa, Ethiopia.
Known clinic location placeholder:
Bole Atlas Traffic Light, Landmark Plaza, 2nd Floor, Addis Ababa.

Known contact placeholders:
Phone: +251 985 200 000 / +251 985 300 000
Email: ayadental@gmail.com

Important:
Do not expose the email directly in frontend HTML. All contact forms must use secure server-side handlers.

Inspiration sites (structural reference only — do not copy their visual design):

- smilespecialtydentalclinic.com
- wisdomaddis.com

Use them only as structural reference for:

- dental services
- appointment booking
- trust signals
- doctor/team presentation
- service pages
- clinic location/contact
- testimonials/FAQ

============================================================
MAIN GOAL
============================================================

Build a modern, premium, mobile-first dental clinic website that makes Aya feel more polished and trustworthy than the inspiration sites.

The website must:

- Look intentionally designed, not AI-generated.
- Use a strict design system.
- Be fast (Core Web Vitals green).
- Be accessible (WCAG 2.1 AA).
- Be SEO-friendly (local SEO focused).
- Be secure.
- Be conversion-focused.
- Be easy to maintain.
- Be ready for real clinic photos, staff photos, and one 360 virtual tour image.

============================================================
REQUIRED STACK
============================================================

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- CSS variables / design tokens
- Semantic HTML
- Reusable components
- Zod for all form and API input validation
- Server-side API route handlers for forms
- Environment variables for all secrets (.env.local, with .env.example committed)
- middleware.ts for security headers

Do not use:

- Random inline styles
- Arbitrary colors outside the design tokens
- Arbitrary spacing values unless justified
- Overly flashy gradients
- Heavy animation libraries unless necessary
- Generic stock-photo-driven visual direction
- Unstructured one-file implementation
- Fake testimonials
- Fake credentials
- Fake ratings
- Fake awards
- Fake years of experience

============================================================
STEP 1: CREATE DESIGN DOCS
============================================================

Before implementing anything, create these two files:

1. docs/design-system.md
2. docs/ui-ux-plan.md

After creating them, stop and confirm they are complete before proceeding to implementation.

---

## docs/design-system.md must define:

1. Brand personality
   - premium, calm, clinical, human, trustworthy, elegant

2. Color tokens
   Define exact CSS custom properties for:
   - --color-background
   - --color-foreground
   - --color-muted-bg
   - --color-muted-text
   - --color-charcoal (primary)
   - --color-slate (secondary)
   - --color-teal (accent)
   - --color-teal-light (accent light)
   - --color-border
   - --color-card-bg
   - --color-success
   - --color-warning
   - --color-error
   - --color-focus-ring

3. Typography system
   - Font families (max 2)
   - Body minimum: 16px
   - Heading scale (h1–h4)
   - Line heights
   - Font weights
   - Letter-spacing rules
   - Maximum prose widths (e.g. 65ch)

4. Spacing system
   - Section padding: mobile / tablet / desktop
   - Card padding
   - Grid gaps
   - Header height
   - Button height
   - Form field height

5. Border radius system
   - --radius-sm
   - --radius-md
   - --radius-lg
   - --radius-pill
   - --radius-card

6. Shadow system
   Subtle shadows only. Avoid heavy fake-glass UI.

7. Component rules
   Define exact visual behavior for:
   - buttons (max 3 variants)
   - links
   - nav
   - cards (max 2 card styles)
   - forms
   - accordions
   - testimonial cards
   - service cards
   - doctor cards
   - CTA blocks
   - mobile sticky contact bar

8. Motion rules
   - Subtle hover transitions only
   - Smooth but minimal reveal animations
   - Always respect prefers-reduced-motion
   - No distracting parallax
   - No excessive bouncing or floating elements

9. Favicon and app icons
   - Define required sizes: 16×16, 32×32, 180×180 (apple-touch-icon), 192×192, 512×512
   - Add TODO to generate from final logo asset
   - Add manifest.json placeholder for PWA-readiness

---

## docs/ui-ux-plan.md must define:

1. Target users
   - New patients
   - Nervous dental patients
   - Families
   - Cosmetic dentistry patients
   - People searching for a dentist in Addis Ababa / Bole Atlas

2. UX priorities
   - Trust first
   - Easy booking
   - Mobile-first contact
   - Plain-language service explanations
   - Clinic transparency
   - Low anxiety

3. Homepage wireframe (in order)
   - Top contact bar
   - Header / nav
   - Hero
   - Trust strip
   - Services preview
   - About dentist / team preview
   - Virtual tour preview
   - Patient journey
   - Testimonials placeholder
   - FAQ preview
   - Contact / booking CTA
   - Footer

4. Page-level UX goals for every required page

5. Anti-patterns to avoid:
   - Generic medical template
   - Too many cards
   - Too many icons
   - Random gradients
   - Cluttered hero
   - Fake smiling stock-photo feel
   - Tiny text
   - Weak contrast
   - Hidden contact options
   - Form asking for excessive medical information
   - Auto-loading heavy 360 viewer on homepage

============================================================
STEP 2: IMPLEMENT THE WEBSITE
============================================================

Only proceed after design docs are complete.

---

## Required pages:

1.  / Homepage
2.  /about About the clinic, team, values, photo placeholders
3.  /services Services overview
4.  /services/teeth-whitening
5.  /services/dental-implants
6.  /services/tooth-extraction
7.  /services/dental-cleaning
8.  /services/fillings
9.  /services/root-canal
10. /services/crowns-and-bridges
11. /services/orthodontics
12. /gallery Real photo placeholders; no fake before/after claims; consent warning comments for patient photos
13. /virtual-tour One 360 image; lazy-loaded viewer
14. /faq Full FAQ with accordion
15. /contact Map, contact info, appointment request form
16. /privacy-policy
17. /cookie-policy
18. /terms

Prepare structure (no content yet): 19. /blog 20. /blog/[slug] MDX or CMS-ready; define frontmatter schema: title, slug, date, excerpt, author, coverImage, tags

Special routes: 21. app/not-found.tsx Custom 404 page matching design system 22. app/error.tsx Custom 500 / error boundary page 23. app/loading.tsx Root loading state

API routes:

- app/api/appointment/route.ts
- app/api/contact/route.ts

============================================================
HOMEPAGE REQUIREMENTS
============================================================

The homepage must be clean, premium, and conversion-focused.

1. Top contact bar
   - Phone, location, working hours placeholder
   - Not too tall
   - Simplified or hidden on small screens if needed

2. Header
   - Logo
   - Navigation
   - Call button
   - WhatsApp button
   - Book Appointment button
   - Sticky
   - Accessible mobile menu (keyboard navigable, focus-trapped, closes on Escape)

3. Hero
   Must feel premium and calm.
   Example tone: "Calm, specialist dental care for healthier smiles in Addis Ababa."

   Include:
   - h1
   - Short supporting paragraph
   - Book Appointment CTA
   - Call Now CTA
   - WhatsApp CTA
   - Real clinic image placeholder
   - No clutter
   - No fake doctor image unless asset exists
   - No cheesy stock image styling

4. Trust strip
   Four trust points:
   - Addis Ababa / Bole Atlas location
   - Patient-first dental care
   - Clean modern clinic environment
   - Personalized treatment planning

5. Services preview
   Cards for all 8 services. Each card:
   - Plain-language description
   - No exaggerated claims
   - Link to service page
   - Consistent height
   - Consistent icon style
   - No random icon choices

6. About dentist / team preview
   - Photo placeholder
   - Credentials placeholder
   - Experience placeholder
   - Specialization placeholder
   - Do not invent details
   - Use TODO comments for real clinic input

7. Virtual tour preview
   - One 360 photo only for v1
   - Recommended content: reception/waiting area with 1–3 staff members visible naturally
   - CTA: "Start 360° Clinic Tour"
   - Do not auto-load the heavy viewer bundle on homepage
   - Use a static preview image + link to /virtual-tour

8. Patient journey
   Steps: Book → Consultation → Treatment plan → Treatment → Aftercare

9. Testimonials / Google Reviews placeholder
   - No fake reviews
   - Add TODO for real Google Reviews integration

10. FAQ preview
    4–6 common questions

11. Final CTA block
    - Book appointment
    - Call
    - WhatsApp
    - Map / location link

12. Footer
    - Brand
    - Navigation links
    - Services links
    - Contact
    - Legal pages
    - Social placeholders
    - No exposed email in raw HTML

============================================================
STRICT UI RULES
============================================================

Every page must follow the design system.

Use:

- Consistent max-width containers
- Consistent vertical rhythm
- Section spacing from design tokens
- Clear heading hierarchy
- Restrained color use
- Large, readable text
- Generous white space
- Premium card styling
- Subtle borders and shadows
- Consistent button styles (max 3 variants)
- Consistent form styles

Do not use:

- Random rounded values
- Random shadows
- Random gradients
- Random accent colors
- More than 2 font families
- More than 3 button variants
- More than 2 card styles
- Huge icon sets everywhere
- Glassmorphism
- Excessive animation
- Cluttered layouts
- Generic AI-generated marketing phrases

Design quality bar:
The site should feel closer to a premium international healthcare brand than a local clinic template.

============================================================
COPYWRITING RULES
============================================================

Tone: calm, reassuring, professional, confident, not pushy, not exaggerated.

Avoid:

- "world-class" unless verified
- "best dentist" (acceptable only in SEO metadata, not as a factual body claim)
- "painless" unless clinic-approved
- "guaranteed results"
- Fake awards, reviews, credentials, before/after outcomes

Use TODO placeholders for:

- Dentist credentials, years of experience, certifications, affiliations
- Opening hours, payment options, insurance information
- Testimonials, Google review rating
- Before/after images, real staff names and photos

============================================================
360 VIRTUAL TOUR REQUIREMENTS
============================================================

Page: /virtual-tour

- Support one equirectangular 360 image.
- Use a lightweight viewer: Photo Sphere Viewer, Pannellum, or equivalent.
- Lazy-load the viewer; never include it in the homepage bundle.
- Provide a static fallback image.
- Add accessible explanatory text.
- Add loading state and graceful error state.
- Add mobile-friendly touch controls.
- Add code comments noting:
  - Staff consent required before going live
  - No patients visible without written consent
  - Reception/waiting area preferred for v1
  - Treatment room acceptable only if clean, staged, and not intimidating
  - Image must be optimized (JPEG, max ~8 MB) before production

============================================================
SECURITY REQUIREMENTS
============================================================

Security is non-negotiable. Assume production is HTTPS only.

Implement in middleware.ts (Next.js):

- Content-Security-Policy
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy
- Strict-Transport-Security (production only)

Forms:

- All form handlers are server-side API routes
- Validate and sanitize all inputs with Zod
- XSS prevention
- SQL injection prevention if a database is added
- Rate limiting (use Upstash Rate Limit or document the placeholder clearly)
- reCAPTCHA v3 or Cloudflare Turnstile on all forms
- Privacy notice + consent checkbox linking to /privacy-policy before submission
- No hardcoded secrets; no API keys in frontend code
- No exposed email in frontend HTML

Form data collected (v1 only):

- Full name
- Phone
- Preferred contact method
- Service
- Preferred date
- Short message (max 500 chars)
- Privacy consent checkbox
- Bot protection token

Healthcare privacy:

- Structure the site to be privacy-conscious and HIPAA-ready.
- Do NOT publicly claim "HIPAA compliant."
- Add TODO notes for healthcare privacy/legal review.
- Add TODO note for Ethiopia-specific data privacy/legal review.
- If patient health information is ever collected, require a HIPAA-compliant or healthcare-appropriate provider for forms, storage, and email.

============================================================
SEO REQUIREMENTS
============================================================

Every page needs:

- Unique <title> and meta description
- Canonical URL
- Open Graph metadata (og:title, og:description, og:image, og:url, og:type)
- Twitter Card metadata (twitter:card, twitter:title, twitter:description, twitter:image)
- Clean semantic h1
- Logical heading hierarchy
- Alt text on all meaningful images

Local SEO targets:

- dentist in Addis Ababa
- dental clinic in Addis Ababa
- dental clinic in Bole Atlas
- specialist dental clinic in Addis Ababa
- teeth whitening Addis Ababa
- dental implants Addis Ababa
- root canal Addis Ababa

Add:

- sitemap.xml (auto-generated via Next.js app/sitemap.ts)
- robots.txt
- JSON-LD structured data on every relevant page:
  - Dentist
  - LocalBusiness
  - MedicalBusiness
  - BreadcrumbList on inner pages
  - FAQPage on /faq

JSON-LD placeholders must include:

- address, phone, geo coordinates, opening hours
- logo, sameAs social links
- Verified reviews only — no fabricated ratings

Add README checklist for:

- Google Business Profile verification
- Google Search Console setup and sitemap submission
- Local citations
- Google Maps verification

============================================================
PERFORMANCE REQUIREMENTS
============================================================

Optimize for:

- Mobile-first performance
- Core Web Vitals: LCP, CLS, INP

Implement:

- next/image for all images (WebP/AVIF automatic)
- Stable image dimensions (width + height always set) to prevent CLS
- Responsive images with correct srcset
- Lazy loading for all below-fold images
- Lazy-loaded 360 viewer (dynamic import with ssr: false)
- font-display: swap
- Minimal JavaScript; prefer server components
- No unnecessary client components
- Clean bundle: no animation libraries loaded globally, no 360 viewer in root bundle

Avoid:

- Large unoptimized images
- Layout shifts from images or fonts
- Loading third-party scripts synchronously

============================================================
ACCESSIBILITY REQUIREMENTS
============================================================

Target: WCAG 2.1 AA

Implement:

- Skip-to-content link as first focusable element
- Semantic landmarks: <header>, <nav>, <main>, <footer>, <section>, <article>
- Accessible nav with keyboard navigation
- Accessible mobile menu (focus trap, Escape to close, aria-expanded)
- Visible focus states on all interactive elements
- Proper <label> for every form field
- Helpful, inline form error messages
- ARIA labels only where semantic HTML is insufficient
- Sufficient contrast (minimum 4.5:1 for body text)
- Minimum 16px body font size
- Comfortable mobile tap targets (minimum 44×44px)
- prefers-reduced-motion respected in all animations
- No color-only communication
- Print stylesheet for appointment confirmation pages

============================================================
FUNCTIONAL REQUIREMENTS
============================================================

Implement:

- Online appointment request form (server-side handler)
- Secure contact form (server-side handler)
- Click-to-call buttons (tel: links)
- WhatsApp button (wa.me link)
- Google Maps embed on /contact
- FAQ accordion (client component, keyboard accessible)
- Cookie consent banner if analytics is enabled (do not load analytics before consent)

Analytics placeholders (disabled by default):

- Google Analytics 4
- Form submission conversion event
- Call click conversion event
- WhatsApp click conversion event

============================================================
PROJECT STRUCTURE
============================================================

app/
layout.tsx
page.tsx
not-found.tsx
error.tsx
loading.tsx
about/page.tsx
services/page.tsx
services/[slug]/page.tsx
gallery/page.tsx
virtual-tour/page.tsx
faq/page.tsx
contact/page.tsx
privacy-policy/page.tsx
cookie-policy/page.tsx
terms/page.tsx
blog/page.tsx
blog/[slug]/page.tsx
sitemap.ts
robots.ts
api/
appointment/route.ts
contact/route.ts

middleware.ts ← security headers

components/
layout/ ← Header, Footer, TopBar, MobileMenu, StickyContactBar
sections/ ← Hero, TrustStrip, ServicesPreview, TeamPreview, etc.
ui/ ← Button, Card, Accordion, Badge, etc.
forms/ ← AppointmentForm, ContactForm, FormField, FormError
seo/ ← JsonLd, MetaTags
virtual-tour/ ← TourViewer (dynamic import), TourPreview

lib/
constants.ts
services.ts
seo.ts
schema.ts ← JSON-LD builders
validation.ts ← Zod schemas
security.ts
rate-limit.ts
utils.ts

content/
services.ts
faqs.ts
navigation.ts
blog/ ← MDX files or CMS integration placeholder

docs/
design-system.md
ui-ux-plan.md
security-checklist.md
deployment-checklist.md

public/
images/
logo/
virtual-tour/
favicon.ico
apple-touch-icon.png
manifest.json

.env.example ← committed; lists all required env vars with placeholder values
.env.local ← never committed

============================================================
CODE QUALITY RULES
============================================================

Code must be:

- Fully typed (no any unless justified with a comment)
- Modular and readable
- Consistent with the design system
- Free of dead code and unused imports
- Free of duplicate components
- Free of hardcoded secrets
- Free of fake business claims

Components must:

- Have clear, typed props interfaces
- Avoid over-abstraction
- Avoid giant files (split if >200 lines)
- Avoid repeated JSX where a reusable component fits
- Avoid unnecessary client-side rendering

Use "use client" only when interactivity is required:

- Mobile menu
- FAQ accordion
- Form state and submission
- Virtual tour viewer
- Cookie consent banner

Everything else: server components.

============================================================
VALIDATION GATES
============================================================

After implementation, run and fix all issues before declaring done:

1. npm run lint
2. npm run typecheck (add if missing)
3. npm run build

Also verify:

- No TypeScript errors
- No ESLint errors
- No unused imports
- No broken internal links
- No missing alt text on meaningful images
- No fake testimonials, ratings, credentials, or awards
- No exposed email address in frontend HTML
- No hardcoded secrets or API keys
- Forms validate and sanitize server-side (Zod)
- Bot protection placeholder on every form
- Rate limiting placeholder in every API route
- Security headers present in middleware.ts
- Unique metadata on every page
- Open Graph + Twitter Card tags on every page
- sitemap.ts and robots.ts exist
- JSON-LD on homepage, service pages, /faq, /contact
- 360 viewer is dynamically imported with { ssr: false }
- Homepage does not load the 360 viewer bundle
- Custom 404 and error pages exist and match the design system
- .env.example is committed with all required variables
- Mobile nav: opens, closes on Escape, focus-trapped, keyboard navigable
- Skip-to-content link is the first focusable element
- All focus states are visible
- Print stylesheet exists for appointment confirmation
- Design tokens used consistently; no arbitrary color or spacing values
- Lighthouse score targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90, SEO ≥ 95 (run on homepage as a reference check)

============================================================
README REQUIREMENTS
============================================================

Create or update README.md with:

1. Project overview
2. Tech stack
3. Installation
4. Development
5. Build
6. Deployment
7. Environment variables (reference .env.example)
8. Security checklist
9. Healthcare privacy / HIPAA-ready caveats
10. Ethiopia privacy/legal review TODO
11. Form provider setup (email delivery: Resend, SendGrid, or equivalent)
12. reCAPTCHA / Turnstile setup
13. GA4 setup and consent gating
14. Google Search Console setup
15. Google Business Profile checklist
16. Image optimization workflow
17. 360 virtual tour image preparation (equirectangular, JPEG, ~8 MB max, consent documented)
18. Favicon and app icon generation steps
19. Amharic language support TODO
20. Backup strategy
21. Uptime monitoring recommendation
22. Production launch checklist

============================================================
FINAL RESPONSE REQUIREMENTS
============================================================

When finished, provide a structured summary:

1. What was built
2. Design system created (key decisions)
3. Key pages added
4. Key components added
5. Security features implemented
6. SEO features implemented
7. Performance and accessibility choices made
8. Validation commands run and their results
9. Remaining TODOs requiring real clinic input (clearly listed)
10. Production deployment steps

Important:
Do not claim the site is legally HIPAA compliant.
State that it is structured to support privacy-conscious, HIPAA-ready workflows, pending provider selection, legal review, and Ethiopia-specific regulatory review.
