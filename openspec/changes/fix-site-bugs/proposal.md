# Fix site bugs

## Why

A code review found bugs. The worst one: on `hubertuspilates.ir` (Apache on ParsPack)
`/collections` and the 4 collection pages show a folder list instead of the page,
because the build has both `collections.html` and a `collections/` folder.

## What changes

- `next.config.js`: `trailingSlash: true`. Every page is built as `folder/index.html`,
  so Apache and GitHub Pages both open it. URLs now end with `/`; old links redirect.
- `public/.htaccess`: remove the `.html` rewrite (not needed now, and it would open
  old `*.html` files still on the FTP host). Keep the 404 page.
- Links: collection cards use absolute paths, product links have no `//`.
- Theme: a saved "light" choice also sets the `light` class on load, so a dark
  system theme does not win after reload.
- Product page: show `detail.desc`, or the short `desc` when there is no detail
  (no more empty box on "wall-unit").
- Font: load the variable Vazirmatn font (`weight: "100 900"`), so 300–700 weights are real.
- Gallery prev/next `aria-label`s were swapped.
- Footer: WhatsApp link without `+`, site link with `https`.
- Clean up: dead gallery handlers, unused Header import, `params.locale` in the
  root layout, extra `,` (empty slot) in the product collections.

## Out of scope

- Removing old template components, English data, `.vscode` settings.

## Hosts

Same build for `hubertuspilates.com` and `hubertuspilates.ir`. Tested the built `out/`
with a local Apache using the new `.htaccess`.
