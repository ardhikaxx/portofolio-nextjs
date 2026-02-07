Yanuar Ardhika - Personal Portfolio
===================================

This is a Next.js (App Router) portfolio for modern front-end work. The site highlights
hero, projects, awards, and experiences with immersive visuals powered by Three.js,
GSAP, and Tailwind-style utilities, while keeping Lighthouse scores high for both
mobile and desktop.

Features
--------
- Hero composition that pairs a typographic headline with layered lighting and texture.
- Experience modal detailing roles, periods, technologies, and responsibilities.
- Projects and awards grids styled with glassmorphism, gradients, and responsive typography.
- A floating navigation pill that stays on every route without heavy client-side logic.
- Performance guards: lazy-load heavy effects, keep the hero split into server/client parts,
  and avoid cursor helpers in production.

Tech stack
----------
- `next@16.0.10` + Turbopack for optimized builds and Fast Refresh.
- `react@19.2.1`, `three@0.180.0`, `@react-three/fiber`, `gsap`, `framer-motion`.
- Tailwind-inspired CSS with gradients, blur, and drop shadows defined in `app/globals.css`.
- `react-icons`, `react-toastify`, and custom helpers like `StickerPeel` + `SplitText`.

Getting started
---------------

```bash
npm install
npm run dev      # http://localhost:3000
```

- `npm run build` produces the production build.
- `npm run lint` runs ESLint with the Next.js config.

Deployment
----------

- Deploys on Vercel by default — the `app/` directory is the entry point.
- Remove or disable the Chrome React DevTools extension if you see ``Invalid argument not valid semver`` locally.
- Keep `next` dependency patched when Vercel warns about CVE updates.

Structure notes
---------------

- `app/ui/hero.tsx` remains a server component while the heavy effects live in `app/ui/hero-effects.tsx`.
- `app/components/NavBottom.tsx` takes a `currentPath` prop so it can stay server-rendered.
- Content/data for projects and awards lives under `app/data/` and is intentionally concise to keep Lighthouse happy.

Contact
-------

Email: `ardhikaxx@example.com` (replace with the real address) or use the social links in the About section.
