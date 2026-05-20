import { Card } from "@/components/ui/Card";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamPreview() {
  return (
    <section className="section-padding bg-muted-bg">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="About the team"
            title="A polished profile, ready for verified clinic details."
            description="Aya's team area should feel personal and credible without inventing doctors, years, ratings, patient counts, or credentials."
          />
        </div>
        <Card className="grid gap-6 p-5 md:grid-cols-[0.8fr_1fr] md:p-6 lg:col-span-7 lg:p-7">
          <MediaPlaceholder
            label="Real dentist or team photo placeholder"
            note="TODO: use approved portrait or team image with consent."
            className="min-h-96"
          />
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Lead clinician profile</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-charcoal">
              Name placeholder
            </h3>
            <p className="mt-2 font-semibold text-slate">Role placeholder</p>
            <dl className="mt-6 grid gap-4">
              {[
                ["Credentials", "TODO: add verified degrees, certifications, and affiliations."],
                ["Areas of care", "TODO: add clinic-approved focus areas."],
                ["Languages spoken", "TODO: confirm languages before publishing."],
                ["Clinic note", "TODO: add a short approved profile written in Aya's tone."]
              ].map(([label, value]) => (
                <div key={label} className="rounded-card bg-muted-bg p-4">
                  <dt className="text-sm font-semibold text-charcoal">{label}</dt>
                  <dd className="mt-1 text-sm leading-6 text-muted-text">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Card>
      </div>
    </section>
  );
}
