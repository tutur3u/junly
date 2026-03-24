<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repo Learnings

## Architecture Notes

- The launcher is intentionally client-only at the page experience layer to avoid persistent hydration mismatches from local storage, theme resolution, motion state, and clock-based UI.
- Keep `app/page.tsx` as a thin server wrapper.
- Keep `components/launcher/home-entry.tsx` as the client-only dynamic entry with `ssr: false` unless there is a deliberate plan to reintroduce SSR safely.
- Launcher state belongs in `components/launcher/home-client.tsx`.
- Per-app window content should stay split into focused files under `components/launcher/content/`, with shared mock data in `components/launcher/content-data.ts`.

## What Works

- `useSyncExternalStore` is the safest pattern here for local-storage-backed theme and preference state when hydration has been fragile.
- Monogram font is loaded locally from `public/fonts/monogram/ttf` via `next/font/local`; keep that local setup instead of swapping to hosted fonts.
- The current visual direction is a polished Wii U-inspired launcher with authored light and dark themes, not a generic modern dashboard.
- When adding new app experiences, prefer fully themed placeholders with motion and status surfaces rather than plain “coming soon” text.
- Portfolio game/research entries work better as authored `contentSections` with preserved line breaks and explicit document actions than as derived summary/feature arrays.

## What Does Not Work Well

- Rendering client-derived UI state on the server has repeatedly caused hydration mismatches here.
- Reintroducing server-rendered launcher markup without a careful serialization strategy is likely to regress theme picker, boot overlay, and settings behavior.
- Large all-in-one files become hard to evolve quickly. If a launcher content file starts accumulating multiple app panels or mock datasets, split it early.

## Workflow Preferences

- Use Bun for package management and scripts. Prefer `bun install` and `bun run ...` over `npm`.
- Before changing interactive Next.js UI, read the relevant docs in `node_modules/next/dist/docs/` again rather than relying on older assumptions.
- Prefer adding or extending shared launcher primitives over duplicating surface styles inside individual app panels.
- Keep the Wii U mood consistent: rounded glass surfaces, controlled glow, tactile hover states, and dark mode that feels intentionally art-directed.
- Verify with `bun run lint` after UI refactors. Run `bun run build` too when touching routing, layout, hydration-sensitive code, or imports across many files.

## AGENTS Housekeeping Habit

- Update this file when a new pitfall, reliable pattern, or repo preference becomes clear.
- Keep tool and command preferences current here so future passes do not drift back to old workflows.
- Record decisions that materially affect future workflow: hydration fixes, naming conventions, architectural boundaries, theme behavior, and verification expectations.
- Do not add vague diary-style notes. Keep entries concrete, repo-specific, and useful for the next coding pass.
