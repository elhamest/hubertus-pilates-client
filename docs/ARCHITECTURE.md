# Architecture

Hubertus Pilates website: a company site for an Iranian maker of Pilates
equipment. It shows the product catalog, an "about us" page, an FAQ, and a
contact form.

Live: https://hubertuspilates.com (custom domain in `CNAME`).
`hubertuspilates.ir` also points to the site, but its hosting is not set up
in this repo.

## 1. Big picture

- **There is no backend.** No server, no database, no API routes.
  The site is a **static export** of a Next.js app (`output: "export"`).
- All content (products, FAQ, texts) lives in **JavaScript files** in
  `src/data/` and `public/locales/`. To change content, edit those files and
  redeploy.
- The contact form does not send data to a server. It opens the visitor's
  email app with a `mailto:` link to `info@hubertuspilates.com`.
- Hosting: **GitHub Pages**, deployed by GitHub Actions on every push to
  `main`.

```
 src/data/fa/index.js  ─┐
 public/locales/fa/... ─┼─> React pages/components ──> next build (static export) ──> out/ ──> GitHub Pages
 public/img/...        ─┘
```

## 2. Tech stack

| Part        | Tool                                                    |
|-------------|---------------------------------------------------------|
| Framework   | Next.js 15 (App Router), React 18, JavaScript (no TS)   |
| Styling     | CSS Modules (`*.module.css`) + `src/app/globals.css`; Tailwind 3 is installed but only used in a few old template components |
| Slider      | `swiper` (product image gallery and lightbox)           |
| Forms       | `react-hook-form` (contact popup)                       |
| Font        | Vazirmatn (local woff2 in `src/app/fonts/`)             |
| Lint        | `next lint` (`next/core-web-vitals`)                    |
| Tests       | none                                                    |
| CI/CD       | `.github/workflows/nextjs.yml` → GitHub Pages           |

Path alias: `@/` = `src/` (see `jsconfig.json`).

## 3. Folder map

```
src/
  app/                         Next.js App Router (one folder = one URL)
    layout.js                  Root layout: <html lang="fa" dir="rtl">, font, Header, Footer, PopupWidget, ThemeProvider
    page.js                    Home page "/"
    globals.css                CSS variables (colors) for light/dark, global classes
    about-us/page.jsx          "/about-us"
    faq/page.jsx               "/faq" (search + "load more")
    collections/page.jsx       "/collections" (all collections)
    collections/[collectionId]/page.jsx               "/collections/<collection>"
    collections/[collectionId]/[productId]/page.jsx   "/collections/<collection>/<product>"
    fonts/                     Vazirmatn font files
  components/
    UI/                        Generic building blocks (header, footer, container, breadcrumb, gallery, sliders, svg icons, theme toggle)
    home/                      Home page sections (hero, benefits, faq, + unused: testimonials, video, customers, home-slider)
    collections/collection/    Grid of products inside one collection
    faq-list/                  Accordion list of questions (used on home and /faq)
    popup-widget/              Floating contact form (mailto)
    theme-provider/            Light/dark theme context
    Cta.jsx                    Unused template block
  data/
    fa/index.js                MAIN content in Persian (products, nav, FAQ, about, benefits, persons)
    en/index.js                English copy (incomplete, not used by any page yet)
  hooks/useScrollAnimation.js  Adds class "animate" to elements when they scroll into view
  utils/pathMaps.js            Builds { "url/path": "title" } map for the breadcrumb
public/
  locales/fa/common.js         Short UI texts (faConstants): site title, button labels, form labels
  locales/en/common.js         Same in English (enConstants), not used yet
  img/                         All images (collections/<collection>/<product>/..., hero, persons, icons)
.github/workflows/nextjs.yml   Build + deploy to GitHub Pages
openspec/                      OpenSpec specs (current behavior) and changes
```

## 4. Pages and routing

All pages are built at build time (static HTML).

