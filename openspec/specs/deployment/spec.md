# deployment Specification

## Purpose
How the site is built and published. Code: `next.config.js`, `.github/workflows/nextjs.yml`, `CNAME`.

## Requirements

### Requirement: Static export
The build SHALL produce a fully static site in `out/` (`output: "export"`, unoptimized images) with no server code.

#### Scenario: Build
- **WHEN** `npm run build` runs
- **THEN** `out/` contains HTML for every page and no server is needed

### Requirement: Auto deploy to GitHub Pages
Every push to `main` (or a manual run) SHALL build the site with Node 20 and publish `out/` to GitHub Pages. Only one deploy SHALL run at a time.

#### Scenario: Merge to main
- **WHEN** a PR is merged to `main`
- **THEN** the "Deploy Next.js site to Pages" workflow builds and deploys the site

### Requirement: Custom domain
The site SHALL be served at `hubertuspilates.com` via the `CNAME` file.

#### Scenario: Visit domain
- **WHEN** a visitor opens https://hubertuspilates.com
- **THEN** the GitHub Pages site is shown
