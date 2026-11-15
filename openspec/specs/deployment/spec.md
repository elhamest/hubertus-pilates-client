# deployment Specification

## Purpose
How the site is built and published to its two hosts. Code: `next.config.js`, `.github/workflows/nextjs.yml`, `.github/workflows/deploy-ir.yml`, `CNAME`, `public/.htaccess`. Guide: `docs/DEPLOY.md`.

## Requirements

### Requirement: Static export
The build SHALL produce a static site in `out/` (`output: "export"`, unoptimized images, `trailingSlash: true`), so every page is `folder/index.html`. The only server code SHALL be `api/contact.php`.

#### Scenario: Build
- **WHEN** `npm run build` runs
- **THEN** `out/` contains `index.html` for every page, and `out/api/contact.php`

### Requirement: Auto deploy to GitHub Pages
Every push to `main` (or a manual run) SHALL build the site with Node 20 and publish `out/` to GitHub Pages at `hubertuspilates.com` (the `CNAME` file). Only one Pages deploy SHALL run at a time.

#### Scenario: Push to main
- **WHEN** a commit is pushed to `main`
- **THEN** the "Deploy Next.js site to Pages" workflow builds and deploys the site

### Requirement: Auto deploy to the .ir host
Every push to `main` (or a manual run) SHALL build the site, write `out/api/contact-config.php` from secrets, and upload `out/` by FTP (`lftp mirror`) into `public_html/` of the ParsPack host. A new run SHALL cancel a running one, so only the newest commit is uploaded.

#### Scenario: Two quick pushes
- **WHEN** a second commit is pushed while the `.ir` upload of the first is running
- **THEN** the first run stops and the second one uploads the newest site

### Requirement: Visible build version
The footer SHALL show `v<version from package.json> (<short commit>)`.

#### Scenario: Check the live build
- **WHEN** a person opens the footer of either site
- **THEN** they see the commit the site was built from
