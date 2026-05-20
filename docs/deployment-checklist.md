# Deployment Checklist

- Confirm final logo, favicon, app icons, and manifest assets.
- Replace placeholder clinic photography with optimized real images.
- Prepare one optimized equirectangular 360 JPEG, about 8 MB maximum.
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