| URL | File | What it shows |
|-----|------|---------------|
| `/` | `src/app/page.js` | Hero, Benefits, collections slider (`Gallery`), first 6 FAQ + link to `/faq` |
| `/collections` | `src/app/collections/page.jsx` | Grid of all collections (`GalleryItems`) |
| `/collections/[collectionId]` | `.../[collectionId]/page.jsx` | Title + product cards of one collection. Ids come from `generateStaticParams()` (collection `path`) |
| `/collections/[collectionId]/[productId]` | `.../[productId]/page.jsx` | Image gallery (`ThumsGallery` + lightbox) + description + feature bullets. Product found by `slug` in any collection |
| `/about-us` | `src/app/about-us/page.jsx` | Company text (`faAboutUs`) + founders (`faPersons`) |
| `/faq` | `src/app/faq/page.jsx` | All FAQ, 8 per page, "load more", text search (on button click) |
| `#contact-us` | Footer `id="contact-us"` | Nav link scrolls to footer contacts |

Unknown collection/product → page shows "مجموعه ای یافت نشد." / "محصول یافت نشد."
(but with static export only known paths exist, so the host's 404 page shows).

Every page except home shows a **Breadcrumb**. It splits the URL and gets
titles from `generatePathToTitleMap()` (`src/utils/pathMaps.js`).

## 5. Data model (`src/data/fa/index.js`)

```js
faProductCollections = [            // list of collections
  {
    id, title, slug,                // slug = URL part, e.g. "reformers"
    path: "collections/<slug>",     // used for links and static params
    image,                          // cover image (static import)
    items: [                        // products
      {
        id, title, slug,            // slug = URL part, e.g. "classic-reformer"
        desc,                       // short text for the product card (null = no text)
        detail: { desc, bullets: [{ desc }] } | null,   // long text + feature list on product page
        images: [{ img, isHorizontal }],                // first image = card image
      },
    ],
  },
]
faNavigations = [{ title, path, showOnHeader, showOnFooter }]
faFaq        = [{ question, answer }]
faAboutUs    = { title, desc1, desc2, desc3 }
faPersons    = [{ name, education, description: [string], image: "img/persons/..." }]
faBenefits   = { preTitle, title, items: [string] }
faTestimonials, faProducts           // not shown on the site now
```

Current catalog (4 collections, 13 products):

- `reformers`: classic-reformer, reformer-with-tower, reformer-combo
- `towers-trapeze-systems`: cadillac, wall-tower-unit, wall-unit
- `chairs-and-barrels`: ladder-barrel, wunda-chair, spine-corrector, arm-chair
- `additional-pilates-equipment`: arc, wooden-pole, ped-o-pull

Images are **imported** at the top of the data file
(`import x from "../../../public/img/..."`), so Next.js knows their size.

How to add content: see [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).

## 6. Language (i18n)

- The site is **Persian only, right-to-left**. `layout.js` sets
  `lang="fa" dir="rtl"`.
- Many components take a `locale` prop (default `"fa"`) and have
  `locale === "fa" ? fa... : en...` checks, but nothing passes another
  locale. So English data (`src/data/en`, `public/locales/en`) is prepared
  but **not used**. Some components (Footer, Hero, Collection, PopupWidget,
  about-us) import Persian data directly.

## 7. Theme (light / dark)

- `ThemeProvider` (`src/components/theme-provider/ThemeProvider.js`):
  reads `localStorage.theme`; if empty, follows the OS setting
  (`prefers-color-scheme`). It adds class `dark` (or `light`) to `<html>`.
- `ThemeToggle` button in the header switches and saves to `localStorage`.
- Colors are CSS variables in `src/app/globals.css` (`:root`, dark media
  query, `.dark` class). Main brand color: `--primary-color: #86508e` (purple).

## 8. Shared layout parts

- **Header** (`components/UI/header`): logo, nav links where
  `showOnHeader`, theme toggle, mobile menu. Transparent on the home page top;
  gets a background (`scrolled`) after scroll or on other pages.
- **Footer** (`components/UI/footer`, `id="contact-us"`): logo, slogan,
  nav links where `showOnFooter`, Instagram + WhatsApp links, phone numbers.
- **PopupWidget** (`components/popup-widget`): floating button bottom corner;
  opens a form (name, email, message) validated with react-hook-form. Submit
  builds a `mailto:info@hubertuspilates.com` URL. On small screens (≤500px)
  the form is shown inline instead of a popup.
- **Scroll animation**: elements with class `animateFadeInUp` get class
  `animate` when 10% visible (`useScrollAnimation`, called on home page).

## 9. Build and deploy

See [DEVELOPMENT.md](./DEVELOPMENT.md).

## 10. Known issues and dead code

See [KNOWN-ISSUES.md](./KNOWN-ISSUES.md).
