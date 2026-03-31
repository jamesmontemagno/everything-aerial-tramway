# Project Guidelines

## Scope
This workspace centers on the Astro site in [tramway-site/](../tramway-site/). The research brief in [tramway-research.md](../tramway-research.md) is the main product context; link to it instead of restating it.

## Code Style
Follow the existing Astro/TypeScript/CSS patterns in [tramway-site/src/pages/index.astro](../tramway-site/src/pages/index.astro), [tramway-site/src/content.config.ts](../tramway-site/src/content.config.ts), and [tramway-site/src/styles/global.css](../tramway-site/src/styles/global.css).
Keep edits small and consistent with the current component structure. Prefer plain Astro and vanilla client-side JS over introducing a framework.

## Architecture
The site is content-driven:
- [tramway-site/src/content/systems/](../tramway-site/src/content/systems/) holds the primary collection used by the site.
- [tramway-site/src/pages/systems/[slug].astro](../tramway-site/src/pages/systems/[slug].astro) renders system detail pages.
- [tramway-site/src/pages/systems/index.astro](../tramway-site/src/pages/systems/index.astro) implements client-side search and filtering.
- [tramway-site/src/layouts/SiteLayout.astro](../tramway-site/src/layouts/SiteLayout.astro) composes the shared shell.

The blog collection under [tramway-site/src/content/blog/](../tramway-site/src/content/blog/) exists, but there is no route handler for it yet. Do not assume blog posts are publicly routed unless that changes.

## Build and Test
Run commands from [tramway-site/](../tramway-site/):
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run astro`

There is no dedicated test script in the current project.

## Conventions
- Treat [tramway-site/src/content.config.ts](../tramway-site/src/content.config.ts) as the source of truth for content fields and enums.
- Keep global styling aligned with the design tokens in [tramway-site/src/styles/global.css](../tramway-site/src/styles/global.css).
- Use the existing data collection and rendering patterns rather than adding new abstractions unless the change clearly needs them.
- Before relying on RSS or sitemap output, update the placeholder `site` value in [tramway-site/astro.config.mjs](../tramway-site/astro.config.mjs).
- Prefer linking to existing docs and source files over duplicating their contents.
