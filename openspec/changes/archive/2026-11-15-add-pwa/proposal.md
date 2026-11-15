# Add PWA support

## Why

People should be able to install the site as an app on their phone or computer, and open pages they already visited when they are offline.

## What changes

- Add a web app manifest (`src/app/manifest.js`, built to `/manifest.webmanifest`).
- Add app icons: `public/icons/icon-192.png`, `public/icons/icon-512.png` and `src/app/apple-icon.png`.
- Add a simple service worker (`public/sw.js`) that caches pages and static files.
- Register the service worker in the root layout (production only).
- Set the theme color to `#86508e` and add Apple web app metadata.

## Out of scope

- Push notifications.
- Background sync.
- A custom "install" button.
- `next-pwa`, Workbox or other PWA libraries.

## Hosts

The site is served from the domain root on both `hubertuspilates.com` and `hubertuspilates.ir`. All PWA paths are root paths (`/`, `/sw.js`, `/icons/...`), so the same build works on both hosts.
