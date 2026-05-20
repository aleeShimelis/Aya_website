# Security Checklist

- Production assumes HTTPS only.
- Security headers are implemented in `middleware.ts`: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, and production-only Strict-Transport-Security.
- Forms are submitted to server-side API routes only.
- Form inputs are validated and sanitized with Zod.
- Basic in-memory rate limiting is present; TODO: replace with Upstash or equivalent before production.
- Cloudflare Turnstile placeholder is present; TODO: configure real site key and secret.
- Resend placeholder is present; TODO: configure provider credentials and verified sender.
- Clinic email is not exposed in frontend HTML.
- No provider secrets are hardcoded.
- Environment variables are listed in `.env.example`.
- V1 forms do not collect detailed medical history.
- Do not claim HIPAA compliance publicly. Use privacy-conscious / HIPAA-ready language pending provider selection, legal review, and Ethiopia-specific verification.
