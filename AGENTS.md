# AGENTS

## Purpose
This repository is a premium cinematic website experience called NEXUS LAB. It is an immersive front-end project built with Next.js, React, Tailwind CSS, and WebGL-style visuals.

## Project type
- Next.js app-router site
- Client-first immersive landing experience
- Futuristic / neural network narrative
- Performance-sensitive animation and 3D visuals

## Primary stack
- `next` 14.x
- `react` 18.x
- `tailwindcss` 3.x
- `framer-motion`
- `gsap`
- `three`
- `@react-three/fiber`
- `@react-three/drei`
- `lenis`

## Key conventions
- `page.tsx` is the main client route and composes all page sections.
- `layout.tsx` defines global metadata and root HTML document structure.
- Root files include reusable sections and UI helpers rather than nested folders.
- `useSmoothScroll.ts` initializes Lenis for smooth scroll behavior.
- `NeuralCanvas.tsx` wraps the main canvas-based neural visual experience.
- `@/*` path alias maps to the project root.

## Important files
- `page.tsx` — page composition, client rendering, and top-level UI scaffolding.
- `layout.tsx` — global metadata, `<html>` setup, viewport and theme-color tags.
- `NeuralCanvas.tsx` — canvas wrapper for animated neural visuals.
- `useSmoothScroll.ts` — smooth scrolling using Lenis.
- `globals.css` — global theme and visual styling.
- `next.config.js` — Next config with CSS optimization enabled.
- `package.json` — project scripts and dependencies.

## Scripts
- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — run Next.js lint rules

## Agent guidance
- Preserve the premium cinematic visual direction.
- Prioritize responsive layouts and mobile performance.
- Keep animations smooth and avoid visual overload.
- Optimize render loops, avoid unnecessary rerenders, and minimize bundle impact.
- Keep `use client` boundaries intentional and avoid moving server-safe logic into client components without need.
- Prefer lightweight, composable enhancements over large refactors when possible.
- If adding new features, keep them modular and consistent with the existing section-based architecture.

## Notes
- No existing `README.md` or `.github/copilot-instructions.md` were found in this workspace.
- Use this file as the default on-board guidance for AI agents working in this repository.
