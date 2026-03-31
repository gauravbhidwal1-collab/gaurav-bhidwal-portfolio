# Gaurav Singh Bhidwal — Portfolio

Recruiter-focused personal site: React (Vite), Tailwind CSS, Framer Motion. Content lives in `src/data/portfolio.js`.

## Tech stack

- React 19 · Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Preview production build:

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Netlify

Repo includes `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

In [Netlify](https://app.netlify.com): **Add site → Import from Git** → pick this repo → deploy (settings usually auto-detect).

## Customize

| What | Where |
|------|--------|
| Copy, links, email, projects | `src/data/portfolio.js` |
| Resume (`/resume.pdf`) | add file under `public/resume.pdf` |
| Meta / title | `index.html` |
| Favicon | `public/favicon.svg` |

## Profile image (optional)

```bash
npm run optimize-profile -- "path/to/photo.jpg"
```

Writes optimized `src/assets/profile.png` (requires `sharp` dev dependency).

## License

Private / personal use unless you add a license.
