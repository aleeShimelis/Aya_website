import type { Metadata } from "next";
import { LegalDocument, LegalList, LegalSection } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/sections/PageHero";
import { contactActions, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Website Terms | Aya Dental Studio",
  description:
    "Terms governing use of the Aya Dental Studio website, service information, appointment requests, and clinic media.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Website terms"
        title="Terms for using this website."
        description="These terms cover website information, appointment requests, acceptable use, clinic media, and external services."
      />
      <LegalDocument effectiveDate="17 August 2026">
        <LegalSection id="about" title="1. About these terms">
          <p>
            This website is operated for Aya Speciality Dental Clinic and also uses the name Aya
            Dental Studio. By using the website, you agree to these terms and the Privacy and Cookie
            Policies. If you do not agree, do not use the forms or interactive features.
          </p>
          <p>
            A parent or legal guardian should use the website on behalf of a child or any person who
            cannot legally agree to these terms.
          </p>
        </LegalSection>

        <LegalSection id="medical-information" title="2. No diagnosis or emergency service">
          <p>
            Website content is general information. It is not a diagnosis, treatment plan,
            prescription, clinical opinion, or substitute for an examination by a qualified dental
            professional. Service descriptions do not establish that a treatment is suitable for a
            particular person.
          </p>
          <p>
            The website and its forms are not emergency services and are not continuously
            monitored. For severe pain, uncontrolled bleeding, facial swelling, breathing or
            swallowing difficulty, significant trauma, or another urgent condition, seek immediate
            professional or emergency assistance rather than waiting for a website response.
          </p>
        </LegalSection>

        <LegalSection id="services" title="3. Services, examples, and outcomes">
          <p>
            Services, clinicians, hours, prices, equipment, and availability may change. Treatment
            begins only after an appropriate consultation, assessment, informed consent, and direct
            confirmation by the clinic.
          </p>
          <p>
            Photographs and before-and-after examples show individual situations. Results vary and
            are not promises or guarantees. Images may be cropped for layout but are not intended
            to misrepresent a clinical result.
          </p>
        </LegalSection>

        <LegalSection id="appointments" title="4. Appointment requests">
          <p>
            Submitting a form does not create or confirm an appointment, clinician-patient
            relationship, treatment obligation, price, or payment arrangement. An appointment is
            confirmed only when clinic staff directly agree to the date and time. Do not travel to
            the clinic based solely on an automated website message.
          </p>
          <p>
            You are responsible for providing accurate contact information and for promptly telling
            the clinic when your availability changes. Current opening hours and urgent
            availability should be confirmed by phone.
          </p>
        </LegalSection>

        <LegalSection id="forms" title="5. Form use and submitted information">
          <p>
            Public forms are limited to brief administrative communications. Do not submit detailed
            medical histories, diagnostic records, identification documents, payment-card data,
            passwords, unlawful material, or information about another person unless you are
            authorized to do so.
          </p>
          <p>
            You give the clinic permission to use information you submit to respond through your
            selected contact method and administer the requested communication. Personal
            information is otherwise handled under the Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection id="acceptable-use" title="6. Acceptable use">
          <p>You must not:</p>
          <LegalList>
            <li>Attempt to bypass security, Turnstile, rate limits, or access controls.</li>
            <li>Introduce malware, automated spam, harmful code, or excessive traffic.</li>
            <li>Probe, scan, scrape, copy, or extract the website in an unlawful manner.</li>
            <li>Impersonate another person or submit information without authority.</li>
            <li>Use the website to threaten, harass, defraud, or violate another person&apos;s rights.</li>
            <li>Misrepresent clinic content, clinicians, services, reviews, or treatment results.</li>
          </LegalList>
          <p>Access may be restricted when reasonably necessary to protect the clinic, users, or website.</p>
        </LegalSection>

        <LegalSection id="intellectual-property" title="7. Website content and media">
          <p>
            Unless otherwise stated, the website design, wording, logos, clinic photographs, videos,
            graphics, and other original materials belong to Aya Speciality Dental Clinic or are
            used with permission. You may view and share ordinary links for personal, non-commercial
            purposes. Reproduction, commercial use, alteration, or publication requires prior
            permission unless applicable law allows it.
          </p>
          <p>
            Patient-identifiable photographs and clinical case images must not be copied,
            redistributed, used for identification, or processed with facial-recognition or similar
            technology.
          </p>
        </LegalSection>

        <LegalSection id="third-parties" title="8. Third-party services and links">
          <p>
            The website links to or embeds services operated by Cloudflare, Google, WhatsApp,
            Facebook, and Instagram. Those services have their own terms and privacy practices. Aya
            Dental Studio does not control their availability, security, content, or account
            requirements and is not responsible for a third party&apos;s independent conduct.
          </p>
        </LegalSection>

        <LegalSection id="availability" title="9. Website availability and accuracy">
          <p>
            We aim to keep the website accurate and available, but it may contain errors or be
            interrupted for maintenance, provider outages, security events, or circumstances beyond
            the clinic&apos;s control. Information may be corrected or removed without notice. Contact
            the clinic directly before relying on time-sensitive details.
          </p>
        </LegalSection>

        <LegalSection id="liability" title="10. Responsibility and limitation of liability">
          <p>
            Nothing in these terms excludes responsibility that cannot lawfully be excluded,
            including responsibility arising from professional dental care where applicable. To the
            fullest extent permitted by Ethiopian law, Aya Dental Studio is not responsible for
            indirect or consequential loss arising solely from inability to access the website,
            reliance on general website information instead of professional advice, unauthorized
            use, or independent third-party services.
          </p>
        </LegalSection>

        <LegalSection id="law" title="11. Governing law and disputes">
          <p>
            These website terms are governed by the laws of the Federal Democratic Republic of
            Ethiopia. Concerns should first be raised with the clinic so they can be addressed
            promptly. Nothing in these terms limits a right to complain to a regulator or use a
            remedy available under applicable law.
          </p>
        </LegalSection>

        <LegalSection id="changes" title="12. Changes and contact">
          <p>
            We may update these terms to reflect legal, clinical, or website changes. The effective
            date identifies the current version. Questions may be directed to the clinic at
            {" "}<a className="font-semibold text-teal hover:text-charcoal" href={contactActions.callPrimary}>{siteConfig.phonePrimaryDisplay}</a> or
            at {siteConfig.addressFull}.
          </p>
        </LegalSection>
      </LegalDocument>
    </>
  );
}
