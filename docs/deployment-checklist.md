# Deployment Checklist

- Confirm final logo, favicon, app icons, and manifest assets.
- Replace placeholder clinic photography with optimized real images.
- Prepare one optimized equirectangular 360 JPEG at `public/images/virtual-tour/aya-reception-360.jpg`, about 8 MB maximum or less if quality allows.
- Document staff consent and ensure no patients are visible without written consent.
- Configure Cloudflare Turnstile or approved bot protection.
- Configure Resend, SendGrid, or approved healthcare-appropriate form delivery.
- Replace in-memory rate limiting with Upstash or production equivalent.
- Complete healthcare privacy/legal review.
- Complete Ethiopia-specific data privacy/legal review.
- Verify Google Business Profile.
- Set up Google Search Console and submit sitemap.
- Confirm Google Maps pin and coordinates.
- Configure consent-gated GA4 only after cookie consent is implemented.
- Run lint, typecheck, build, and Lighthouse checks before launch.
- Confirm there is no separate `/virtual-tour` page or navigation item.
- Confirm the homepage embedded 360 viewer lazy-loads only when the section nears the viewport.

===============================================================================================
Already Complete
No /virtual-tour page exists.
No virtual-tour navigation item exists.
The homepage 360 viewer lazy-loads when it comes within 360px of the viewport.
Sitemap and robots files already exist.
GA4 is currently disabled.
Lint passes.
Typecheck passes.

Launch Blockers
Forms and security
Turnstile is only a placeholder; the real widget is missing.
Server verification currently allows submissions when no secret is configured.
Rate limiting is memory-only.
Form APIs report success even if email delivery is skipped or rejected.
No production environment values are configured.
Cloudflare requires real server-side token validation, including checking the hostname/action where appropriate. Cloudflare Turnstile documentation

Email provider decision
I would not automatically use SendGrid: Twilio explicitly says SendGrid is not a HIPAA-eligible service. SendGrid documentation
Resend has a DPA and security controls, but its DPA describes sensitive data as “not applicable” and primary processing in the US. It therefore needs legal approval before receiving appointment details. Resend DPA
Safest design: minimize form information and send only callback-request details, with no diagnosis, medical history, or treatment details.

Privacy and legal
The privacy policy and terms are visibly marked as placeholders.
Ethiopia’s Personal Data Protection Proclamation No. 1321/2024 needs to be considered, especially for health-related information and overseas providers.
This must be completed by qualified Ethiopian counsel; I can then implement the approved wording and retention/consent rules.

Business verification
Google Business Profile verification requires clinic account access.
Search Console submission requires domain ownership.
The map currently uses a text search, while structured data coordinates remain TODO.
Opening hours, social links, clinician information, several FAQs, testimonials, and some legal content still contain launch placeholders.

Recommended Order
Implement real Turnstile and strict production configuration.
Add Upstash distributed rate limiting.
Fix form delivery so failures never appear successful.
Select and legally approve the email/data-processing provider.
Finalize privacy, retention, consent, and Ethiopia-specific disclosures.
Confirm Maps coordinates, hours, clinic profile, and remaining content.
Verify Business Profile and submit the sitemap in Search Console.
Add cookie consent, then consent-gated GA4.
Run the final lint, typecheck, production build, and Lighthouse checks.
