# Hubertus Pilates website

Company website of Hubertus Pilates, an Iranian maker of Pilates equipment:
product catalog, about us, FAQ and a contact form. Persian, right-to-left.

- https://hubertuspilates.com (GitHub Pages)
- https://hubertuspilates.ir (ParsPack host, works inside Iran)

Built with Next.js 15 as a static site. Every push to `main` updates both sites.

## Run on your computer

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run lint
```

## Docs

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) – how the code is built
- [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) – change texts, products, FAQ
- [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) – run, build, OpenSpec workflow
- [docs/DEPLOY.md](docs/DEPLOY.md) – hosting, GitHub secrets, contact form email, troubleshooting
- [docs/KNOWN-ISSUES.md](docs/KNOWN-ISSUES.md) – known problems and dead code
- [CLAUDE.md](CLAUDE.md) – short notes for AI helpers
- `openspec/specs/` – what the site does, per feature
