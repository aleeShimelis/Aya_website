import Image from "next/image";
import { UserRound } from "lucide-react";

const specialists = [
  {
    name: "Dr. Aymen Ayoub",
    title: "Senior Surgeon, Endodontist and Cosmetic Specialist",
    imageSrc: "/images/team/lead-clinician.jpg",
    imageAlt: "Dr. Aymen Ayoub, senior surgeon, endodontist, and cosmetic specialist at Aya Dental Studio",
    imagePosition: "22% 8%"
  },
  {
    name: "Dr. Ismael Muze",
    title: "Chief Orthodontist",
    imageSrc: "/images/team/orthodontist.png",
    imageAlt: "Dr. Ismael Muze, Chief Orthodontist at Aya Dental Studio",
    imagePosition: "22% 8%"
  },
  {
    name: "Dr. Tewodros Molla",
    title: "Chief Maxillofacial Surgeon",
    imageSrc: "/images/team/maxillofacial-surgeon.png",
    imageAlt: "Dr. Tewodros Molla, chief maxilofacial surgeon at Aya Dental Studio",
    imagePosition: "22% 8%"
  },
  {
    name: "Name to be confirmed",
    title: "Specialty to be confirmed"
  }
] as const;

export function TeamPreview() {
  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="team-intro">
        <div className="team-intro-copy">
          <p className="eyebrow">Aya Dental Studio</p>
          <h2 id="team-heading" className="team-intro-title">
            Specialized team
          </h2>
          <span className="team-intro-rule" aria-hidden="true" />
          <blockquote className="team-intro-quote">
            Our clinicians work together to make every consultation clear, coordinated, and
            centered on the care each patient needs.
          </blockquote>
          <span className="team-intro-rule" aria-hidden="true" />
        </div>

        <div className="team-intro-media">
          <Image
            src="/images/team/team-portrait.jpg"
            alt="Members of the Aya Dental Studio clinical team"
            fill
            sizes="(min-width: 900px) 32rem, 100vw"
            quality={90}
            className="team-intro-image"
          />
        </div>
      </div>

      <div className="container-site team-specialists">
        <div className="team-specialists-heading">
          <p className="eyebrow">Our specialists</p>
          <h3>Meet the clinicians behind your care.</h3>
        </div>

        <div className="team-specialist-grid">
          {specialists.map((specialist, index) => (
            <article className="team-specialist" key={`${specialist.name}-${index}`}>
              <div className="team-specialist-portrait">
                {"imageSrc" in specialist ? (
                  <Image
                    src={specialist.imageSrc}
                    alt={specialist.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    quality={90}
                    className="team-specialist-image"
                    style={{ objectPosition: specialist.imagePosition }}
                  />
                ) : (
                  <div className="team-specialist-placeholder" aria-label="Specialist photo pending">
                    <UserRound aria-hidden="true" />
                    <span>Photo pending</span>
                  </div>
                )}
              </div>
              <div className="team-specialist-caption">
                <h4>{specialist.name}</h4>
                <p>{specialist.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
