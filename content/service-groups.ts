import { services, type ServiceSlug } from "@/content/services";

type ServiceGroup = {
  title: string;
  description: string;
  serviceSlugs: ServiceSlug[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Preventive Care",
    description:
      "Routine cleaning and checkup conversations that help patients stay ahead of common dental concerns.",
    serviceSlugs: ["dental-cleaning"]
  },
  {
    title: "Restorative Care",
    description:
      "Repair-focused care for cavities, damaged teeth, infection concerns, and weakened smiles.",
    serviceSlugs: ["fillings", "root-canal", "crowns-and-bridges"]
  },
  {
    title: "Cosmetic Care",
    description:
      "Consultation-led smile brightening for patients who want a refreshed, natural-looking result.",
    serviceSlugs: ["teeth-whitening"]
  },
  {
    title: "Advanced Care",
    description:
      "Thoughtful planning for missing teeth, extractions, and alignment questions that need careful assessment.",
    serviceSlugs: ["dental-implants", "tooth-extraction", "orthodontics"]
  }
];

export function getServicesForGroup(group: ServiceGroup) {
  return group.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}
