import { services, type ServiceSlug } from "@/content/services";

type ServiceGroup = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  serviceSlugs: ServiceSlug[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Preventive Care",
    description:
      "Routine cleaning and checkup conversations that help patients stay ahead of common dental concerns.",
    imageSrc: "/images/services/preventive-care.jpg",
    imageAlt: "Dental professional demonstrating preventive tooth brushing care",
    serviceSlugs: ["dental-cleaning"]
  },
  {
    title: "Restorative Care",
    description:
      "Repair-focused care for cavities, damaged teeth, infection concerns, and weakened smiles.",
    imageSrc: "/images/services/restorative-care.jpg",
    imageAlt: "Dental restoration preparation illustrated on a tooth model",
    serviceSlugs: ["fillings", "root-canal", "crowns-and-bridges"]
  },
  {
    title: "Cosmetic Care",
    description:
      "Consultation-led whitening and veneer planning for patients seeking a refreshed, natural-looking smile.",
    imageSrc: "/images/services/cosmetic-care.jpeg",
    imageAlt: "Before and after comparison of cosmetic dental care",
    serviceSlugs: ["teeth-whitening", "veneers"]
  },
  {
    title: "Advanced Care",
    description:
      "Thoughtful planning for missing teeth, extractions, alignment, and maxillofacial concerns that need careful assessment.",
    imageSrc: "/images/services/advanced-care.jpg",
    imageAlt: "Reception area inside Aya Dental Studio",
    serviceSlugs: [
      "dental-implants",
      "tooth-extraction",
      "orthodontics",
      "maxillofacial-surgery"
    ]
  }
];

export function getServicesForGroup(group: ServiceGroup) {
  return group.serviceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}
