export const siteConfig = {
  name: "Aya Dental Studio",
  secondaryName: "Aya Speciality Dental Clinic",
  description:
    "Calm, specialist dental care for healthier smiles in Addis Ababa.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ayadentalstudio.com",
  phonePrimary: "+251985200000",
  phonePrimaryDisplay: "+251 985 200 000",
  phoneSecondary: "+251985300000",
  phoneSecondaryDisplay: "+251 985 300 000",
  whatsappNumber: "251985200000",
  addressShort: "Bole Atlas, Addis Ababa",
  addressFull: "Bole Atlas Traffic Light, Landmark Plaza, 2nd Floor, Addis Ababa",
  hoursPlaceholder: "Opening hours: TODO",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Bole%20Atlas%20Traffic%20Light%20Landmark%20Plaza%20Addis%20Ababa",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Bole%20Atlas%20Traffic%20Light%20Landmark%20Plaza%20Addis%20Ababa&output=embed",
  ogImage: "/images/og-placeholder.svg",
  logoPath: "/logo/aya-dental-studio-logo.svg",
  socialLinks: {
    facebook: "#todo-facebook",
    instagram: "#todo-instagram",
    tiktok: "#todo-tiktok"
  }
} as const;

export const contactActions = {
  callPrimary: `tel:${siteConfig.phonePrimary}`,
  callSecondary: `tel:${siteConfig.phoneSecondary}`,
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}`,
  map: siteConfig.mapUrl
} as const;
