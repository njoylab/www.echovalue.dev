# Repository Guidelines

## Project Overview

Static marketing/portfolio site for [echoValue](https://www.echovalue.dev) — pay-as-you-go APIs and free developer tools. No framework, no build step, no bundler. Just HTML, CSS, and vanilla JS served as-is.

## Project Structure

```
/
├── index.html              # Main homepage
├── privacy.html            # Privacy policy
├── toc.html                # Terms and conditions
├── db-api/index.html       # DB API product landing page
├── monitor-api/index.html  # Monitor API landing page
├── assets/
│   ├── css/
│   │   └── dev-theme.css   # Single active theme (edit this)
│   ├── js/
│   │   └── nav-toggle.js   # Mobile hamburger toggle (12 lines)
│   └── (no build artifacts, no vendor libs)
└── images/
    └── echovalue_logo.webp # Brand logo
```

## Build, Test & Development Commands

There is **no build system, package manager, or `package.json`**. All files are served statically.

```sh
# Local preview (Python 3)
python3 -m http.server 8000
# Then visit http://localhost:8000/

# Alternative with Node.js (if available)
npx serve .
```

### Linting & Type Checking

No linting or type-checking tools are configured. If you add one, prefer:
- **HTML**: `html-validate` or VS Code built-in
- **CSS**: `stylelint`
- **JS**: `eslint`

### Testing

No automated tests. Validate manually:
- Open affected pages in a browser
- Check responsive layout at mobile (≤768px), tablet, and desktop
- Verify navigation links, anchor scrolls, and external links
- If changing shared styles, spot-check `index.html`, `db-api/index.html`, and `privacy.html`

## Code Style & Naming Conventions

### HTML
- Use `<!DOCTYPE HTML>` (uppercase) as doctype, matching existing pages
- Indent with **tabs**, not spaces
- Self-close void elements with space: `<br />`, `<hr />`
- Use semantic elements: `<nav>`, `<section>`, `<article>`, `<footer>`
- Include Open Graph and Twitter meta tags on every page (copy pattern from `index.html`)
- External links must have `target="_blank"` and `rel="noopener noreferrer"`
- Use relative paths for internal links (`../assets/css/dev-theme.css` from subdirs)
- Keep `lang="en"` on `<html>`

### CSS
- All styles live in `assets/css/dev-theme.css` — this is the single source of truth
- CSS custom properties (variables) are defined in `:root` — use them
- Naming: BEM-ish kebab-case (`.project-card`, `.project-card-header`, `.btn-primary`)
- Utility classes follow Tailwind-like shorthand: `.mt-1` through `.mt-4`, `.mb-1` through `.mb-4`, `.text-center`, `.text-muted`, `.btn-block`, `.pt-nav`
- Responsive breakpoint: single `@media (max-width: 768px)` query for mobile
- Edit `dev-theme.css` directly — there is no Sass or CSS build step

### JavaScript
- Minimal JS — only `assets/js/nav-toggle.js` (mobile hamburger toggle)
- IIFE pattern: `(function () { ... })();`
- Avoid adding new JS unless necessary; prefer CSS-only solutions

### File Naming
- Lowercase, hyphen-separated: `feature-name/index.html`
- Keep asset paths relative to the page location
- New product pages go in their own subdirectory (`product-name/index.html`)

## Design System

The site uses a GitHub Dark inspired developer aesthetic:
- **Primary accent**: `#58a6ff` (blue) via `--color-accent-blue`
- **Background**: `#0d1117` primary, `#161b22` secondary (cards)
- **Font**: Inter (Google Fonts) + JetBrains Mono for code accents
- **Cards**: Dark background with subtle border (`#30363d`), rounded corners, hover lift effect with box-shadow
- **Buttons**: `.btn-primary` (filled), `.btn-secondary` (border), `.btn-outline` (accent border)
- **Monospace accent**: `.mono` and `.text-mono` classes for code-style branding

## Commit & PR Guidelines

Use short type-prefixed summaries:
- `Feature: Add open source section`
- `Fix: Update text colors`
- `Design: Adjust card spacing`

Allowed prefixes: `Feature:`, `Fix:`, `Design:`, `Docs:`.

PRs should include:
- Brief summary of changes
- List of touched pages
- Screenshots for visual changes (before/after)

## Key External Dependencies (CDN-loaded)

- **Font Awesome 6.4.0** — loaded from cdnjs CDN in `<head>` on every page
- **Inter + JetBrains Mono fonts** — loaded from Google Fonts in `dev-theme.css` `@import`
