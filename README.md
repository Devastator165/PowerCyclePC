# PowerCyclePC

Promotional website for a small PC workshop. Built as a plain static site —
no server, no build step, no framework. Just HTML, CSS, and JavaScript.

## Folder structure

```
PowerCyclePC/
├── index.html          # Single-page site (header, hero, services, footer)
├── css/
│   ├── styles.css      # Design tokens, base styles, layout, shared components
│   └── components/     # Component-specific stylesheets (add as the site grows)
├── js/
│   ├── main.js         # Entry point; wires up shared behavior
│   └── modules/        # Feature-specific scripts (add as the site grows)
├── assets/
│   ├── images/         # Photos of builds, backgrounds, etc.
│   ├── icons/          # Logo, icons, favicon
│   └── fonts/          # Self-hosted fonts (optional)
└── README.md
```

## How to run

There is no build step. Open `index.html` in a browser, or run any static
server for a nicer development loop:

```bash
# Python (cross-platform)
python -m http.server 8000

# Or Node
npx serve .
```

Then visit http://localhost:8000.

## How to add content

- **New section** — add a `<section>` in `index.html` between `<main>` tags,
  and add its styles to `css/styles.css` (or a new file in `css/components/`).
- **New behavior** — add a script to `js/modules/` and include it in
  `index.html` *before* `js/main.js`, or call into it from `main.js`.
- **New image** — drop it into `assets/images/` and reference it with a
  relative path, e.g. `assets/images/build-01.jpg`.

## Conventions

- Relative paths only (no absolute `/` roots) so the site works from any
  directory or static host (GitHub Pages, Netlify, S3, etc.).
- Design tokens live as CSS custom properties under `:root` in
  `css/styles.css` — change colors, spacing, etc. there.
- No transpilation, no bundling. Modern ES2020+ is fine for target browsers.
