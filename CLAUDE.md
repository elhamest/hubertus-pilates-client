# CLAUDE.md

Static Next.js 15 (App Router, JS, CSS Modules) site for Hubertus Pilates.
Persian only, RTL. No database. The only server code is one PHP file for the contact form.

Two live sites, both built from `main`:
- https://hubertuspilates.com – GitHub Pages (`.github/workflows/nextjs.yml`)
- https://hubertuspilates.ir – ParsPack DirectAdmin host, uploaded by FTP (`.github/workflows/deploy-ir.yml`)

## Read first
- `docs/ARCHITECTURE.md` – full map (pages, components, data model, theme, PWA, contact form)
- `docs/DEPLOY.md` – both deploys, GitHub secrets, FTP, mailbox, troubleshooting
- `docs/CONTENT-GUIDE.md` – where each text/product/link lives
- `docs/KNOWN-ISSUES.md` – known problems and dead code
- `openspec/specs/*/spec.md` – current behavior per capability

## Key facts
- Content: `src/data/fa/index.js` (products, nav, FAQ, about) and `public/locales/fa/common.js` (UI texts).
- Routes: `/`, `/collections/`, `/collections/[collectionId]/`, `/collections/[collectionId]/[productId]/`, `/about-us/`, `/faq/`.
- `trailingSlash: true`: every page is `folder/index.html`. Always use absolute paths (`/img/...`), never relative ones.
- Contact form posts to `https://hubertuspilates.ir/api/contact.php` (`public/api/contact.php`). It sends by SMTP as `no-reply@hubertuspilates.ir` to the `SUPPORT_EMAIL` secret, and keeps a hidden copy in the no-reply Inbox.
- Footer shows `v<package version> (<commit>)`, so you can see which build is live.
- `@/` = `src/`. No tests: check with `npm run build` and `npm run lint`.

## Working rules
- KISS / YAGNI, simple words. The owner writes Persian.
- Branch names describe the work (`fix/...`, `feat/...`, `docs/...`).
- No PRs in this repo: push finished work straight to `main` (this deploys both sites).
- New features and fixes go through OpenSpec: `/openspec-propose` → `/openspec-apply-change` → `/openspec-archive-change`.
- When behavior changes, update the matching spec and the docs.
- Never commit secrets (support email, passwords). They live only in GitHub secrets.
