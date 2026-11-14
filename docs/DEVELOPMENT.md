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

In dev mode there is **no basePath**, so URLs start at `/`.

## Build

```bash
npm run build   # = next build; writes the static site to out/
```

- `next.config.js` has `output: "export"` → result is plain HTML/CSS/JS in `out/`.
- `images.unoptimized: true` → images are copied as they are (no image server).
- In production mode `next.config.js` sets
  `basePath: "/hubertus-pilates-client"` (for the old URL
  `<user>.github.io/hubertus-pilates-client`). In CI the step
  `actions/configure-pages` with `static_site_generator: next` rewrites the
  basePath to match the real Pages URL (the custom domain), so the live site
  works at `/`. A local `npm run build` still uses `/hubertus-pilates-client`.
- `npm run export` is the same as `build` (old Next.js habit).
- `webpack` config in `next.config.js` splits JS into `framework` (react,
  next) and `commons` (other node_modules) chunks.

To preview the build locally: serve `out/` with any static server, and
remember the basePath above.

## Deploy

Automatic. File: `.github/workflows/nextjs.yml`.

1. Push (or merge a PR) to `main`.
2. Job **build**: checkout → Node 20 → `configure-pages` → `npm ci` →
   `next build` → upload `out/`.
3. Job **deploy**: `actions/deploy-pages` publishes to GitHub Pages.
4. `CNAME` file = `hubertuspilates.com` (custom domain).

You can also start it by hand: GitHub → Actions → "Deploy Next.js site to
Pages" → Run workflow.

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
