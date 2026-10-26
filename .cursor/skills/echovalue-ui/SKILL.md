---
name: echovalue-ui
description: >
  Shared UI for echoValue landing pages and free-tool chrome. The checkout is
  /Users/emiliano/dev/www.echovalue.dev. Use when creating, editing, or
  reviewing any HTML page — homepage, product landings (db-api, webhook-api,
  monitor-api, mail2webhook), nested examples, or legal pages — or a free
  tool on its own host (geoip, lookup, jsonlint, markdown-viewer, webhook,
  secrets, crontab, urlsummary), so they keep the same head assets, navbar,
  hero, sections, cards, pricing, contact, footer, theme, and the green tool
  name in the brand. Read this before adding a product page, changing shared
  chrome, or branding a tool.
---

# echoValue UI

echoValue pages are static HTML. There is no templating, no build, and no component runtime. Shared UI is the same markup copied into every page, styled by one stylesheet.

Treat the shell (head assets, skip link, navbar frame, contact, footer, theme/nav scripts) as one component. Page copy and in-page sections are the only part that should differ.

Copy-paste blocks live in [blocks.md](blocks.md). Use those snippets. Do not invent a parallel navbar, footer, button, or card.

## Checkout

Work from `/Users/emiliano/dev/www.echovalue.dev`. Tokens are in `assets/css/dev-theme.css`. Scripts are in `assets/js/`. Page markup is the HTML files in that tree. Read those files before changing shared chrome.

## When to read this

- New page under `/` or `product-name/index.html`
- Edits to nav, footer, contact, hero, pricing, cards, code samples, or `assets/css/dev-theme.css`
- A landing that "looks off" next to `webhook-api/` or `db-api/`
- A free-tool navbar or title (`https://geoip.echovalue.dev` and the other `*.echovalue.dev` tools)

## Start from a real page

| New page | Copy from | Asset prefix |
| --- | --- | --- |
| Product landing, one directory deep (`webhook-api/index.html`) | `webhook-api/index.html` | `../assets/` |
| Nested example (`db-api/agent-state/index.html`) | `db-api/agent-state/index.html` | `../../assets/` |
| Site root (`index.html`, `privacy.html`, `toc.html`) | the matching root page | `assets/` |
| Legal page | `privacy.html` | `assets/` |

Then replace title, meta, JSON-LD, brand text, nav anchors, and body sections. Leave the shell in place.

## Page skeleton

Every marketing page, in this order:

1. `<!DOCTYPE HTML>` and `<html lang="en">`
2. Head from [blocks.md](blocks.md) — page-specific title, description, canonical, Open Graph, Twitter, JSON-LD
3. `<a href="#main" class="skip-link">Skip to content</a>`
4. `<nav class="navbar">` — brand, theme toggle, hamburger, links, Dashboard CTA last
5. `<main id="main">`
6. Hero, then sections
7. Contact section (marketing pages)
8. `</main>`
9. Footer
10. `nav-toggle.js` and `theme-toggle.js`

Legal pages skip the hero and contact block. Use `<section class="section pt-nav">` and `.legal-content` instead.

Indent with tabs. Self-close void elements with a space: `<br />`. External links use `target="_blank"` and `rel="noopener noreferrer"`.

## Shared vs page-specific

Shared. Change it on every HTML page in the same commit:

- Favicon set, web manifest, font stylesheet, Font Awesome 6.4.0 (with the integrity hash in [blocks.md](blocks.md))
- `dev-theme.css?v=N` — one cache-buster on every page. Bump `N` everywhere when the CSS file changes. Current value is `v=11`
- Skip link, theme toggle, hamburger button
- Footer link list and the "Built by nJoyLab.com · IT12822520966 · v2.0" line
- Contact email and the three social links
- `nav-toggle.js?v=1` and `theme-toggle.js?v=1`

Page-specific. Do not copy these across products:

