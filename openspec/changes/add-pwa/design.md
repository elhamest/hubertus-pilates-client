# Design: add PWA support

## Manifest

Next.js App Router builds `src/app/manifest.js` into `/manifest.webmanifest` and adds the `<link rel="manifest">` tag. It is `force-static` so it works with the static export (`out/`). Name, short name and description come from `public/locales/fa/common.js`. Language is `fa`, direction is `rtl`, display is `standalone`.

## Icons

Icons are made from `public/img/logo.svg`: a white square with the logo centered at 70% of the width. The 512 icon is also used as the `maskable` icon, so the logo stays inside the safe zone. `src/app/apple-icon.png` (180x180) is picked up by Next.js for iOS.

## Service worker

`public/sw.js` is a small hand-written worker:

- On install, it caches `/`.
- Pages (navigations): network first. If the network fails, use the cached page, or `/` as a fallback.
- Other same-origin GET requests (JS, CSS, images, fonts): cache first, then network; good responses are saved.
- Requests to other origins and non-GET requests are not touched.
- On activate, caches with another name are deleted. Change `CACHE` to clear old caches.

## Registration

`ServiceWorkerRegister` is a client component rendered in the root layout. It registers `/sw.js` only when `NODE_ENV` is `production`, so the cache does not get in the way during development.

## Theme

`viewport.themeColor` and the manifest `theme_color` are `#86508e` (the logo purple).
