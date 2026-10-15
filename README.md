# Darsha Naik – Portfolio

Personal portfolio of Darsha Naik, an Angular + Node.js / .NET full stack developer based in Bengaluru.

**Live site:** https://darsha-naik.netlify.app/

## Built with

- Angular 20 (standalone components, signals, built-in control flow)
- TypeScript and SCSS
- Deployed on Netlify, with automatic deploys from `main`

## Features

- Interactive "stack explorer" in the hero that shows my work across the interface, API, serverless and integration layers (keyboard accessible)
- Animated monogram badge, scrolling tech ticker and scroll-triggered reveals
- Pointer effects on desktop: dot grid, glow, trailing ring and magnetic buttons
- Responsive layout with a hamburger menu on mobile
- Light and dark theme that follows the system setting
- Respects `prefers-reduced-motion`
- All content lives in one file, `src/app/data/portfolio.data.ts`, so updating the site means editing a single place

## Run locally

```bash
npm install
npm start          # http://localhost:4200
```

Build for production:

```bash
npm run build      # output in dist/portfolio/browser
```

## Project structure

```
src/
  app/
    data/        portfolio content (profile, projects, roles, skills)
    sections/    page sections (header, hero, work, experience, skills, contact, ...)
    effects/     pointer effects and scroll/magnetic directives
  styles.scss    global styles, design tokens and keyframes
```

## Deployment

Netlify builds from `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist/portfolio/browser`

## Contact

- Email: darshanaik08@gmail.com
- LinkedIn: https://www.linkedin.com/in/darshanaik
- GitHub: https://github.com/DarshaNaik08