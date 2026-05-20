import {
  BadgeCheck,
  Brush,
  CircleDot,
  Gem,
  HeartPulse,
  ShieldCheck,
  Smile,
  Sparkles
} from "lucide-react";

export type ServiceSlug =
  | "teeth-whitening"
  | "dental-implants"
  | "tooth-extraction"
  | "dental-cleaning"
  | "fillings"
  | "root-canal"
  | "crowns-and-bridges"
  | "orthodontics";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: typeof Sparkles;
  intro: string;
  recommendedFor: string[];
  expectations: string[];
  aftercare: string[];
  faq: Array<{ question: string; answer: string }>;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortTitle: "Whitening",
    summary: "A consultation-led approach to brightening stains and refreshing your smile.",
    description:
      "Whitening options should be selected after checking tooth and gum health, sensitivity, and the type of staining.",
    icon: Sparkles,
    intro:
      "Teeth whitening can help reduce visible staining when it is appropriate for your teeth. Aya Dental Studio should confirm suitability during consultation before treatment.",
    recommendedFor: [
      "Surface staining from coffee, tea, or daily wear",
      "Patients who want a brighter smile before an event",
      "People who want guidance before trying whitening products"
    ],
    expectations: [
      "A dentist checks your teeth and gums first",
      "Sensitivity and previous restorations are discussed",
      "The clinic recommends a whitening approach only if suitable"
    ],
    aftercare: [
      "Follow the dentist's instructions after whitening",
      "Avoid staining foods and drinks as advised",
      "Report prolonged sensitivity to the clinic"
    ],
    faq: [
      {
        question: "Is whitening right for everyone?",
        answer:
          "No. Whitening depends on tooth health, gum health, sensitivity, and existing restorations. A consultation is needed first."
      },
      {
        question: "Will fillings or crowns whiten too?",
        answer:
          "Existing restorations usually do not whiten like natural teeth. The dentist can explain what that means for your smile."
      }
    ],
    seoTitle: "Teeth Whitening in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Explore consultation-led teeth whitening in Addis Ababa with Aya Dental Studio near Bole Atlas."
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Implants",
    summary: "Treatment planning for replacing missing teeth with stable, long-term options.",
    description:
      "Implants require careful assessment of oral health, bone support, medical history, and treatment timing.",
    icon: Gem,
    intro:
      "Dental implants may be an option for replacing missing teeth. Suitability depends on clinical assessment and a personalized treatment plan.",
    recommendedFor: [
      "Missing single or multiple teeth",
      "Patients considering fixed replacement options",
      "People who want a consultation about implant suitability"
    ],
    expectations: [
      "The dentist reviews oral health and medical considerations",
      "Imaging or specialist assessment may be recommended",
      "Treatment steps, timing, and alternatives are explained"
    ],
    aftercare: [
      "Keep excellent oral hygiene around implant areas",
      "Attend follow-up visits as recommended",
      "Report pain, swelling, or looseness promptly"
    ],
    faq: [
      {
        question: "Can everyone get implants?",
        answer:
          "Not always. Gum health, bone support, general health, and habits such as smoking can affect suitability."
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Timing varies by case. The clinic should explain the expected stages after assessment."
      }
    ],
    seoTitle: "Dental Implants in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Book a dental implant consultation in Addis Ababa with Aya Dental Studio near Bole Atlas."
  },
  {
    slug: "tooth-extraction",
    title: "Tooth Extraction",
    shortTitle: "Extraction",
    summary: "Careful removal planning when a tooth cannot be restored or is causing problems.",
    description:
      "Extraction should be discussed clearly, including why it is recommended and what replacement or aftercare options may be needed.",
    icon: ShieldCheck,
    intro:
      "Tooth extraction may be recommended when a tooth cannot be predictably restored or is affecting surrounding teeth and gums.",
    recommendedFor: [
      "Severely damaged teeth",
      "Problematic wisdom teeth",
      "Teeth with advanced infection or mobility"
    ],
    expectations: [
      "The dentist explains why removal may be needed",
      "Your comfort, health history, and aftercare are reviewed",
      "Replacement options may be discussed where relevant"
    ],
    aftercare: [
      "Follow bleeding and cleaning instructions carefully",
      "Avoid disturbing the extraction site",
      "Contact the clinic if pain, swelling, or bleeding worsens"
    ],
    faq: [
      {
        question: "Will I need a replacement tooth?",
        answer:
          "It depends on the tooth and your bite. The dentist can explain replacement options if they are needed."
      },
      {
        question: "What should I do after an extraction?",
        answer:
          "Follow the clinic's aftercare instructions and avoid rinsing or disturbing the site unless advised."
      }
    ],
    seoTitle: "Tooth Extraction in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Careful tooth extraction consultation and aftercare guidance at Aya Dental Studio in Addis Ababa."
  },
  {
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    shortTitle: "Cleaning",
    summary: "Preventive cleaning and gum-health support for a fresher, healthier mouth.",
    description:
      "Professional cleaning supports gum health and helps remove buildup that brushing alone cannot always reach.",
    icon: Brush,
    intro:
      "Dental cleaning helps support healthy gums, fresher breath, and better long-term prevention.",
    recommendedFor: [
      "Routine preventive care",
      "Bleeding gums or plaque buildup",
      "Patients preparing for whitening or restorative treatment"
    ],
    expectations: [
      "The dentist or clinician checks gum condition",
      "Plaque and tartar are removed where needed",
      "Home-care guidance is provided"
    ],
    aftercare: [
      "Brush and floss as instructed",
      "Book routine follow-ups as recommended",
      "Ask about sensitivity if it continues after cleaning"
    ],
    faq: [
      {
        question: "How often should I have a dental cleaning?",
        answer:
          "Frequency depends on gum health and buildup. Many patients benefit from routine visits, but the dentist should advise your interval."
      },
      {
        question: "Can cleaning help bleeding gums?",
        answer:
          "It can help when bleeding is related to plaque or gum inflammation, but a dentist should check the cause."
      }
    ],
    seoTitle: "Dental Cleaning in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Professional dental cleaning and gum-health support near Bole Atlas in Addis Ababa."
  },
  {
    slug: "fillings",
    title: "Dental Fillings",
    shortTitle: "Fillings",
    summary: "Tooth-colored repair planning for cavities, chips, and small areas of damage.",
    description:
      "Fillings restore damaged tooth structure after the dentist checks the extent of decay or fracture.",
    icon: CircleDot,
    intro:
      "Dental fillings may be recommended for cavities, chipped teeth, or small defects after assessment.",
    recommendedFor: [
      "Small to moderate cavities",
      "Minor chips or worn tooth areas",
      "Replacing damaged existing fillings"
    ],
    expectations: [
      "The dentist checks the tooth and explains the repair",
      "Damaged tooth structure is cleaned and restored",
      "Your bite is checked before you leave"
    ],
    aftercare: [
      "Avoid chewing until numbness wears off if anesthetic is used",
      "Contact the clinic if the bite feels high",
      "Continue routine cleaning and checkups"
    ],
    faq: [
      {
        question: "Can every cavity be fixed with a filling?",
        answer:
          "No. Larger damage may need another restoration, such as a crown. The dentist will explain the options."
      },
      {
        question: "What if my filling feels uncomfortable?",
        answer:
          "Contact the clinic. A bite adjustment may be needed if the filling feels high."
      }
    ],
    seoTitle: "Dental Fillings in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Tooth-colored filling consultations for cavities and minor tooth damage at Aya Dental Studio."
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    summary: "Treatment planning for infected or inflamed tooth nerves when saving the tooth is possible.",
    description:
      "Root canal treatment may help preserve a tooth affected by deep decay, trauma, or nerve inflammation.",
    icon: HeartPulse,
    intro:
      "Root canal treatment may be recommended when the inside of a tooth is infected or inflamed and the tooth can still be restored.",
    recommendedFor: [
      "Toothache or lingering sensitivity",
      "Deep decay near the tooth nerve",
      "Infection signs that need dental assessment"
    ],
    expectations: [
      "The dentist assesses symptoms and tooth restorability",
      "Treatment stages and restoration needs are explained",
      "Follow-up restoration may be needed to protect the tooth"
    ],
    aftercare: [
      "Avoid chewing hard foods on the tooth until restored",
      "Attend follow-up appointments",
      "Contact the clinic if swelling or pain worsens"
    ],
    faq: [
      {
        question: "Does root canal always save the tooth?",
        answer:
          "Not always. Suitability depends on the tooth, infection, and remaining structure. A dentist must assess it."
      },
      {
        question: "Will I need a crown after root canal?",
        answer:
          "Some teeth need a crown or other restoration after treatment. The dentist should explain this during planning."
      }
    ],
    seoTitle: "Root Canal in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Root canal consultation and treatment planning at Aya Dental Studio near Bole Atlas, Addis Ababa."
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    shortTitle: "Crowns & Bridges",
    summary: "Restorative options for protecting weakened teeth or replacing missing teeth.",
    description:
      "Crowns and bridges require careful planning around tooth strength, bite, appearance, and long-term maintenance.",
    icon: BadgeCheck,
    intro:
      "Crowns can help protect weakened teeth, while bridges may replace missing teeth in selected cases.",
    recommendedFor: [
      "Weak or heavily restored teeth",
      "Teeth after root canal treatment",
      "Selected missing-tooth replacement cases"
    ],
    expectations: [
      "The dentist checks tooth condition and bite",
      "Material and appearance considerations are discussed",
      "Maintenance and replacement expectations are explained"
    ],
    aftercare: [
      "Clean carefully around crown and bridge margins",
      "Avoid biting very hard objects",
      "Attend routine checks to monitor fit and gum health"
    ],
    faq: [
      {
        question: "How do I choose between a bridge and an implant?",
        answer:
          "That depends on nearby teeth, bone support, health, budget, and goals. A consultation is needed."
      },
      {
        question: "Do crowns require special cleaning?",
        answer:
          "They need careful daily cleaning around the margins and routine dental checks."
      }
    ],
    seoTitle: "Crowns and Bridges in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Crowns and bridges consultation for tooth protection and replacement at Aya Dental Studio."
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortTitle: "Orthodontics",
    summary: "Alignment consultation for patients considering braces or other tooth-movement options.",
    description:
      "Orthodontic treatment planning should consider bite, oral health, timing, and patient goals.",
    icon: Smile,
    intro:
      "Orthodontic care may help align teeth and improve bite function. Treatment options depend on assessment.",
    recommendedFor: [
      "Crowded or spaced teeth",
      "Bite concerns",
      "Patients wanting alignment consultation"
    ],
    expectations: [
      "The dentist reviews alignment and bite",
      "Referral or specialist planning may be recommended",
      "Treatment timing and care commitments are explained"
    ],
    aftercare: [
      "Maintain excellent oral hygiene during treatment",
      "Attend scheduled adjustments or reviews",
      "Use retainers as instructed after treatment"
    ],
    faq: [
      {
        question: "Am I too old for orthodontic treatment?",
        answer:
          "Adults can often consider orthodontic options, but gum health and clinical suitability must be assessed."
      },
      {
        question: "How long does orthodontic treatment take?",
        answer:
          "Treatment time varies by case and option. The dentist can explain expected timing after assessment."
      }
    ],
    seoTitle: "Orthodontics in Addis Ababa | Aya Dental Studio",
    seoDescription:
      "Orthodontic consultation for braces and alignment options at Aya Dental Studio in Addis Ababa."
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
