# Repository Guidelines

## Project Structure & Module Organization
This is a static site with HTML entry points in the repository root and feature pages in subfolders. Key locations:
- `index.html`, `generic.html`, `elements.html` for primary pages and layout patterns.
- `db-api/`, `monitor-api/`, `legal/` for product and legal landing pages.
- `assets/` for shared styling and scripts (`assets/css/`, `assets/js/`, `assets/sass/`, `assets/webfonts/`).
- `images/` for site imagery and icons.

## Build, Test, and Development Commands
There is no build system checked in. For local preview, use a simple static server:
```sh
python3 -m http.server 8000
```
Then visit `http://localhost:8000/`. If you edit Sass sources in `assets/sass/`, recompile to `assets/css/` using your preferred Sass tool before committing.

## Coding Style & Naming Conventions
- HTML/CSS/JS are plain static files; keep edits minimal and consistent with existing formatting.
- Sass sources live in `assets/sass/` and compiled CSS in `assets/css/`; prefer editing Sass when changing core styles.
- Use descriptive file names for new pages (e.g., `feature-name/index.html`) and keep asset paths relative.

## Testing Guidelines
No automated tests are present. Validate changes manually:
- Open affected pages in a browser and verify layout, links, and responsive behavior.
- If changing shared styles, spot-check `index.html`, `db-api/index.html`, and `legal/privacy.html`.

## Commit & Pull Request Guidelines
Recent commits use a short type prefix and summary, e.g., `Feature: Add open source section` or `Fix: Update text colors`.
- Use `Feature:`, `Fix:`, or `Design:` with a concise description.
- PRs should include a brief summary, list of touched pages, and screenshots for visual changes.
