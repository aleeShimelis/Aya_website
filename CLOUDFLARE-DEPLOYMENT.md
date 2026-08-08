# Aya Dental Studio: Cloudflare Workers Deployment Runbook

This runbook covers the account work and deployment steps that remain after the local OpenNext migration. It does not contain secrets, invented clinic facts, or an authorization to deploy.

## 1. Current Technical Status

The project is prepared for Cloudflare Workers with:

- Next.js `16.3.0`, React and React DOM `19.2.8`.
- `@opennextjs/cloudflare` `1.20.2` and Wrangler `4.120.0`.
- A successful Next production build and OpenNext Worker build.
- A successful local Workers preview at `http://127.0.0.1:8787`.
- A successful Wrangler dry run. No deployment was performed.
- A compressed Worker upload of `1,335.33 KiB`, below the Workers Free `3 MiB` limit.
- `85` uploaded static assets, below the Free limit of `20,000`.
- A largest static asset of `6.3 MiB`, below the `25 MiB` per-asset limit.
- Static generation for every page, sitemap, and robots route. Only `/api/contact` and `/api/appointment` execute dynamically.
- No `/virtual-tour` route or navigation item.
- A homepage 360 viewer that does not initialize until its section enters a `360px` viewport margin.
- Byte-for-byte delivery of `public/images/virtual-tour/aya-reception-360.jpg`; the Worker preview does not alter or compress it.
- An exact, lossless `32 KiB` delivery copy of the approved logo instead of serving its `1.15 MiB` raster-in-SVG master. The master remains unchanged in the repository.
- Self-hosted, preloaded Latin variable fonts through `next/font/local`: Manrope is `24.3 KiB` and Space Grotesk is `21.8 KiB`.
- Production dependency audit result: zero known npm vulnerabilities.

### Performance evidence

All results below use Lighthouse `12.8.2`; Lighthouse 13 requires a newer local Node patch than the current `22.12.0` installation.

| Runtime/profile | Performance | FCP | LCP | TBT | CLS | A11y/BP/SEO |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Original local OpenNext mobile | 47 | 1.22 s | 3.93 s | 2,612 ms | 0.160 | 100/100/100 |
| Optimized local OpenNext mobile, run 1 | 81 | 1.10 s | 3.65 s | 339 ms | 0 | 100/100/100 |
| Optimized local OpenNext mobile, run 2 | 82 | 1.13 s | 3.45 s | 321 ms | 0 | 100/100/100 |
| Optimized local OpenNext desktop | 100 | 0.31 s | 0.65 s | 0 ms | 0 | 100/100/100 |
| Optimized local Next server mobile control | 92 | 1.00 s | 3.35 s | 81 ms | 0 | Performance only |

The LCP element is the hero image. It is discovered immediately, preloaded, carries `fetchpriority="high"`, and is delivered as a roughly `28 KiB` WebP in the OpenNext mobile test. The local Cloudflare Images emulator spent about `1.4-3.1 s` serving that small transformed image across runs; the plain Next server served its transformed image in about `0.47 s`. This runtime difference explains much of the remaining local score gap. Repeat Lighthouse against a real Cloudflare preview before launch because local Workerd wall time is not representative of edge cache performance.

Lighthouse 12 also produced inconsistent total-byte diagnostics in the optimized runs: its headline ranged from `8.6-20 MiB` while the transfer items it listed totaled only about `0.31-0.38 MiB`. Use the request table and actual asset sizes, not that contradictory headline, for this local audit.

### Why Next.js 16 was necessary

- Next.js `14.2.35` is no longer supported by the Next.js team, and OpenNext states that Next.js 14 support was dropped in Q1 2026. Staying on 14 would put the deployment on an unsupported framework/adapter combination.
- The authorized target, Next.js `16.3.0`, is supported by OpenNext and uses the stable Next.js adapter API introduced in Next.js 16.2.
- The previous production dependency audit reported two high-severity findings. After upgrading Next, React, and the matching tooling, `npm audit --omit=dev` reports zero known vulnerabilities.
- React `19.2.8` is the matching React line for this Next.js 16 App Router application.

