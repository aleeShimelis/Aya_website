# Manually Updating Google Reviews

The Aya Dental Studio website uses a static Google reviews carousel. It does not contact the Google Places API when visitors open the website. Reviews must therefore be verified and added manually.

## 1. Verify the review on Google

1. Open the [Aya Speciality Dental Clinic Google Business Profile](https://www.google.com/maps?cid=9320438574750211354).
2. Select **Reviews**.
3. Sort the reviews by **Newest**.
4. Confirm the review is published on the correct clinic profile.
5. Record the reviewer's exact:
   - Display name
   - Review wording
   - Star rating
   - Profile image, when one is available

Do not add a review from an unrelated clinic, a private message, or an unverified screenshot.

## 2. Add the profile image

Save the reviewer's public Google profile image in:

```text
public/images/reviews/
```

Use a lowercase filename containing only letters, numbers, and hyphens. For example:

```text
michael-tesfaye.jpg
```

Keep the image square where practical. JPG, PNG, and WebP files are suitable. Do not replace another reviewer's image unless that image genuinely changed.

## 3. Add the review to the carousel

Open:

```text
components/sections/GoogleReviews.tsx
```

Find the `reviews` array near the beginning of the file. Add the newest review as the first item so it appears first when the page loads:

```tsx
{
  author: "Reviewer Name",
  quote: "Exact review text",
  imageSrc: "/images/reviews/reviewer-name.jpg",
  imageAlt: "Google profile image for Reviewer Name"
},
```

Important checks:

- Preserve the review's wording and punctuation.
- Make sure `imageSrc` begins with `/images/reviews/`.
- Make sure the filename exactly matches the file in `public/images/reviews/`.
- Keep the trailing comma when another review follows the new entry.
- Do not add health details or information that is not already part of the public Google review.

## 4. Update the displayed review count

In the same component, find the `SectionHeading` title:

```tsx
title="5.0 from three Google reviews."
```

Change the written number when the total number of verified reviews changes. Also update `5.0` if the clinic's public aggregate Google rating changes.

## 5. Preview the update locally

From the project folder in the VS Code terminal, run:

```powershell
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

On the homepage, confirm that:

- The newest review appears.
- The review text is correct.
- The profile image loads and is not distorted.
- The previous and next controls work.
- Automatic rotation continues approximately every six seconds.
- The pause and resume control works.
- The counter shows the correct total.
- The layout works on both desktop and mobile widths.

Stop the development server with `Ctrl+C` in the terminal when finished.

## 6. Run release checks

Run each command from the project folder:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run build:cloudflare
```

Do not deploy if any command fails. Fix the reported issue and repeat the checks first.

## 7. Publish the update

After the checks pass and Cloudflare authentication is available, deploy the current local project with:

```powershell
npm.cmd run deploy:cloudflare
```

This publishes the code using the existing Wrangler and OpenNext configuration. It should not require changing DNS for an ordinary content update.

After deployment, open [https://ayadentalstudio.com](https://ayadentalstudio.com) in a private browser window and verify the carousel again. If the old version appears briefly, perform a hard refresh with `Ctrl+Shift+R`.

## Removing an obsolete review

If a review is removed from Google:

1. Remove its complete object from the `reviews` array.
2. Remove its image only when no other website content uses that file.
3. Update the displayed rating and review count.
4. Repeat all local and release checks before deployment.

## Current implementation

The carousel currently contains three verified 5-star reviews:

- Michael Tesfaye
- Alazar Shimelis
- Yezid Muhammad

The carousel remains static, rotates automatically in the browser, and makes no Google Places API requests.