- `<title>`, description, canonical, `og:*`, `twitter:*`, JSON-LD
- Navbar brand string (`echoValue` on the homepage, `echoValue DB API` on that product)
- Navbar anchor list (in-page sections for that page only)
- Hero copy and the sections inside `<main>`
- Extra scripts: `code-tabs.js` only if the page has `.code-tabs`; `copy-tool-def.js` only on the DB API page that copies tool definitions

`index.html` preloads fonts and Font Awesome. Leave that optimization on the homepage. New product pages use the blocking `<link>` tags in [blocks.md](blocks.md).

## Asset paths

The site is static. CSS and JS paths are relative to the file:

- Root pages: `assets/css/dev-theme.css?v=11`
- One directory down: `../assets/css/dev-theme.css?v=11`
- Two directories down: `../../assets/css/dev-theme.css?v=11`

Footer and cross-site links use root paths (`/db-api/`, `/privacy`, `/toc`) so the footer markup matches on every page. Docs and dashboard stay absolute: `https://docs.echovalue.dev`, `https://dash.echovalue.dev`.

## Compose sections from these classes

Styles live only in `assets/css/dev-theme.css`. Use the tokens already defined on `:root` (`--ev-color-*`, and the `--color-*` aliases the pages already use). Do not add a second stylesheet, a `<style>` block, or a new hex color.

| Need | Markup |
| --- | --- |
| Product hero | `section.hero.compact` > `.container` > `h1` + `p` + `.hero-actions` |
| Homepage hero | `section.hero` (no `.compact`) |
| Next section after the hero | `section.section.no-border` |
| Later sections | `section.section`. Alternate a band with `section.section.bg-light` |
| Section title | `.section-header` > `h2` + `p`. The CSS prefixes `h2` with `// `, so the heading text is a short lowercase name: `pricing`, `how-it-works`, `get-started` |
| Feature / step grid | `.projects-grid` of `.project-card` |
| Price tiers | `.pricing-grid` of `.pricing-card`, one card `.featured` |
| curl / JSON sample | `.code-block` > `code`, with `.code-comment`, `.code-string`, `.code-function`, `.code-output` |
| Language switcher | `.code-tabs` plus `code-tabs.js`. See [blocks.md](blocks.md) |
| Coming soon | `.badge` inside the `h1` |
| Buttons | `.btn.btn-primary` (filled), `.btn.btn-secondary` (border), `.btn.btn-outline` (accent border). Full-width card action: add `.btn-block` |
| Spacing | `.mt-1`…`.mt-4`, `.mb-1`…`.mb-4`, `.text-center`, `.text-muted`, `.text-mono`, `.mono` |
| Narrow legal copy | `.legal-content` inside `.section.pt-nav` |

Product `h1`: put the product token in `<span class="mono">db</span>-api …`. The `.mono` span is the green accent (`--color-accent-green`, `#30d158`). The navbar brand on these pages stays the default text color.

Button labels are short commands, with an arrow when the link leaves the section: `read docs →`, `open dashboard ↗`, `view db-api →`. The navbar Dashboard item is `<a class="navbar-cta">`, not a `.btn`.

A feature card:

```html
<article class="project-card">
	<div class="project-card-header">
		<span class="project-card-icon"><i class="fa-solid fa-database"></i></span>
		<h3>db-api</h3>
	</div>
	<div class="project-card-content">
		<p>One or two sentences. What it does, not a slogan.</p>
		<ul class="project-features">
			<li>Concrete limit or behavior</li>
		</ul>
		<div class="project-card-actions">
			<a href="/db-api/" class="btn btn-primary">view db-api →</a>
			<a href="https://docs.echovalue.dev/key-value/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">api-ref</a>
		</div>
	</div>
</article>
```

Drop `.project-features` and `.project-card-actions` when the card is only a step. Keep the header icon and `h3`.

Pricing always states no subscription and that credits do not expire. One tier is `.pricing-card.featured`. Free tier button is `.btn-secondary`; paid tiers are `.btn-primary`.

## Free tools

