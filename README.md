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
