# PWA

## ADDED Requirements

### Requirement: Installable app

The site SHALL provide a web app manifest, icons and a service worker so browsers can install it as an app.

#### Scenario: Browser offers install
- WHEN a user opens the site in a browser that supports PWAs
- THEN the browser finds `/manifest.webmanifest` with name, icons, `start_url` `/` and display `standalone`
- AND the browser can install the site as an app

#### Scenario: Installed app opens
- WHEN the user opens the installed app
- THEN it opens at `/` in its own window with theme color `#86508e`

### Requirement: Offline pages

The service worker SHALL serve pages and static files from its cache when the network is not available.

#### Scenario: Visited page offline
- WHEN the user visited a page before and is now offline
- THEN the page opens from the cache

#### Scenario: Not visited page offline
- WHEN the user opens a page they never visited and is offline
- THEN the cached home page `/` is shown

### Requirement: Same on both hosts

The PWA SHALL work the same way on `hubertuspilates.com` and `hubertuspilates.ir`.

#### Scenario: Root paths
- WHEN the site is served from the domain root on either host
- THEN the manifest, `sw.js` and icons load from root paths and the app can be installed and used offline
