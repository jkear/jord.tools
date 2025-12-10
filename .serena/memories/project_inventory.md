# Project Inventory

**Date:** 2025-11-28
**Status:** Active Development - UI Refactoring (Glass Plates Implemented)
**Current Branch:** `feature/glass-plate-cards`

## Recent Changes

- **Feature:** Implemented "Liquid Glass" UI plates using `@liquidglass/react`.
- **Refactor:** Moved `FeaturedPost` to sidebar (compact mode) and updated `BlogCard` design to use glass plates.
- **Content:** Added "Gemini-CLI" and "Claude Code" to `ToolsForAI.tsx`.
- **Migration:** Migrated legacy markdown content from `jord.toolsblog` to `content/`.

## Key Components

- **Important Note** The Liquid Glass, `@liquidglass/react` library's only affects the view INSIDE the box it alters. It is not intended to have effects on positioning of said box or any other.

## Configuration

- **Typography:** Updated `tailwind.config.js` with Apple HIG font sizes (`text-title-3`, `text-caption-1`) and `SF Pro` font stack.
- **Animations:** Added custom cubic-bezier curves for Apple-like motion.

## Next Steps

- Verify visual rendering of glass plates in a browser (multi-modal check).
- Proceed with remaining UI sections (e.g., Tools grid) if they require glass plate treatment.
