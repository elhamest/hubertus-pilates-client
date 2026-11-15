# pwa Specification

## Purpose
The site can be installed as an app and opens visited pages offline. Code: `src/app/manifest.js`, `public/sw.js`, `src/components/service-worker/ServiceWorkerRegister.jsx`, `public/icons/`.

## Requirements

### Requirement: Installable app
The site SHALL provide a web app manifest (`/manifest.webmanifest`), icons and a service worker so browsers can install it. The app SHALL open at `/` in its own window with theme color `#86508e`.

#### Scenario: Browser offers install
- **WHEN** a user opens the site in a browser that supports PWAs
- **THEN** the browser finds the manifest with name, icons, `start_url` `/` and display `standalone`, and can install the site

### Requirement: Offline pages
The service worker SHALL use the network first for pages and images (cache when offline), and the cache first for `/_next/static/` files. It SHALL be registered only in production builds.

#### Scenario: Visited page offline
- **WHEN** the user visited a page before and is now offline
- **THEN** the page opens from the cache

#### Scenario: Not visited page offline
- **WHEN** the user opens a page they never visited and is offline
- **THEN** the cached home page `/` is shown

#### Scenario: New deploy
- **WHEN** a new version is deployed and the user is online
- **THEN** the user sees the new pages at once (network first)

### Requirement: Same on both hosts
The PWA SHALL work the same on `hubertuspilates.com` and `hubertuspilates.ir` (all paths start at the domain root).
