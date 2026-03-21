# Repository Guidelines

## Project Overview

Static marketing/portfolio site for [echoValue](https://www.echovalue.dev) — pay-as-you-go APIs and free developer tools. No framework, no build step, no bundler. Just HTML, CSS, Sass, and vanilla/jQuery JS served as-is.

## Project Structure

```
/
├── index.html              # Main homepage
├── privacy.html            # Privacy policy
├── toc.html                # Terms and conditions
├── db-api/index.html       # DB API product landing page
├── monitor-api/index.html  # Monitor API landing page
├── assets/
│   ├── css/                # Compiled stylesheets (do NOT edit directly)
│   │   ├── dev-theme.css   # Active theme loaded by pages
│   │   ├── custom.css      # Custom overrides (also loaded)
│   │   ├── main.css        # Legacy Hyperspace theme
│   │   └── noscript.css
│   ├── sass/               # Source of truth for styles
│   │   ├── main.scss       # Entry point
│   │   ├── base/           # Reset, page, typography
│   │   ├── components/     # Buttons, cards, forms, sections, etc.
│   │   ├── layout/         # Header, footer, sidebar, wrapper
│   │   └── libs/           # Variables, mixins, breakpoints, vendor
│   ├── js/                 # JavaScript (jQuery plugins + main.js)
│   └── webfonts/           # Self-hosted web fonts
└── images/                 # Site imagery and icons
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

### Sass Compilation

Sass sources in `assets/sass/` must be compiled to `assets/css/` before committing. Use any Sass CLI:

```sh
# Compile main theme
sass assets/sass/main.scss assets/css/main.css

# Watch for changes
sass --watch assets/sass/main.scss:assets/css/main.css
```

`dev-theme.css` and `custom.css` appear to be hand-maintained CSS, not Sass outputs. Edit those files directly.

### Linting & Type Checking

No linting or type-checking tools are configured. If you add one, prefer:
- **HTML**: `html-validate` or VS Code built-in
- **CSS**: `stylelint`
- **JS**: `eslint` (though code is legacy jQuery, minimal edits expected)

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

### CSS / Sass
- CSS custom properties (variables) are defined in `:root` in `custom.css` — use them
- Naming: BEM-ish kebab-case (`.project-card`, `.project-card-header`, `.btn-primary`)
- Utility classes follow Tailwind-like shorthand: `.mt-1` through `.mt-4`, `.mb-1` through `.mb-4`, `.text-center`, `.text-muted`
- Responsive breakpoint: single `@media (max-width: 768px)` query for mobile
- When editing Sass partials (`_*.scss`), recompile to `main.css` afterward
- Prefer editing Sass in `assets/sass/` over raw CSS when changing core structural styles
- `dev-theme.css` and `custom.css` are edited directly (not Sass-generated)

### JavaScript
- Legacy jQuery-based code in `assets/js/main.js` (from Hyperspace/Pixelarity template)
- Minified vendor libs (`jquery.min.js`, `breakpoints.min.js`, etc.) — do not edit
- IIFE pattern: `(function($) { ... })(jQuery);`
- Avoid adding new JS unless necessary; prefer CSS-only solutions

### File Naming
- Lowercase, hyphen-separated: `feature-name/index.html`
- Keep asset paths relative to the page location
- New product pages go in their own subdirectory (`product-name/index.html`)

## Design System

The site uses a minimal, developer-focused aesthetic:
- **Primary color**: `#2563eb` (blue)
- **Font**: Inter (Google Fonts), with system font fallback stack
- **Dark sections**: `#0f172a` background, light text
- **Cards**: White with subtle border (`#e2e8f0`), rounded corners, hover lift effect
- **Buttons**: `.btn-primary` (filled), `.btn-secondary` (light), `.btn-outline` (border)
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

- **jQuery 3.x** — loaded locally from `assets/js/jquery.min.js`
- **Font Awesome 6.4.0** — loaded from cdnjs CDN in `<head>`
- **Inter font** — loaded from Google Fonts in `custom.css`
