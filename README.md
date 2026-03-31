# Gaurav Singh Bhidwal - Portfolio

Modern, recruiter-friendly personal portfolio built with React (Vite) and Tailwind CSS.

## Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript

## Setup

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Netlify Deployment

1. Push this repository to GitHub.
2. In Netlify, select **Add new site -> Import from Git**.
3. Choose your repository.
4. Set build command to `npm run build`.
5. Set publish directory to `dist`.
6. Deploy.

The contact form uses Netlify Forms and works automatically after deployment.

## Customize Content

- Update contact links and project URLs in `src/App.jsx`.
- Update the resume PDF at `public/resume.pdf` (and optional `public/resume.html`).
- Adjust SEO meta tags in `index.html`.
- Update the favicon in `public/favicon.svg` if desired.

## Accessibility & Performance Notes

- Semantic HTML sections and accessible form labels.
- Minimal animations and fast-loading assets.
- A `noscript` fallback in `index.html` keeps key content readable when JavaScript is disabled.
