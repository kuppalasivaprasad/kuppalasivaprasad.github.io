# DevOps Playbook GitHub Pages Site

This repository contains a static documentation website for Kuppala Siva Prasad's personal DevOps Playbook.

## Stack

- HTML5
- CSS3
- JavaScript
- Markdown
- Mermaid via CDN
- Marked via CDN

## Structure

- `index.html`, `about.html`, `resume.html`, `roadmap.html`, `contact.html`
- `playbook/` for documentation pages and the document viewer
- `cheatsheets/` for quick reference pages and the document viewer
- `assets/css/styles.css` for theme, layout, and responsive styles
- `assets/js/config.js` for navigation, metadata, and document listings
- `assets/js/app.js` for shared shell rendering, theme switching, search, markdown loading, and docs UI
- `resume/` for downloadable resume assets

## Add A New Playbook Page

1. Add a new Markdown file to `playbook/` using the existing page structure.
2. Add one entry to `playbookDocs` in `assets/js/config.js` with `slug`, `title`, and `summary`.
3. The home cards, playbook index, sidebar, and search results will pick it up automatically.

## Add A New Cheat Sheet

1. Add a new Markdown file to `cheatsheets/`.
2. Add one entry to `cheatSheets` in `assets/js/config.js`.
3. The cheat sheet index, sidebar, and search results will update automatically.

## GitHub Pages

Push this project to GitHub and enable Pages from the repository root branch. No backend or build step is required.

## Customize Before Publishing

- Replace placeholder email, GitHub, and LinkedIn links in `assets/js/config.js`
- Replace the placeholder PDF in `resume/`
- Expand or refine markdown content based on your real production notes and resume details
