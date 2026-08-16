import type { Metadata } from "next";
import { LegalDocument, LegalList, LegalSection } from "@/components/legal/LegalDocument";
import { PageHero } from "@/components/sections/PageHero";
import { contactActions, siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Aya Dental Studio",
  description:
    "How Aya Speciality Dental Clinic collects, uses, protects, and shares information through the Aya Dental Studio website.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy policy"
        title="How we handle website information."
        description="This notice explains the personal information processed through the Aya Dental Studio website and the choices available to you."
      />
      <LegalDocument effectiveDate="17 August 2026">
        <LegalSection id="who-we-are" title="1. Who is responsible for your information">
          <p>
            Aya Speciality Dental Clinic, also presented on this website as Aya Dental Studio, is
            responsible for deciding why and how personal information submitted through this
            website is used.
          </p>
          <p>
            The clinic is located at {siteConfig.addressFull}. Privacy questions and requests may
            be made by calling <a className="font-semibold text-teal hover:text-charcoal" href={contactActions.callPrimary}>{siteConfig.phonePrimaryDisplay}</a>,
            contacting the clinic through its published channels, or visiting the clinic in person.
            Do not send medical records or detailed health information through social media or
            WhatsApp.
          </p>
        </LegalSection>

        <LegalSection id="scope" title="2. Scope of this policy">
          <p>
            This policy applies to visits to this website, use of its contact and appointment
            request forms, and interactions with the embedded map and bot-protection features. It
            does not replace the clinic&apos;s separate notices and consent processes for dental care,
            patient records, imaging, prescriptions, billing, or treatment.
          </p>
        </LegalSection>

        <LegalSection id="information-collected" title="3. Information we collect">
          <p>Depending on how you use the website, we may process:</p>
          <LegalList>
            <li>Your name and telephone number.</li>
            <li>Your preferred contact method.</li>
            <li>The dental service and appointment date you request.</li>
            <li>A short message that you choose to provide.</li>
            <li>Your confirmation that you have read and accepted this privacy notice.</li>
            <li>
              Technical and security information such as request time, IP address, request headers,
              rate-limit identifiers, Turnstile tokens, and the result of bot verification.
            </li>
            <li>
              Basic device or browser signals processed by Cloudflare when its hosting, security,
              or Turnstile services are used.
            </li>
          </LegalList>
          <p>
            The website does not request payment-card details, government identification numbers,
            passwords, full medical histories, diagnostic records, or dental images through its
            public forms.
          </p>
        </LegalSection>

        <LegalSection id="health-information" title="4. Health information and emergencies">
          <p>
            Physical or mental health information is sensitive personal data under Ethiopia&apos;s
            Personal Data Protection Proclamation No. 1321/2024. Please keep form messages brief
            and do not submit diagnoses, medical histories, test results, prescriptions, or other
            detailed clinical information through this website.
          </p>
          <p>
            If a message incidentally contains health information, the clinic will limit its use to
            responding to the request, arranging appropriate follow-up, protecting vital interests,
            or meeting applicable legal and professional obligations. The forms are not monitored
            as emergency services. For urgent concerns, call the clinic or seek appropriate
            emergency care.
          </p>
        </LegalSection>

        <LegalSection id="purposes" title="5. Why we use information">
          <p>We use website information only as reasonably necessary to:</p>
          <LegalList>
            <li>Respond to questions and appointment requests.</li>
            <li>Contact you through the method you selected.</li>
            <li>Confirm clinic availability and prepare for a requested visit.</li>
            <li>Protect the forms and website from spam, abuse, fraud, and security threats.</li>
            <li>Operate, troubleshoot, and maintain the website.</li>
            <li>Comply with legal, regulatory, professional, and record-keeping obligations.</li>
            <li>Establish, exercise, or defend legal claims when necessary.</li>
          </LegalList>
          <p>
            Processing is based, as applicable, on your consent, steps you request before receiving
            a service, the clinic&apos;s legitimate security and operational interests where permitted,
            protection of vital interests, medical-treatment grounds, and compliance with law.
          </p>
        </LegalSection>

        <LegalSection id="sharing" title="6. Service providers and disclosure">
          <p>The website currently relies on the following service categories:</p>
          <LegalList>
            <li>
              <strong className="text-charcoal">Cloudflare:</strong> website hosting, delivery,
              security, and Turnstile bot verification.
            </li>
            <li>
              <strong className="text-charcoal">Google Maps:</strong> an embedded clinic map on the
              contact page. Google receives information directly from your browser when the map
              loads.
            </li>
            <li>
              <strong className="text-charcoal">Approved form infrastructure:</strong> the website
              will accept production submissions only after approved rate-limiting and email
              delivery providers are configured. This notice will be updated to identify material
              changes before those providers begin processing submissions.
            </li>
          </LegalList>
          <p>
            Access inside the clinic is limited to people who need the information to respond or
            administer the requested service. Information may also be disclosed when required by
            law, to regulators or professional advisers, to protect a person&apos;s vital interests, or
            in connection with a lawful organizational transfer. We do not sell personal
            information or provide it to advertisers.
          </p>
        </LegalSection>

        <LegalSection id="international-transfers" title="7. International processing">
          <p>
            Cloudflare, Google, and any approved infrastructure provider may process technical or
            submitted information in countries outside Ethiopia. Aya Dental Studio will use such
            providers only where the clinic has assessed the processing, documented an applicable
            legal transfer basis, and adopted the contractual, technical, and organizational
            safeguards required by Ethiopian law. Locally collected personal data will be handled
            in accordance with applicable Ethiopian data-sovereignty and transfer requirements.
          </p>
        </LegalSection>

        <LegalSection id="retention" title="8. How long information is kept">
          <LegalList>
            <li>
              General website inquiries and unsuccessful appointment requests are normally deleted
              or anonymized within 12 months after the last related communication.
            </li>
            <li>
              Short-lived verification tokens are used to validate a request and are not retained
              by the website as patient records.
            </li>
            <li>
              Security and rate-limit records are kept only for the period needed to prevent abuse,
              investigate an incident, or meet legal obligations.
            </li>
            <li>
              If an inquiry leads to treatment, relevant information may become part of a separate
              clinical record and be retained under the clinic&apos;s clinical and legal retention
              requirements.
            </li>
          </LegalList>
          <p>
            Information may be kept longer when required by law, necessary for a dispute or legal
            claim, or requested by a competent authority. It is then deleted, anonymized, or
            securely archived when the applicable purpose ends.
          </p>
        </LegalSection>

        <LegalSection id="security" title="9. Security and breach response">
          <p>
            The website uses encrypted HTTPS connections, restrictive security headers, same-origin
            request checks, input validation, request-size limits, bot verification, rate limiting,
            and restricted administrative access. No internet transmission or storage system can be
            guaranteed completely secure.
          </p>
          <p>
            Suspected personal-data incidents are assessed, contained, documented, and reported to
            the Ethiopian Communications Authority and affected individuals when notification is
            required by applicable law.
          </p>
        </LegalSection>

        <LegalSection id="rights" title="10. Your privacy rights">
          <p>
            Subject to applicable exceptions, Ethiopian law may give you rights to be informed; to
            request access, correction, erasure, restriction, or portability; to object to certain
            processing; to withdraw consent without affecting earlier lawful processing; and not to
            be subject to qualifying solely automated decisions. This website does not make
            treatment or eligibility decisions using automated profiling.
          </p>
          <p>
            To exercise a right, contact the clinic using the details in section 1. We may need to
            verify your identity and authority before acting. You may also submit a complaint to the
            <a
              className="font-semibold text-teal hover:text-charcoal"
              href="https://pdp.eca.et/"
              target="_blank"
              rel="noreferrer"
            > Ethiopian Communications Authority Personal Data Protection service</a>.
          </p>
        </LegalSection>

        <LegalSection id="children" title="11. Children and guardians">
          <p>
            A parent or legal guardian should submit website requests for a child who cannot legally
            provide valid consent. The clinic will confirm identity, authority, service suitability,
            and any additional consent requirements before processing a child&apos;s clinical data or
            providing treatment.
          </p>
        </LegalSection>

        <LegalSection id="updates" title="12. Changes to this policy">
          <p>
            We may update this policy when the website, providers, legal requirements, or clinic
            practices change. The effective date at the top identifies the current version.
            Material changes affecting existing information will be communicated when required by
            law.
          </p>
        </LegalSection>
      </LegalDocument>
    </>
  );
}
