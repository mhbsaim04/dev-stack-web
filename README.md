# Dev Stack

A React + Vite implementation of the supplied Dev Stack UI.

## Features
- Responsive sticky navbar with mobile hamburger menu
- Hero section with shared orange → pink → violet gradient
- Technology cards loaded from `public/data/technologies.json`
- Category filter
- Add / remove / remove-all stack functionality
- Duplicate prevention with React-Toastify warning
- Loading state while JSON is fetched
- Responsive 3-column / 2-column / 1-column layouts
- GitHub Pages friendly Vite base path

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The project already uses `base: './'`, so Vite creates relative asset paths suitable for a project repository.

1. Push the project to GitHub.
2. Build with `npm run build`.
3. Publish the `dist` folder using GitHub Pages (for example, through GitHub Actions or your preferred Pages deployment workflow).
