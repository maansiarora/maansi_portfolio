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
- Selected work can be filtered by category, with Deployment Zone Expansion listed first. Each card contains a heading, a short explanation, technologies and a "View case study" call to action; the entire card links to its dedicated page.
- Project content lives in [src/data/projects.ts](./src/data/projects.ts). Case studies use shareable `#/case-studies/<slug>` routes so direct links and refreshes work on GitHub Pages.
- Each case study has independently editable sections and a diagram prompt in [src/data/case-studies.ts](./src/data/case-studies.ts). They currently use the same headings and order: hero, Portfolio Architecture Diagram, The Challenge, My Role, Key Decisions, Technical Highlights, Impact and Lessons Learned. The shared layout in [src/components/case-study.tsx](./src/components/case-study.tsx) renders each section's `content` with line breaks preserved, or its labelled `prompt` placeholder if content is not yet provided. Optional `architectureContent` appears above the diagram; each hero uses its project's existing summary and technologies.
- Contact links to the supplied GitHub profile. Add a verified email or LinkedIn URL to [the contact component](./src/components/contact.tsx) when ready.
- The first case study includes its Aug 2025 - Feb 2026 duration and supplied architecture diagram, with a full-size image link. Set each project's optional `duration` and `architectureImage` fields in [src/data/case-studies.ts](./src/data/case-studies.ts) as content becomes available; other diagrams remain placeholders.
