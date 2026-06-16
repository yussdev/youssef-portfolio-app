# Youssef Alijani — Portfolio

A modern, responsive personal portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Features light/dark theme support with no flash of incorrect theme on load.

## Requirements

- Node.js `>=20.9.0` (this Next.js version requires it)

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

- `pnpm dev` — start the development server
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint

## Structure

```
app/
  layout.tsx              # Root layout, fonts, metadata, no-flash theme script
  page.tsx                # Home page composed from sections
  globals.css            # Tailwind v4 + theme tokens (class-based dark mode)
  lib/data.ts            # All content (profile, skills, experience, projects)
  components/
    theme-provider.tsx   # Theme context (client)
    theme-toggle.tsx     # Light/dark toggle (client)
    navbar.tsx           # Sticky nav with mobile menu (client)
    hero.tsx
    skills.tsx
    experience.tsx
    projects.tsx
    footer.tsx           # Education + contact + social links
    section-heading.tsx
    icons.tsx
```

## Customizing

Edit `app/lib/data.ts` to update profile details, skills, experience, and projects. Theme colors live as CSS variables in `app/globals.css`.