Free tools are separate apps at `https://{name}.echovalue.dev`: `geoip`, `lookup`, `jsonlint`, `markdown-viewer`, `webhook`, `secrets`, `crontab`, `urlsummary`, `jwt`, `qr`, `export`. Local folders sometimes differ (`json.echovalue.dev`, `md.echovalue.dev`, `social.echovalue.dev`). They are not pages in this checkout. The reference shell is [geoip](https://geoip.echovalue.dev) (`/Users/emiliano/dev/geoip.echovalue.dev`).

The navbar brand is `echoValue` and the tool name, in JetBrains Mono, written as two words: `echoValue geoip`. `echoValue` stays the default text color at weight 600. The tool name is the green accent: `var(--positive)`, which aliases `var(--ev-color-success)` (`#30d158`), at weight 500. The same green holds in dark and light. The name is the short lowercase id, the same string as the homepage card `h3`.

```html
<a class="brand" href="/">echoValue <span class="brandProduct">geoip</span></a>
```

```css
.brand {
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 1.0625rem;
  font-weight: 600;
}
.brandProduct {
  color: var(--positive);
  font-weight: 500;
}
```

A page title may paint one identifier with that same green and the mono face. On geoip, `IP` in “What is my IP?” uses `--positive`. That word is the subject of the page. The brand green stays on the tool name.

Homepage cards in this repo keep the tool name as a plain `h3`. Marketing product pages keep the green on the hero token (`.mono`) and leave the navbar brand in the default text color.

## Voice

Match the pages already shipped:

- Direct, technical, short. Say what the request does.
- Section headings are identifiers (`how-it-works`), not title case.
- Write the support address as `support at echovalue dot dev`. Do not add a `mailto:` link.
- Social links stay Twitter `https://twitter.com/emln_`, LinkedIn `https://www.linkedin.com/in/emlns/`, GitHub `https://github.com/njoylab`.

## Theme and scripts

Dark is the default. Light mode is `data-theme="light"` on `<html>`, toggled by `.theme-toggle` and `assets/js/theme-toggle.js`. Do not fork colors per page.

`assets/js/nav-toggle.js` opens `.navbar-nav` from `.navbar-toggle`. Keep both elements and those class names or the menu breaks. The mobile breakpoint is the single `@media (max-width: 768px)` already in the stylesheet. New layout rules go inside that query, not a second breakpoint.

Scripts use an IIFE. Add a script only when a page needs that behavior.

## Pages that must stay in sync

Update the shared shell on all of these when it changes:

- `index.html`
- `privacy.html`
- `toc.html`
- `db-api/index.html`
- `db-api/agent-state/index.html`
- `webhook-api/index.html`
- `mail2webhook/index.html`
- `monitor-api/index.html`

Known drift. When you already have a page open, bring its footer and contact block in line with [blocks.md](blocks.md). Do not open the other pages only to fix drift unless the task is a shell change.

The footer, Dashboard CTA, and contact headings currently match [blocks.md](blocks.md) on every page in the sync list. `mail2webhook/index.html` stays `noindex` and its canonical remains `https://www.echovalue.dev/webhook-api/`.

## Do not

- Add React, a bundler, Sass, Tailwind, or a second CSS file
- Restyle one landing with inline colors or a new font
- Remove the skip link, theme toggle, hamburger, or Dashboard CTA to make a page "simpler"
- Give a product page the homepage nav (Projects, Free Tools, Open Source)
- Load `copy-tool-def.js` or `code-tabs.js` on pages that do not use them
- Paste a new icon library. Icons are Font Awesome 6 solid/brands classes already used on the cards

## Before finishing

- New product URL is `product-name/index.html` with a canonical of `https://www.echovalue.dev/product-name/`
- Stylesheet query (`?v=`) matches every other page
- Footer links match [blocks.md](blocks.md), including Dashboard
- Navbar still has theme toggle, hamburger, and `navbar-cta` on Dashboard
- Internal links resolve from that file's depth; external links have `target` and `rel`
- Both themes still readable: default dark, and light after toggling `.theme-toggle`
- At 768px the nav collapses and `.projects-grid` / `.pricing-grid` stack to one column
