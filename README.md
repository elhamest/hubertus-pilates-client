# Hubertus Pilates website

Website of Hubertus Pilates, an Iranian maker of Pilates equipment:
https://hubertuspilates.com

Static **Next.js 15** site (Persian, RTL), deployed to **GitHub Pages**.
There is no backend: all content is in `src/data/fa/index.js`.

## Quick start

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static site in out/
```

Push to `main` → GitHub Actions deploys the site.

## Docs

- [Architecture](docs/ARCHITECTURE.md) – how the code is built, folders, pages, data
- [Development](docs/DEVELOPMENT.md) – run, build, deploy, OpenSpec workflow
- [Content guide](docs/CONTENT-GUIDE.md) – add products, FAQ, texts
- [Known issues](docs/KNOWN-ISSUES.md) – bugs and dead code found
- [Specs](openspec/specs/) – current behavior as OpenSpec specs
