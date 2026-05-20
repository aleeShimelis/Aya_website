import { Card } from "@/components/ui/Card";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TeamPreview() {
  return (
    <section className="section-padding bg-muted-bg">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
        <MediaPlaceholder
          label="Dentist and team photo placeholder"
          note="TODO: add real staff photo with consent and verified names."
          className="min-h-96"
        />
        <div>
          <SectionHeading
            eyebrow="About the team"
            title="A human, transparent clinic introduction."
            description="This section is ready for verified dentist credentials, staff names, certifications, affiliations, and real clinic photography."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Credentials: TODO",
              "Experience: TODO",
              "Specialization: TODO",
              "Professional affiliations: TODO"
            ].map((item) => (
              <Card key={item} className="p-5">
                <p className="text-sm font-semibold text-charcoal">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
