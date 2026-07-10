# Cosmos — Personal Astrology Engine & Dashboard

Cosmos is a 100% client-side Vedic + Western astrology SPA for GitHub Pages. Birth data stays in the browser: ephemeris math, profiles, settings and interpretations all run locally with no runtime API calls.

## Features
- React 19, Vite, TypeScript strict, Tailwind CSS v4, hash routing for Pages.
- Western natal chart with planets, points, houses, aspects, analytics and a responsive SVG wheel.
- Vedic Jyotish layer with Lahiri sidereal positions, nakshatras, panchanga, Vimshottari dasha, yogas, varga data and both North Indian and South Indian/Kerala-style charts.
- Sky simulation page with orrery-style visualization and time scrubber.
- Persisted private profiles/settings in localStorage.
- GitHub Pages workflow: merge to `main`, then set Settings → Pages → Source = **GitHub Actions** once.

## Commands
```bash
npm ci
npm run test
npm run build
npm run test:e2e
```

## Privacy & disclaimer
Cosmos is for reflection and learning. It is not medical, legal, financial or deterministic advice.
