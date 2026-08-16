import type { Metadata } from "next";
import { LegalDocument, LegalList, LegalSection } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/sections/PageHero";
import { contactActions, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy | Aya Dental Studio",
  description:
    "How Aya Dental Studio uses essential security technology, embedded maps, and optional analytics on its website.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie policy"
        title="Clear choices about website technology."
        description="The current website uses essential security services and an embedded map. Advertising and analytics tracking are disabled."
      />
      <LegalDocument effectiveDate="17 August 2026">
        <LegalSection id="about-cookies" title="1. What cookies and similar technologies are">
          <p>
            Cookies are small data files that a website or third-party service may place in a
            browser. Similar technologies include local storage, short-lived tokens, pixels, and
            device or browser signals. They can support security, remember settings, measure use, or
            enable embedded services.
          </p>
        </LegalSection>

        <LegalSection id="current-use" title="2. What this website currently uses">
          <LegalList>
            <li>
              <strong className="text-charcoal">Cloudflare hosting and security:</strong> Cloudflare
              processes network and request information needed to deliver and protect the website.
            </li>
            <li>
              <strong className="text-charcoal">Cloudflare Turnstile:</strong> the contact page loads
              a bot-verification widget. It evaluates browser and device signals and generates a
              short-lived token that the server verifies before accepting a form request.
            </li>
            <li>
              <strong className="text-charcoal">Google Maps:</strong> the contact page contains a
              lazily loaded Google map. When the map loads, Google may receive your IP address,
              browser information, and the website&apos;s domain, and may use cookies or similar
              technology under Google&apos;s policies.
            </li>
          </LegalList>
          <p>
            Aya Dental Studio does not currently use advertising cookies, remarketing pixels, or
            Google Analytics. Social-media content is not embedded; Facebook and Instagram receive
            information only after you choose to follow an external link.
          </p>
        </LegalSection>

        <LegalSection id="essential" title="3. Essential technology">
          <p>
            Hosting, security, and bot-verification technology is used to provide the website,
            prevent automated abuse, and protect form endpoints. Because these functions are
            necessary for security and service delivery, they are not treated as optional analytics
            or advertising. If Turnstile is unavailable, the form remains disabled and you can call
            or use WhatsApp instead.
          </p>
        </LegalSection>

        <LegalSection id="embedded-content" title="4. Embedded map">
          <p>
            Google Maps is third-party content. You can avoid loading the embedded map by not
            visiting or scrolling to it on the contact page. The clinic&apos;s address and a direct map
            link are also available without interacting with the embedded frame. Google&apos;s handling
            of information is governed by its own privacy and cookie policies.
          </p>
        </LegalSection>

        <LegalSection id="analytics" title="5. Analytics and future consent">
          <p>
            Google Analytics 4 is disabled and no analytics script is included in the current
            website. Analytics will not be enabled unless a consent mechanism first prevents it
            from loading and allows visitors to make and later change a clear choice. This policy
            will be updated before any new analytics or advertising category is activated.
          </p>
        </LegalSection>

        <LegalSection id="controls" title="6. Your controls">
          <p>
            Browser settings can block, limit, or delete cookies and site storage. Blocking
            essential technology may prevent forms, maps, or security checks from working. You can
            still contact the clinic by calling <a className="font-semibold text-teal hover:text-charcoal" href={contactActions.callPrimary}>{siteConfig.phonePrimaryDisplay}</a> or
            visiting {siteConfig.addressShort}.
          </p>
        </LegalSection>

        <LegalSection id="updates" title="7. Updates and contact">
          <p>
            We may revise this policy when website technology or legal requirements change. The
            effective date identifies the current version. Questions may be directed to Aya
            Speciality Dental Clinic using the contact details published on this website.
          </p>
        </LegalSection>
      </LegalDocument>
    </>
  );
}
