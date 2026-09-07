# Portfolio

Hello, this is my portfolio website.

I wanted to make it public, so here it is.

The website intentionally keeps the frontend relatively simple. As a backend-oriented full-stack engineer, I care more about systems, structure, reliability, and maintainability than adding complexity.

## Overview

The project uses:

* **Next.js:** The main framework in my stack. It is strong for SEO, flexible enough for full-stack work, and easy to structure without making things unnecessarily complicated.

* **Tailwind CSS:** Used for styling and responsive design. I prefer keeping most styling close to the components rather than maintaining a large separate CSS layer.

* **GitHub Actions:** I use it for CI, release management, and publishing container images. Production deployment is handled separately through private infrastructure.

* **Mermaid.js:** Used for the diagrams in the systems section. It keeps diagrams close to the code, and honestly, it is also fun to write.

* **Docker:** A very classic choice. It packages the application into a predictable artifact and helps keep the runtime environment consistent across deployments.

* **Oxlint & Oxfmt:** Replacements for ESLint and Prettier in this project. They are fast, simple, and give me enough control to keep formatting and linting consistent without adding too much tooling.

## Contribution

I'm not actively looking for contributions, since this is my personal portfolio.

Suggestions and criticism are still welcome. If you notice something that could be improved, feel free to open an issue.

## Local development

Copy `.env.example` to `.env.local`, provide the asset origin and contact email, then run:

```bash
npm ci
npm run dev
```

## License

The MIT License applies to the source code. Portfolio copy, personal branding, and third-party trademarks are not intended for reuse.
