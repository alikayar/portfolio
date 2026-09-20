<h1 align="center">Ali Kayar — Portfolio</h1>

<p align="center">
  Personal portfolio showcasing selected software systems and websites.<br>
  Built with Next.js and available at <a href="https://alikayar.com">alikayar.com</a>.
</p>

<p align="center">
  <a href="https://github.com/alikayar/portfolio/actions/workflows/ci.yml">
    <img src="https://github.com/alikayar/portfolio/actions/workflows/ci.yml/badge.svg" alt="CI">
  </a>
</p>

## Overview

Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

- **External assets:** portfolio images are served from a configurable HTTPS origin.
- **Diagrams:** Mermaid sources are version-controlled and rendered to committed SVG assets.
- **Status pages:** not-found and error illustrations are standalone Studio exports in `public/illustrations/`; edit their sources in Studio and copy the rendered SVGs here.
- **Metadata & SEO:** Open Graph, JSON-LD structured data, sitemap, and robots metadata are included.
- **Delivery:** CI validates the application and publishes container images tagged by commit SHA.

## Local development

Use the Node.js version pinned in the [CI workflow](.github/workflows/ci.yml). From the repository root, copy the example environment file:

```bash
cp .env.example .env.local
```

Set both values in `.env.local`:

| Variable        | Purpose                                                                        |
| --------------- | ------------------------------------------------------------------------------ |
| `ASSETS_URL`    | HTTPS origin serving the portfolio images, without a path, query, or fragment. |
| `CONTACT_EMAIL` | Email address displayed in the contact section.                                |

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Development workflow

Run the same quality checks and application build used by CI:

```bash
npm run format:check
npm run lint
npm run build
```

After editing a Mermaid source in [diagrams/](diagrams/), use Docker to regenerate the SVG in [public/diagrams/](public/diagrams/) and commit both files:

```bash
npm run diagrams:build
```

## Releases

CI checks the application and publishes a commit-SHA-tagged container image to GitHub Container Registry on pushes to `main`. Version tags promote an existing image; production deployment runs through private infrastructure. See the [release guide](docs/releases.md) for the versioning, publishing, and rollback process.

## License

The source code is licensed under the [MIT License](LICENSE). Portfolio content, personal branding, and third-party assets or trademarks are excluded from that license. See [LICENSE](LICENSE) for the full scope.
