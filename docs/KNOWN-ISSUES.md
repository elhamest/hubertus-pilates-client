# Known issues, dead code and notes

Found while documenting (2026-11-14). Nothing here was changed. Each item can
become an OpenSpec change.

## Bugs / small problems

1. **Product description condition** —
   `src/app/collections/[collectionId]/[productId]/page.jsx` shows
   `item.detail.desc` only if `item.desc` is set. Probably the check should be
   on `item.detail?.desc`.
2. **Empty slot in product list** — `faProductCollections` in
   `src/data/fa/index.js` (and `en`) has an extra `,` between collection 2
   and 3, which makes an empty array slot. `generateStaticParams` in the
   collection page uses `.filter(Boolean)` to skip it; other code works because
   `.map`/`.forEach` skip holes.
3. **ThumsGallery dead handlers** — `handlePrevImage` / `handleNextImage` in
   `src/components/UI/thums-gallery/index.jsx` call `setLightboxIndex`, which
   does not exist. They are never called, so no crash.
4. **Swapped aria labels** — in `ThumsGallery` the "prev" button has
   `aria-label="Next"` and the "next" button `aria-label="Previous"`.
5. **Font config typos** — `src/app/layout.js`: `variable: "--fonr-vazir-matn"`
   and `wright: "100 900"` (should be `weight`). Only Regular weight is loaded.
6. **`params.locale`** — `layout.js` passes `params.locale` to Header; there is
   no `[locale]` route, so it is always `undefined` (Header falls back to "fa").
7. **Unused import** — Header imports `PathnameContext` from a Next.js internal
   path; not used.
8. **basePath** — `next.config.js` hard-codes `/hubertus-pilates-client` for
   production. CI fixes it (see DEVELOPMENT.md), but a local build does not
   work at `/`.
9. **English data** — `src/data/en/index.js` still has Persian titles for
   collections/products. English is not wired to any page.
10. `.vscode/settings.json` has a `CodeGPT.apiKey` placeholder value
    ("CodeGPT Plus Beta"); not a real key, but editor settings in git.

## Dead / template code (not used by any page)

- `src/components/Cta.jsx` (template text "Download for Free")
- `src/components/home/testimonials/`, `video/`, `customers/`, `home-slider/`
- `src/components/UI/slider/`, `image-lightbox/`, `full-width/`,
  `nav-link/`, `nav-button/`
- `src/components/collections/collection/product/` (placeholder)
- `faTestimonials`, `faProducts` data; `public/img/brands/`,
  `public/img/testimonials/`, `public/img/dots/unused/`, `*--old.webp` images
- Tailwind is only used by these old components.

## Not in this repo

- No backend, no database, no admin panel, no analytics.
- `hubertuspilates.ir` setup (DNS / hosting).
