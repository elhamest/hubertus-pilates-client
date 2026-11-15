# Content guide (how to change texts, products, FAQ)

All content is in code. After a change, commit and push to `main` → the site
redeploys by itself.

## Short UI texts (buttons, labels, site title)

File: `public/locales/fa/common.js` (`faConstants`).
Example: `pageTitle` is the browser tab title, `footerSlug` is the footer text.

## Add a product

1. Put images in `public/img/collections/<collection-slug>/<product-slug>/`
   (use `.webp` if you can).
2. In `src/data/fa/index.js`, at the top, import each image:
   ```js
   import myProductImg1 from "../../../public/img/collections/reformers/my-product/01-my-product.webp";
   ```
3. (Optional) Add a detail object for the product page:
   ```js
   const pMyProduct = {
     desc: "Long description...",
     bullets: [{ desc: "Feature 1" }, { desc: "Feature 2" }],
   };
   ```
4. Add the product to the right collection's `items` in `faProductCollections`:
   ```js
   {
     title: "My product",
     slug: "my-product",          // URL: /collections/reformers/my-product
     desc: "Short text for the card",
     detail: pMyProduct,          // or null
     id: 14,                      // next free number
     images: [{ img: myProductImg1, isHorizontal: true }],  // first = card image
   },
   ```
5. `slug` must be unique in **all** collections (the product page searches by
   slug only).
6. Run `npm run dev` and open the new URL to check.

The product page shows `detail.desc`, or the short `desc` when there is no
detail.

## Add a collection

Add an object to `faProductCollections` with `id`, `title`, `slug`,
`path: "collections/<slug>"`, `image` (cover, imported) and `items`.
It appears on the home slider, on `/collections`, and gets its own page.

## FAQ

Edit `faFaq` in `src/data/fa/index.js`: `{ question, answer }`.
Home shows the first 6; `/faq` shows all (8 per "load more").

## About us / founders / benefits

`faAboutUs`, `faPersons`, `faBenefits` in `src/data/fa/index.js`.
Person images are plain paths like `"/img/persons/name.webp"` (in `public/`).
Always start a path with `/`, or it breaks on pages like `/about-us/`.

## Header / footer links

`faNavigations` in `src/data/fa/index.js`. Use `showOnHeader` and
`showOnFooter` to choose where a link shows.

## Phone, WhatsApp, Instagram, email

- Phones, WhatsApp, Instagram: hard-coded in `src/components/UI/footer/index.jsx`.
- Contact form receiver: the GitHub secret `SUPPORT_EMAIL` (not in the code).
  To change it, see [DEPLOY.md](./DEPLOY.md), "Change the email address that
  receives the contact form".

## English

`src/data/en/index.js` and `public/locales/en/common.js` exist but are not
used by the site. If you change Persian data, English does not need to change
until English is turned on.
