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
  plusCode: "2Q3H+GV5, Addis Ababa",
  hoursDisplay: "Mon-Sat: 2:30 to 12:00 LT",
  mapUrl: "https://www.google.com/maps?cid=9320438574750211354",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Aya%20Speciality%20Dental%20Clinic%2C%202Q3H%2BGV5%2C%20Addis%20Ababa&output=embed",
  ogImage: "/images/hero/aya-reception.jpg",
  logoPath: "/logo/aya-dental-studio-logo.webp",
  faviconPath: "/logo/aya-dental-studio-icon.png",
  socialLinks: {
    facebook:
      "https://www.facebook.com/p/Aya-Speciality-Dental-Clinic-61573053872342/",
    instagram: "https://www.instagram.com/aya_speciality_dental_clinic/"
  }
} as const;

export const contactActions = {
  callPrimary: `tel:${siteConfig.phonePrimary}`,
  callSecondary: `tel:${siteConfig.phoneSecondary}`,
  whatsapp: `https://wa.me/${siteConfig.whatsappNumber}`,
  map: siteConfig.mapUrl
} as const;
