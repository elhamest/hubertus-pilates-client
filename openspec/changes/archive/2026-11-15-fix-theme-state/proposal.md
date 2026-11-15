# Fix theme state and memory

## Why

After a refresh the dark/light theme was wrong, and the choice looked forgotten.

Root causes:

1. The theme was set only after React loaded (in `useEffect`). The first paint
   always used the system theme, then it jumped. React state also started as
   "light", so the toggle icon was wrong at first.
2. Some CSS (`Gallery`, `ThumsGallery`, `Slider`, `SectionTitle`) used
   `@media (prefers-color-scheme: dark)`. These parts followed the system
   theme, not the user's choice.
3. A custom webpack `splitChunks` in `next.config.js` made Next load a CSS file
   as a `<script>`, so every page had "Invalid or unexpected token" errors.
4. The service worker served images and page data cache-first, so old files
   could stay after a deploy.

## What changes

- `ThemeProvider.js`: a small `THEME_SCRIPT` runs in `<head>` before paint. It
  sets `dark` or `light` on `<html>` from `localStorage.theme`, or from the
  system theme when there is no choice. React only reads and changes that class.
- `globals.css`: one dark block, `.dark`. The `@media` copy is removed.
- Component CSS: `@media (prefers-color-scheme: dark)` becomes `:global(.dark)`.
- `next.config.js`: remove the custom `splitChunks` (Next defaults are fine).
- `public/sw.js`: cache-first only for `/_next/static/` (hashed files). All else
  network-first. Cache name `hubertus-v2` clears the old cache.

## Hosts

Same static build for `hubertuspilates.com` and `hubertuspilates.ir`.
