# Darsha Naik – Portfolio (Angular 20)

Standalone components, signals and the new control flow (`@for`). All copy lives in
`src/app/data/portfolio.data.ts`, so updating the site means editing that one file.

## Run locally
```bash
npm install
npm start          # http://localhost:4200
npm run build      # output: dist/portfolio/browser
```

## Deploy on Netlify (from GitHub, auto-deploys on push)
1. Push this folder to a GitHub repo.
2. Netlify → Add new site → Import an existing project → choose the repo.
3. Settings are read from `netlify.toml`:
   build command `npm run build`, publish directory `dist/portfolio/browser`.

## Deploy with the Netlify CLI
```bash
npm install
npm run build
npx netlify-cli deploy --prod --dir=dist/portfolio/browser
```
