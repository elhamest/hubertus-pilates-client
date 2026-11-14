# CLAUDE.md

Static Next.js 15 (App Router, JS, CSS Modules) site for https://hubertuspilates.com.
No backend. Persian only, RTL. Deployed to GitHub Pages from `main`.

## Read first
- `docs/ARCHITECTURE.md` – full map (pages, components, data model, theme, deploy)
- `docs/CONTENT-GUIDE.md` – where each text/product/link lives
- `docs/KNOWN-ISSUES.md` – known bugs and dead code
- `openspec/specs/*/spec.md` – current behavior per capability

## Key facts
- Content: `src/data/fa/index.js` (products, nav, FAQ, about) and `public/locales/fa/common.js` (UI texts).
- Routes: `/`, `/collections`, `/collections/[collectionId]`, `/collections/[collectionId]/[productId]`, `/about-us`, `/faq`.
- Contact form = `mailto:` (no server). Phones/socials are hard-coded in the footer.
- `@/` = `src/`. No tests: check with `npm run build` and `npm run lint`.

## Working rules
- KISS / YAGNI, simple words. Owner writes Persian.
- New features and fixes go through OpenSpec: `/openspec-propose` → `/openspec-apply-change` → `/openspec-archive-change`.
- When behavior changes, update the matching spec (via the change's delta) and the docs.
