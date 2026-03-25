# Chunli

A Nintendo Wii U-inspired portfolio, customized and designed especially for Chunli. Built with Next.js 16, React 19, Tailwind CSS v4, Motion, Bun, and the local Monogram font.

## Overview

This project is designed as a console-style launcher rather than a traditional portfolio site. The interface opens sections as apps inside a shared system shell, with themed boot states, animated app windows, and separate light, dark, and system theme modes.

## Features

- Wii U-inspired launcher shell with app-style navigation
- Local Monogram font loaded from `public/fonts/monogram/ttf`
- Light, dark, and system theme preferences with local persistence
- First-visit theme picker
- Optional per-app loading screens
- Interactive Miiverse-style feed with reactions and comments
- Projects tab with detail view
- Gallery tab with fullscreen artwork viewer
- Music and Games tabs with polished placeholder experiences

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- Motion
- Lucide React
- Vercel Analytics

## Getting Started

Install dependencies and run the dev server:

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
bun run dev
bun run build
bun run start
bun run lint
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css

components/launcher/
  home-entry.tsx
  home-client.tsx
  shell.tsx
  overlays.tsx
  preferences.ts
  content-data.ts
  app-content.tsx
  content/
    about-content.tsx
    blog-content.tsx
    contact-content.tsx
    gallery-content.tsx
    games-content.tsx
    music-content.tsx
    projects-content.tsx
    settings-content.tsx
```

## Notes

- The launcher experience is intentionally client-driven to avoid hydration issues around local storage, theme state, motion, and clock-based UI.
- Use Bun commands for local development and verification.
- Repo-specific workflow notes and maintenance guidance live in `AGENTS.md`.
- If you touch interactive Next.js UI, check the relevant docs under `node_modules/next/dist/docs/` first because this project uses newer Next.js behavior.
