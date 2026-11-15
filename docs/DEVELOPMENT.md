# Development, build and deploy

## Needs

- Node.js 20 (same as CI)
- npm (the repo has `package-lock.json`)

## Run on your computer

```bash
npm ci          # install packages
npm run dev     # start dev server at http://localhost:3000
npm run lint    # check code style
```

## Build

```bash
npm run build   # = next build; writes the static site to out/
```

- `next.config.js` has `output: "export"` → plain HTML/CSS/JS in `out/`.
- `trailingSlash: true` → every page is `folder/index.html`.
- `images.unoptimized: true` → images are copied as they are (no image server).
- No basePath: the site runs at the domain root on both hosts.
- `next.config.js` also sets `NEXT_PUBLIC_APP_VERSION` (from `package.json`)
  and `NEXT_PUBLIC_COMMIT_SHA` (from `GITHUB_SHA` in CI, or `git rev-parse`),
  shown in the footer.
- The service worker is registered only in production, so `npm run dev` is
  not affected by its cache.

To preview the build: serve `out/` with any static server, e.g.
`npx serve out`. The contact form always posts to the live `.ir` script.

## Deploy

Automatic on every push to `main`, to **both** sites:

- `.github/workflows/nextjs.yml` → GitHub Pages (`hubertuspilates.com`, ~2 min).
- `.github/workflows/deploy-ir.yml` → FTP to ParsPack (`hubertuspilates.ir`, ~10 min).

Rules for this repo: branch names describe the work (`fix/...`, `feat/...`),
and finished work is pushed straight to `main` (no PRs).

Full guide (secrets, FTP, mailbox, moving host, troubleshooting):
[DEPLOY.md](./DEPLOY.md).

## OpenSpec workflow

Specs of the current behavior are in `openspec/specs/`. New work is done as
an OpenSpec **change**:

```bash
npm i -g @fission-ai/openspec   # once, to get the `openspec` CLI
openspec list                   # open changes
openspec list --specs           # capabilities
openspec validate --all         # check spec format
```

In Claude Code use the skills in `.claude/skills/`:
`/openspec-propose "<idea>"` → review → `/openspec-apply-change` →
`/openspec-archive-change` (merges the change's spec deltas into
`openspec/specs/`).
