# Aya Dental Studio Launch TODO Guide

This guide explains how to finish the remaining content and provider setup before launching the site.

Use this as a simple checklist. Complete one step at a time, then run the final validation commands at the end.

## Before You Start

Collect the final clinic materials in one folder:

- Final logo file.
- Real clinic photos.
- Final 360 clinic image.
- Confirmed phone numbers and WhatsApp number.
- Confirmed address, map pin, and opening hours.
- Dentist and team information.
- Approved testimonials or reviews, if any.
- Legal/privacy copy.
- Provider credentials for forms, bot protection, email, and rate limiting.

Important rule: do not add fake ratings, reviews, awards, years of experience, credentials, before/after claims, patient counts, or success rates. Only add information that Aya Dental Studio has verified and approved.

## Step 1: Add The Final Logo

Goal: replace the text fallback logo with the real Aya Dental Studio logo.

What you need:

- Approved logo asset, preferably SVG.
- If SVG is not available, use a high-quality PNG with transparent background.

Where to put it:

- Preferred path: `public/logo/aya-dental-studio-logo.svg`

Files to check or edit:

- `public/logo/README.md`
- `components/layout/Logo.tsx`
- `lib/constants.ts`

How to do it:

1. Add the approved logo file to `public/logo/`.
2. If the file is named `aya-dental-studio-logo.svg`, no code change should be needed.
3. If the file has a different name, update `logoPath` in `lib/constants.ts`.
4. Also update the filesystem check in `components/layout/Logo.tsx` so it checks the correct filename.
5. Open the site and confirm the header uses the logo image instead of the text fallback.

Do not:

- Recreate the logo using random icons.
- Type the logo manually if the image asset exists.
- Change the brand colors unless the final brand guide requires it.

## Step 2: Add Real Clinic Photos

Goal: replace the visual placeholders with approved real clinic photography.

What you need:

- Reception or waiting area photo.
- Treatment room photo, only if clean, staged, and not intimidating.
- Exterior or building/location photo, if useful.
- Team photo or staff portraits, only with consent.
- Equipment/detail photos, if approved.

Recommended folder:

- `public/images/clinic/`

Files to check or edit:

- `components/sections/Hero.tsx`
- `app/about/page.tsx`
- `app/gallery/page.tsx`
- `components/sections/TeamPreview.tsx`
- `components/ui/MediaPlaceholder.tsx`

How to do it:

1. Optimize each photo before adding it to the project.
2. Use descriptive filenames, for example:
   - `aya-reception.jpg`
   - `aya-treatment-room.jpg`
   - `aya-team.jpg`
   - `aya-exterior.jpg`
3. Put the files in `public/images/clinic/`.
4. Replace placeholder components with `next/image`.
5. Add stable `width` and `height` values to prevent layout shift.
6. Add clear alt text, for example: `Aya Dental Studio reception area in Addis Ababa`.
7. Confirm photos look calm, premium, and consistent with the current design.

Do not:

- Use patient-identifiable photos without written consent.
- Use before/after images without legal and clinic approval.
- Use generic stock images that make the clinic look fake.
- Add frightening or clinical treatment images in the hero.

## Step 3: Add The Final 360 Image

Goal: replace the 360 placeholder with the real interactive homepage image.

What you need:

- One equirectangular 360 JPEG image.
- Preferred subject: reception or waiting area.
- Staff can appear only if consent is documented.
- No patients visible unless there is written consent.

Required path:

- `public/images/virtual-tour/aya-reception-360.jpg`

Files to check or edit:

- `components/sections/InsideStudioTour.tsx`
- `components/virtual-tour/LazyTourViewer.tsx`
- `components/virtual-tour/TourViewer.tsx`
- `public/images/virtual-tour/README.md`

How to do it:

1. Prepare the final 360 image as a JPEG.
2. Optimize it to about 8 MB maximum, or less if quality allows.
3. Save it exactly as `public/images/virtual-tour/aya-reception-360.jpg`.
4. Open the homepage and scroll to the "Inside the Studio" section.
5. Confirm the viewer loads only when that section is near the viewport.
6. Confirm users can drag or use keyboard arrows to pan.
7. Confirm there is no separate 360 page, modal, or popup.

Do not:

- Add more than one 360 image in v1.
- Put the 360 viewer in the hero.
- Add a separate `/virtual-tour` route again.
- Show patients without written consent.

## Step 4: Confirm Contact Details, Address, Map, Hours, And Social Links

Goal: make sure visitors can call, WhatsApp, find, and visit the clinic using correct details.

