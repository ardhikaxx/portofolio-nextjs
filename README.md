Yanuar Ardhika — Personal Portfolio
===================================

This project is a Next.js (App Router) portfolio for Yanuar Ardhika. The site highlights
key sections such as hero, projects, awards, and experience, with immersive visuals powered
by Three.js, GSAP, and modern layout/styling tools. It is designed for fast Lighthouse scores
and deploys on Vercel.

Features
--------
- Hero shot with layered motion/lighting built around `StickerPeel`, `Dither`, and a
  typographic headline.
- Experience modal with animated details and technology / responsibility lists.
- Project and awards grids that use modern Tailwind-inspired styling, cards, and typography.
- Responsive navigation pill that appears on every top‑level page.
- Performance guards (lazy-load heavy effects, prefer server components, disable unused cursors).

Tech stack
----------
- `next@16.0.10` + Turbopack for native performance and Fast Refresh.
- `react@19.2.1`, `three@0.180.0`, `@react-three/fiber`, `gsap`, `framer-motion`.
- Tailwind-esque utility classes in plain CSS with gradients, blur, and drop shadows.
- `react-icons`, `react-toastify` (criteria-driven), `StickerPeel`/`SplitText` custom helpers.

Getting started
---------------

```bash
npm install        # install deps
npm run dev        # start local dev server on http://localhost:3000
```

- `npm run build` creates a production build (Next.js/Turbopack).
- `npm run lint` runs ESLint with Next.js rules.

Deployment
----------

- Deployed on Vercel (default `app/` entry point). Disable React DevTools extension if
  you hit `Invalid argument not valid semver` during local development.
- Update the `next` dependency when Vercel warns about security patches.

Structure notes
---------------

- `app/ui/hero.tsx` + `app/ui/hero-effects.tsx` split static content vs client-heavy effects.
- `app/components/NavBottom.tsx` expects a `currentPath` prop so it stays a server component.
- Data under `app/data/` drives projects/awards, keep strings concise for Lighthouse.

Contact
-------

Email: `ardhikaxx@example.com` (swap for actual) or use the social links on the About page.
