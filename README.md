# Maansi Arora's portfolio

A responsive React + TypeScript portfolio with a sage, cream and warm brown palette. Built with Vite, with no external fonts or image services.

## Local development

```sh
npm install
npm run dev
```

## Checks

```sh
npm run lint
npm run build
```

Use `npm run preview` to preview the production build at `/maansi_portfolio/`.

## GitHub Pages

The Vite base path is configured for the `maansiarora/maansi_portfolio` repository.

1. Push your source changes to GitHub.
2. Run `npm run deploy`. The predeploy script builds the site before publishing the generated output to the `gh-pages` branch. Git authentication and repository write access are required.
3. In the repository's **Settings → Pages**, select **Deploy from a branch**, the **gh-pages** branch, and **/ (root)**.
4. The site will be available at <https://maansiarora.github.io/maansi_portfolio/>.

If the repository name changes, update `base` in [vite.config.ts](./vite.config.ts) and `homepage` in [package.json](./package.json).

## Content and interactions

- Section components live in [src/components](./src/components).
- [src/App.css](./src/App.css) contains layouts and illustrations; [src/index.css](./src/index.css) defines the shared palette and base styles.
- Navigation supports mobile screens, keyboard focus and a skip link. Motion respects the visitor's reduced-motion preference.
- Selected work can be filtered by category. Each card expands to show context, without exposing private source code or implying public project links.
- Contact links to the supplied GitHub profile. Add a verified email or LinkedIn URL to [the contact component](./src/components/contact.tsx) when ready.
