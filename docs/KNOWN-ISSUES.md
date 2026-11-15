# Known issues, dead code and notes

First list made 2026-11-14, updated 2026-11-15. Fixed items were removed
(product description, empty slot in the product list, gallery dead handlers
and aria labels, font weights, `params.locale`, unused header import,
basePath). Each item left here can become an OpenSpec change.

## Small problems

1. **English data** — `src/data/en/index.js` still has Persian titles for
   collections/products. English is not wired to any page.
2. `.vscode/settings.json` has a `CodeGPT.apiKey` placeholder value
   ("CodeGPT Plus Beta"); not a real key, but editor settings in git.
3. **Contact form tests with the receiver's own address** — if you type the
   `SUPPORT_EMAIL` address itself in the form's email field, Gmail may drop
   the message (the server still says "sent"). Real visitors type their own
   address, so this only matters for tests: use another address.
4. **Domain names are hard-coded** for the contact form (`CONTACT_URL` in the
   popup widget, `$allowedOrigins` and `no-reply@hubertuspilates.ir` in
   `contact.php` and `deploy-ir.yml`). Moving to a new domain needs these
   edits (listed in `DEPLOY.md`).

## Not checked by hand yet

- PWA install and offline use on both hosts.

## Dead / template code (not shown on any page)

`src/app/page.js` still imports some of these, but does not render them.

- `src/components/Cta.jsx` (template text "Download for Free")
- `src/components/home/testimonials/`, `video/`, `customers/`, `home-slider/`
- `src/components/UI/slider/`, `image-lightbox/`, `full-width/`,
  `nav-link/`, `nav-button/`
- `src/components/collections/collection/product/` (placeholder)
- `faTestimonials`, `faProducts` data; `public/img/brands/`,
  `public/img/testimonials/`, `public/img/dots/unused/`, `*--old.webp` images
- Tailwind is only used by these old components.

## Not in this repo

- No database, no admin panel, no analytics.
- DNS, mailboxes, FTP accounts and SSL of `hubertuspilates.ir` live in the
  ParsPack / DirectAdmin panel (see `DEPLOY.md`).
