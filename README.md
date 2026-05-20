# Aya Dental Studio Website

Production-ready Next.js App Router site for Aya Dental Studio / Aya Speciality Dental Clinic in Addis Ababa.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS with CSS-variable design tokens
- Zod validation
- Server-side API routes
- Cloudflare Turnstile placeholders
- Resend placeholders

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill provider values. Do not commit `.env.local`.

## Security And Privacy

- Forms are handled server-side.
- Inputs are validated and sanitized with Zod.
- Bot protection and email delivery are provider placeholders until credentials are configured.
- Clinic email is not exposed in frontend HTML.
- V1 forms do not collect detailed medical history.
- The site is structured for privacy-conscious, HIPAA-ready workflows, but it does not claim HIPAA compliance.
- TODO: complete provider selection, healthcare privacy/legal review, and Ethiopia-specific regulatory review.

## Local SEO Checklist

- Verify Google Business Profile.
- Confirm Google Maps pin, address, coordinates, and hours.
- Set up Google Search Console.
- Submit `sitemap.xml`.
- Add verified social profiles.
- Add local citations only with consistent name, address, and phone.

## Media Checklist

- Replace placeholders with approved clinic photos.
- Generate favicon and app icons from the final logo.
- Prepare one optimized equirectangular 360 JPEG, about 8 MB maximum.
- Document staff consent.
- Do not publish patient-identifiable photos without written consent.

## Remaining Launch TODOs

- Final logo asset in `public/logo/aya-dental-studio-logo.svg`.
- Real clinic photography.
- Verified dentist credentials, staff names, affiliations, and certifications.
- Opening hours, payment methods, insurance details, and emergency policy.
- Verified testimonials or Google Reviews integration.
- Amharic support using approved translations.
- Backup strategy and uptime monitoring.
