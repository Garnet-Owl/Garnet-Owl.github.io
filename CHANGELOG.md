# Changelog

## 2026-08-07

- Removed the duplicate `next.config.ts`; Next.js was silently resolving
  `next.config.js` and ignoring it. Confirmed identical build output after
  the deletion (MASTER_PLAN Phase 0).
- Added the typed content model (`app/content/types.ts`,
  `app/content/profile.ts`) with `Project`, `Experience`, `Education`,
  `Publication`, `SkillGroup`, and `Profile` interfaces (MASTER_PLAN Phase 1).
  Nothing renders from these yet.
- Resolved all 20 npm audit findings (2 critical, 10 high, 4 moderate, 4 low),
  primarily by updating Next.js from 15.1.6 to 16.3.0.
- Updated MUI (`@mui/material`, `@mui/icons-material`, `@mui/material-nextjs`)
  from 6.x to 9.x to match Next 16; migrated the one file using the legacy
  Grid `item` API to the `size` prop, and moved `Stack`'s `flexWrap` prop
  into `sx` across two files.
- Replaced the removed `next lint` command with direct `eslint` invocation
  against `eslint-config-next`'s native flat-config exports; held ESLint at
  latest 9.x since eslint-config-next's bundled `eslint-plugin-react` is not
  yet compatible with ESLint 10.
- Updated Jest, `jest-environment-jsdom`, `@types/jest`,
  `@testing-library/jest-dom`, and `@types/node` to their latest majors.
- Updated unused decorative dependencies (`lucide-react`, `framer-motion`,
  `@heroicons/react`, `@radix-ui/react-icons`) to their latest majors; none
  are imported anywhere in `app/`.
- Deliberately deferred: Tailwind CSS v4 (CSS-based config rewrite, high
  regression risk for low usage) and TypeScript 7 (different compiler
  generation). See the latest handoff for reasoning.