What you need:

- Primary phone number.
- Secondary phone number, if any.
- WhatsApp number.
- Full clinic address.
- Short location label.
- Google Maps link.
- Google Maps embed URL.
- Opening hours.
- Social media profile links.

Main file to edit:

- `lib/constants.ts`

Other files to check:

- `components/layout/TopBar.tsx`
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `components/layout/StickyContactBar.tsx`
- `app/contact/page.tsx`
- `content/faqs.ts`
- `lib/schema.ts`

How to do it:

1. Update `phonePrimary`, `phonePrimaryDisplay`, `phoneSecondary`, and `phoneSecondaryDisplay` in `lib/constants.ts`.
2. Update `whatsappNumber` without spaces or plus signs.
3. Update `addressShort` and `addressFull`.
4. Replace `hoursPlaceholder` with confirmed opening hours.
5. Update `mapUrl` with the final Google Maps public link.
6. Update `mapEmbedUrl` with the final embed URL.
7. Replace social link placeholders like `#todo-facebook`.
8. Update location-related FAQ answers in `content/faqs.ts`.
9. Update coordinates and opening hours in `lib/schema.ts`.

Do not:

- Put the clinic email directly in frontend HTML.
- Add unconfirmed working hours.
- Add a map pin until the exact location is verified.

## Step 5: Add Verified Dentist And Team Information

Goal: make the team section credible without inventing credentials.

What you need:

- Doctor or team member names.
- Roles or titles.
- Verified degrees.
- Certifications and affiliations, if any.
- Areas of care.
- Languages spoken.
- Short approved bio.
- Approved portrait or team image.

Files to edit:

- `components/sections/TeamPreview.tsx`
- `app/about/page.tsx`
- Possibly `app/gallery/page.tsx`

How to do it:

1. Collect written approved information from the clinic.
2. Replace `Name placeholder` with the real name.
3. Replace `Role placeholder` with the real role.
4. Replace credential TODOs with verified credentials.
5. Replace areas of care and languages with confirmed details.
6. Add an approved photo using `next/image`.
7. Keep the writing short, calm, and factual.

Do not:

- Guess credentials.
- Add "years of experience" unless verified.
- Add "specialist" unless the clinic confirms the exact qualification.
- Add awards, affiliations, or titles without proof.

## Step 6: Replace Testimonials Only If Verified

Goal: add patient trust content only when it is real and approved.

Current file:

- `components/sections/TestimonialsPlaceholder.tsx`

How to do it:

1. Decide whether testimonials should be included at launch.
2. If not, keep the placeholder or remove the section from `app/page.tsx`.
3. If yes, collect real approved testimonials.
4. Confirm whether names, initials, or anonymous labels are allowed.
5. Replace the placeholder with approved review content.
6. If using Google Reviews later, build a verified integration instead of manually inventing ratings.

Do not:

- Add fake quotes.
- Add fake star ratings.
- Add "4.9", "500+ reviews", or similar claims unless verified.
- Add patient names without permission.

## Step 7: Finalize Legal, Privacy, And Cookie Copy

Goal: make legal pages production-ready.

Files to edit:

- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`
- `app/cookie-policy/page.tsx`
- `docs/security-checklist.md`

What to confirm:

- What form data is collected.
- Where form submissions are sent.
- Whether any data is stored.
- Which email provider is used.
- Which bot protection provider is used.
- Which analytics tools are used.
- Ethiopia-specific privacy requirements.
- Healthcare privacy requirements.

How to do it:

1. Send the current legal pages to qualified legal counsel.
2. Replace placeholder legal copy with reviewed final copy.
3. Confirm the site does not claim HIPAA compliance publicly.
4. Use language like "privacy-conscious" or "HIPAA-ready pending provider and legal verification" only if accurate.
5. If analytics are enabled later, make sure cookie consent is implemented before loading analytics.

Do not:

- Claim HIPAA compliance unless providers and legal review confirm it.
- Collect detailed medical history in v1.
- Add tracking scripts before consent is handled.

## Step 8: Configure Turnstile, Resend, And Production Rate Limiting

Goal: make forms production-ready and safer against spam.

Files to check:

- `.env.example`
- `lib/security.ts`
- `lib/rate-limit.ts`
- `app/api/appointment/route.ts`
- `app/api/contact/route.ts`
- `components/forms/AppointmentForm.tsx`
- `components/forms/ContactForm.tsx`

Environment variables:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `CONTACT_FORM_TO_EMAIL`
- `RATE_LIMIT_REDIS_REST_URL`
- `RATE_LIMIT_REDIS_REST_TOKEN`

How to do it:

1. Create a Cloudflare Turnstile site.
2. Add the public site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
3. Add the secret key to `TURNSTILE_SECRET_KEY`.
4. Replace the hidden development token in the forms with the real Turnstile widget.
5. Create and verify a Resend sending domain.
6. Add the Resend API key to `RESEND_API_KEY`.
7. Set `CONTACT_FORM_TO_EMAIL` to the clinic inbox in environment variables only.
8. Set up production rate limiting, such as Upstash Redis.
9. Add the Upstash URL and token to the rate limit environment variables.
10. Test appointment and contact forms in production preview before launch.

Do not:

- Commit real secrets to the repository.
- Put the clinic email in frontend HTML.
- Send forms directly from the browser.
- Skip server-side validation.

## Step 9: Add Final Open Graph Image, Favicon, And App Icons

Goal: make the site look correct when shared and bookmarked.

Files and folders:

- `public/images/og-placeholder.svg`
- `lib/constants.ts`
- `public/manifest.json`
- `app/layout.tsx`
- `public/`

How to do it:

1. Create a final Open Graph image for social sharing.
2. Recommended size: 1200 x 630.
3. Put it in `public/images/`.
4. Update `ogImage` in `lib/constants.ts`.
5. Generate favicon and app icons from the approved final logo.
6. Update `public/manifest.json` if icon filenames change.
7. Confirm browser tab icon and social preview image show correctly.

Do not:

- Leave the placeholder Open Graph image for production.
- Use blurry or low-resolution icons.
- Generate icons from an outdated logo.

## Step 10: Final Review Before Launch

Goal: catch mistakes before publishing.

Check content:

- No fake testimonials, ratings, credentials, awards, or before/after claims.
- No patient-identifiable images without consent.
- No raw clinic email in frontend HTML.
- No detailed medical history collection.
- No HIPAA compliance claim unless legally verified.
- All placeholder TODOs are either replaced or intentionally kept out of production.

Check UX:

- Hero uses final approved clinic image if available.
- Homepage 360 viewer works and lazy-loads.
- Appointment form works.
- Contact form works.
- Mobile menu works.
- Header, footer, and sticky mobile contact actions are correct.
- Pages are readable on mobile and desktop.

Check SEO:

- Metadata uses final site URL.
- Open Graph image is final.
- Sitemap exists.
- Robots file exists.
- JSON-LD has confirmed address, phone, coordinates, and hours.

Run validation:

```bash
npm.cmd run lint
npm.cmd run build
```

If both commands pass, test the production build locally:

```bash
npm.cmd run start
```

Then open the local URL shown in the terminal and review the site manually.

## Step 11: Deployment Readiness

Before going live:

1. Add production environment variables in the hosting provider.
2. Confirm HTTPS is enabled.
3. Confirm security headers are active.
4. Submit the production URL to the clinic for final review.
5. Test forms using a real clinic inbox.
6. Test Call and WhatsApp links on a phone.
7. Test map directions.
8. Test social sharing preview.
9. Confirm all legal pages are approved.
10. Launch only after final clinic approval.

## Files You Will Most Likely Edit

- `lib/constants.ts`
- `lib/schema.ts`
- `content/faqs.ts`
- `content/services.ts`
- `components/sections/Hero.tsx`
- `components/sections/TeamPreview.tsx`
- `components/sections/TestimonialsPlaceholder.tsx`
- `components/sections/InsideStudioTour.tsx`
- `app/about/page.tsx`
- `app/gallery/page.tsx`
- `app/contact/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/terms/page.tsx`
- `app/cookie-policy/page.tsx`
- `components/forms/AppointmentForm.tsx`
- `components/forms/ContactForm.tsx`
- `lib/security.ts`
- `lib/rate-limit.ts`
- `public/manifest.json`
- `.env.example`

## Simple Launch Order

Use this order if you want the cleanest workflow:

1. Confirm phone, WhatsApp, address, map, hours, and social links.
2. Add final logo.
3. Add final clinic photos.
4. Add final 360 image.
5. Add verified team information.
6. Confirm service and FAQ copy.
7. Decide whether testimonials are ready.
8. Finalize legal/privacy/cookie pages.
9. Configure Turnstile, Resend, and rate limiting.
10. Add Open Graph image, favicon, and app icons.
11. Run lint and build.
12. Test manually on desktop and mobile.
13. Get final clinic approval.
14. Deploy.