### Upgrade behavior risks and mitigations

- **Async request APIs:** Next.js 16 requires async route `params`. Service and blog dynamic routes were migrated and all generated service paths return `200`; unknown slugs return `404`.
- **React 19 effects:** effect cleanup and dependency behavior can expose stale-state bugs. The 360 viewer lifecycle was corrected and tested through load, ready state, controls, and teardown-compatible navigation.
- **Turbopack default:** production builds now use Turbopack. Next, OpenNext, route generation, and the final Worker bundle all build successfully; CI should still build on Linux because OpenNext warns that Windows support is not guaranteed.
- **Lint command removal:** `next lint` no longer exists. The repository now uses ESLint 9 directly and ignores generated Worker bundles.
- **Middleware to proxy:** Next.js 16's Node.js `proxy` convention is not yet supported by OpenNext. Security headers were moved to `next.config.mjs` and verified on the local Worker response.
- **Static dynamic routes:** `dynamicParams = false` keeps unknown service paths at `404`. Adding a service requires a new production build so its generated route is included.
- **Image optimization:** Cloudflare Images becomes an operational quota dependency for normal `next/image` assets. The logo and 360 panorama bypass it deliberately; globally disabling optimization would serve several multi-megabyte originals and is not acceptable.
- **Preview command:** use `opennextjs-cloudflare preview`, not raw `wrangler dev`, because the OpenNext command populates the prerendered dynamic-route cache first.

### Cloudflare Images cost and Free-plan decision

The current `IMAGES` binding is the supported OpenNext implementation of native Next.js image optimization and is safe to keep on Workers Free. The repository has only `18` public image files, with the logo and panorama delivered directly; the finite responsive transformations used by the remaining static images should stay far below `5,000` unique transformations per month.

Cloudflare Images can produce separate charges only after the account owner intentionally enables Images Paid. Images Free includes `5,000` unique transformations per month, does not auto-bill overages, continues serving existing cached variants after the limit, and returns error `9422` for new transformations. Images Paid includes the first `5,000`, then charges `$0.50` per `1,000` unique transformations. Images storage and delivery charges apply only when files are uploaded into Cloudflare Images storage; this project does not do that. Monitor Images usage and do not enable the paid plan without owner approval.

### Free-plan conclusion

The project fits the measurable Workers Free deployment limits. The remaining conditions are operational:

- Free-plan CPU is limited to `10 ms` per invocation. Local preview measures wall time, not Cloudflare CPU time, so production CPU must be checked in Workers Observability after a controlled deployment.
- Free-plan request volume is limited to the current Cloudflare allowance. Confirm projected traffic and monitor usage after launch.
- Cloudflare Images Free currently includes up to `5,000` unique transformations per month. The 360 panorama and logo do not use Images transformations, but normal `next/image` assets do.
- The optimized local OpenNext mobile Lighthouse score is `82`; desktop is `100`. Repeat against a real Cloudflare preview before accepting final production performance.

Official references:

