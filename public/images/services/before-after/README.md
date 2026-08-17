# Service before-and-after images

Create one folder per service using its URL slug. Add every approved comparison or treatment-stage
image in display order, using consecutive file names beginning with `case-1.jpg`:

```text
before-after/
  veneers/
    case-1.jpg
    case-2.jpg
    case-3.jpg
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

Update the matching number in `beforeAfterImageCounts` in `content/services.ts`. Use `0` when a
service has no approved images. The gallery will then render exactly that many frames and will hide
the entire before-and-after section when the count is zero.

```ts
const beforeAfterImageCounts = {
  veneers: 3
};
```

Use only clinic-approved photography with documented patient consent. Remove identifying metadata
before publication and do not make outcome guarantees in captions.
