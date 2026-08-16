# Service before-and-after images

Each image should already contain its stitched before-and-after comparison. Create one folder per
service using its URL slug, then place the two complete comparison images inside it:

```text
before-after/
  veneers/
    case-1.jpg
    case-2.jpg
  teeth-whitening/
    case-1.jpg
    case-2.jpg
```

Available service slugs:

- `teeth-whitening`
- `veneers`
- `dental-implants`
- `tooth-extraction`
- `dental-cleaning`
- `fillings`
- `root-canal`
- `crowns-and-bridges`
- `orthodontics`
- `maxillofacial-surgery`

Connect a pair in the matching service object in `content/services.ts`:

```ts
beforeAfterCases: [
  {
    comparisonOneSrc: "/images/services/before-after/veneers/case-1.jpg",
    comparisonOneAlt: "First stitched before-and-after veneer case at Aya Dental Studio",
    comparisonTwoSrc: "/images/services/before-after/veneers/case-2.jpg",
    comparisonTwoAlt: "Second stitched before-and-after veneer case at Aya Dental Studio",
    caption: "Clinic-approved case description without identifying patient information."
  }
]
```

Use only clinic-approved photography with documented patient consent. Remove identifying metadata
before publication and do not make outcome guarantees in captions.
