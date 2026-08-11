import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServicesForGroup, serviceGroups } from "@/content/service-groups";
import { cn } from "@/lib/utils";

type CareDirectoryProps = {
  className?: string;
  detailed?: boolean;
};

export function CareDirectory({ className, detailed = false }: CareDirectoryProps) {
  return (
    <div className={cn("care-directory", detailed && "care-directory-detailed", className)}>
      {serviceGroups.map((group) => {
        const services = getServicesForGroup(group);

        return (
          <article className="care-group" key={group.title}>
            <div className="care-group-heading">
              <div>
                <p className="care-group-label">Care area</p>
                {detailed ? (
                  <h2 className="care-group-title">{group.title}</h2>
                ) : (
                  <h3 className="care-group-title">{group.title}</h3>
                )}
              </div>
            </div>

            <div className="care-group-media">
              <Image
                src={group.imageSrc}
                alt={group.imageAlt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 42vw, 100vw"
                quality={90}
                className="care-group-image"
              />
            </div>

            <p className="care-group-description">{group.description}</p>

            <nav className="care-group-nav" aria-label={`${group.title} services`}>
              <ul>
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      <span>{detailed ? service.title : service.shortTitle}</span>
                      <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        );
      })}
    </div>
  );
}