- [OpenNext Cloudflare adapter](https://opennext.js.org/cloudflare)
- [OpenNext setup](https://opennext.js.org/cloudflare/get-started)
- [Workers limits](https://developers.cloudflare.com/workers/platform/limits/)
- [Cloudflare Images pricing](https://developers.cloudflare.com/images/pricing/)

## 2. Owner Decisions Required Before Launch

Do not enable public form submission until all of these decisions are recorded:

1. Confirm the canonical production hostname. Do not assume the hostname currently present in the repository is controlled or final.
2. Confirm the real clinic inbox and a domain-authorized sender address.
3. Confirm the clinic's legal name, contact details, opening hours, map coordinates, clinician profile, and social links. Placeholders remain in the website.
4. Obtain healthcare privacy and Ethiopia-specific privacy/legal approval for every submitted field, retention period, processor, cross-border transfer, privacy notice, and incident process.
5. Obtain written approval for Cloudflare, Upstash, and the selected email provider as processors. Confirm whether the required contracts, DPA, BAA, or local equivalent are available and sufficient. Do not describe Resend as healthcare-approved without that review.
6. Decide whether free-text form messages may contain clinical or health information. If not, revise the field and on-screen instruction before enabling delivery.
7. Decide who owns production access, secret rotation, inbox monitoring, and incident response.

## 3. Accounts and Services

Complete these in order. Use separate production and development credentials.

### 3.1 Cloudflare account and DNS zone

1. Sign in to the Cloudflare account that will own the clinic website.
2. Add and activate the confirmed domain as a Cloudflare zone if it is not already active.
3. Confirm account recovery, multi-factor authentication, and at least two authorized owners.
4. In **Workers & Pages**, confirm the account is on the Workers Free plan.
5. Do not add the production Custom Domain until the `workers.dev` deployment has passed the smoke tests in section 7.

### 3.2 Turnstile

1. Open **Cloudflare Dashboard > Turnstile > Add widget**.
2. Give it a production-specific name.
3. Select **Managed** mode.
4. Add only the confirmed production hostnames, without protocols or paths.
5. Save the public site key as `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
6. Save the secret key as `TURNSTILE_SECRET_KEY`. Never place it in a `NEXT_PUBLIC_` variable.
7. Set `TURNSTILE_ALLOWED_HOSTNAMES` to the same approved hostname list, comma-separated.
8. Create a separate development widget or use Cloudflare's documented test keys for local testing.

The application already validates each token server-side, checks the expected action (`contact` or `appointment`), checks the returned hostname, and rejects reused, invalid, or unavailable verification.

Reference: [Turnstile setup and mandatory Siteverify validation](https://developers.cloudflare.com/turnstile/get-started/).

### 3.3 Upstash Redis

1. Create an Upstash account owned by the organization.
2. Create a Redis database dedicated to production rate limiting.
3. Select a region only after the privacy review approves its data location; choose the nearest approved available region.
4. Open the database's **REST API** section.
5. Copy the HTTPS REST endpoint into `RATE_LIMIT_REDIS_REST_URL`.
6. Copy the Standard REST token into `RATE_LIMIT_REDIS_REST_TOKEN`. Rate limiting writes counters, so the read-only token is insufficient.
7. Generate a separate high-entropy `RATE_LIMIT_HASH_SECRET`. One PowerShell option is:

   ```powershell
   [Convert]::ToBase64String([Security.Cryptography.RandomNumberGenerator]::GetBytes(48))
   ```

8. Store the result only as `RATE_LIMIT_HASH_SECRET`. The application HMACs IP addresses before using them as Redis identifiers.

Reference: [Upstash REST credentials and Workers compatibility](https://upstash.com/docs/redis/features/restapi).

### 3.4 Resend or an approved replacement

The current implementation supports Resend through direct HTTPS requests. Legal approval is still required.

1. Create an organization-owned Resend account.
2. Add a confirmed sending domain or subdomain.
3. Add the exact SPF and DKIM records Resend supplies to Cloudflare DNS.
4. Wait until the domain is shown as verified. Add DMARC according to the organization's email policy.
5. Create a **Sending access** API key restricted to the verified domain.
6. Store it as `RESEND_API_KEY`.
7. Set `FORM_FROM_EMAIL` to an approved sender on the verified domain.
8. Set `CONTACT_FORM_TO_EMAIL` to the approved monitored clinic inbox.
9. Confirm retention, deletion, staff access, breach response, and any required processor agreement before sending real patient data.

References: [Resend domain verification](https://resend.com/docs/dashboard/domains/introduction) and [sending-only API keys](https://resend.com/docs/dashboard/api-keys/introduction).

If Resend is not legally approved, do not set `FORM_DELIVERY_PROVIDER=resend`. A replacement provider must be implemented and tested in `lib/form-delivery.ts` before launch.

## 4. Environment Variable Matrix

### Build-time public values

These values are compiled into the client bundle and must be available while `opennextjs-cloudflare build` runs:

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Exact canonical HTTPS origin, no trailing path. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Yes for forms | Public production Turnstile site key. |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | No | Keep empty until cookie consent is implemented and approved. |

### Runtime secrets/configuration

| Variable | Storage | Required for forms |
| --- | --- | --- |
| `TURNSTILE_SECRET_KEY` | Cloudflare secret | Yes |
| `TURNSTILE_ALLOWED_HOSTNAMES` | Secret or protected runtime variable | Yes |
| `RESEND_API_KEY` | Cloudflare secret | Yes when using Resend |
| `CONTACT_FORM_TO_EMAIL` | Secret or protected runtime variable | Yes |
| `FORM_FROM_EMAIL` | Secret or protected runtime variable | Yes |
| `RATE_LIMIT_REDIS_REST_URL` | Cloudflare secret | Yes |
| `RATE_LIMIT_REDIS_REST_TOKEN` | Cloudflare secret | Yes |
| `RATE_LIMIT_HASH_SECRET` | Cloudflare secret | Yes |

The following non-secret Worker variables are already defined in `wrangler.jsonc`:

```text
FORM_DELIVERY_PROVIDER=resend
RATE_LIMIT_IP_HEADER=cf-connecting-ip
```

Cloudflare exposes secrets through `process.env` because `nodejs_compat` is enabled. Missing form credentials intentionally produce `503` instead of a false success response.

## 5. Local Release Validation

Install Node `22.13.0` or newer before the final operator run. The current machine uses `22.12.0`, which works for the application but is one patch below an ESLint helper's preferred engine range and below Lighthouse 13's requirement.

From the repository root:

```powershell
npm ci
npm run lint
npm run typecheck
npm run build
npm run build:cloudflare
npm exec wrangler deploy -- --dry-run
```

Create an ignored `.dev.vars` from `.dev.vars.example` only when approved development credentials are available. Then start the local Worker preview:

```powershell
npm run preview:cloudflare
```

Expected behavior without credentials:

- Public pages return `200`.
- `/robots.txt` and `/sitemap.xml` return `200`.
- `/virtual-tour` returns `404`.
- Form API POST requests return `503` with the clinic fallback message.
- The 360 canvas is absent at page load and appears only near its section.

## 6. First Deployment Procedure

These commands deploy. They are intentionally not executed as part of this preparation.

### 6.1 Authenticate

```powershell
npm exec wrangler login
npm exec wrangler whoami
```

Confirm that `whoami` shows the intended organization account.

### 6.2 Supply build-time public values

In the same PowerShell session used for the build, set only confirmed values:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://<confirmed-canonical-hostname>"
$env:NEXT_PUBLIC_TURNSTILE_SITE_KEY="<production-site-key>"
$env:NEXT_PUBLIC_GA4_MEASUREMENT_ID=""
```

### 6.3 Build, check size, and deploy to `workers.dev`

```powershell
npm ci
npm run lint
npm run typecheck
npm run build:cloudflare
npm exec wrangler deploy -- --dry-run
npm exec wrangler deploy
```

Record the uploaded compressed size. Stop if it exceeds the current Free-plan limit.

### 6.4 Add runtime secrets

Run each command and paste its value only into Wrangler's hidden prompt:

```powershell
npm exec wrangler secret put TURNSTILE_SECRET_KEY
npm exec wrangler secret put TURNSTILE_ALLOWED_HOSTNAMES
npm exec wrangler secret put RESEND_API_KEY
npm exec wrangler secret put CONTACT_FORM_TO_EMAIL
npm exec wrangler secret put FORM_FROM_EMAIL
npm exec wrangler secret put RATE_LIMIT_REDIS_REST_URL
npm exec wrangler secret put RATE_LIMIT_REDIS_REST_TOKEN
npm exec wrangler secret put RATE_LIMIT_HASH_SECRET
```

`wrangler secret put` creates a new Worker version. Review the version and deployment in Cloudflare after setting the secrets. Never paste secrets into `wrangler.jsonc`, a committed `.env` file, an issue, or a build log.

Reference: [Cloudflare Workers secrets](https://developers.cloudflare.com/workers/configuration/secrets/).

## 7. Pre-domain Smoke Test

Test the generated `workers.dev` URL before attaching the clinic domain:

1. Load Home, About, Services, one service detail, Gallery, FAQ, Contact, and all legal pages.
2. Confirm `/robots.txt` and `/sitemap.xml` use the confirmed canonical hostname.
3. Confirm `/virtual-tour` is `404` and absent from desktop/mobile navigation.
4. Confirm security headers: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
5. Confirm the hero, logo, service photos, clinician photo, About images, and Gallery images render.
6. Confirm the 360 image is sharp, starts fully zoomed out, and its file hash/byte count matches the source.
7. Confirm the 360 network request is absent at initial page load and occurs only near the section.
8. Test both forms using clearly fictional non-clinical data. Confirm one email per submission and no email for invalid Turnstile tokens.
9. Submit more than five requests within ten minutes from one client and verify `429` plus `Retry-After`.
10. Check Turnstile Analytics, Upstash counters, Resend logs, and Workers logs for the same test window.
11. Run current Lighthouse mobile and desktop audits against this Cloudflare URL. Do not accept the local emulator's performance result as the final production score.

## 8. Attach the Production Domain

After smoke tests and legal approval:

1. In Cloudflare, open **Workers & Pages > aya-dental-studio**.
2. Open **Settings > Domains & Routes**.
3. Select **Add > Custom Domain**.
4. Enter the confirmed canonical hostname.
5. Select **Add Custom Domain** and wait for DNS/certificate activation.
6. Configure the alternate `www` or apex hostname as a Cloudflare redirect to the canonical hostname. Do not serve duplicate content on both.
7. Recheck the Turnstile hostname allowlist and `TURNSTILE_ALLOWED_HOSTNAMES`.
8. Rebuild if `NEXT_PUBLIC_SITE_URL` or the public Turnstile site key changed.

Reference: [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).

## 9. Optional Git-Based Deployments

For Cloudflare Workers Builds:

1. Connect the approved GitHub or GitLab repository from **Workers & Pages**.
2. Set the production branch.
3. Set the root directory to this project if the repository is a monorepo; otherwise leave it at the repository root.
4. Use `npm run build:cloudflare` as the build command.
5. Use `npm exec wrangler deploy` as the production deploy command.
6. Add the three `NEXT_PUBLIC_*` values under **Settings > Build > Build variables and secrets**. These build values are not runtime bindings.
7. Add server-only values under **Settings > Variables & Secrets**, marking every credential/token as secret.
8. Keep production and preview Turnstile keys separate if branch previews will submit forms.

Reference: [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).

## 10. Post-deployment Monitoring and Rollback

1. Open Workers Observability and inspect invocation errors, CPU time, subrequests, and request volume.
2. Verify warm static page requests remain within the Free CPU limit. Local wall time is not a substitute for this measurement.
3. Verify API calls remain below the subrequest and connection limits. Each successful form submission uses Upstash, Turnstile, and email-provider HTTPS calls.
4. Monitor Images unique transformations against the `5,000` monthly Free allowance.
5. Monitor Upstash and Resend quotas independently; they are not included in Workers Free.
6. Configure Cloudflare account notifications for Worker errors and usage where available.
7. Record the last known good Worker version. Use Cloudflare's version rollback controls if the production version regresses.
8. Rotate Turnstile, Upstash, Resend, and hash secrets after any suspected exposure and according to the approved schedule.

## 11. Remaining Launch Gates

- Replace every visible `TODO` and placeholder with verified, approved information.
- Complete healthcare and Ethiopia-specific legal/privacy reviews.
- Confirm the canonical domain and both DNS hostnames.
- Confirm Google Business Profile and the exact Google Maps pin/coordinates.
- Set up Google Search Console and submit `/sitemap.xml` after the canonical domain is live.
- Implement cookie consent before adding GA4. Keep `NEXT_PUBLIC_GA4_MEASUREMENT_ID` empty until then.
- Resolve the remaining mobile performance work, especially the embedded-raster `1.15 MiB` logo and font-driven layout shift, then rerun current Lighthouse on a Cloudflare URL.
- Run a real end-to-end form test only after approved Turnstile, Upstash, and email credentials are supplied.
