# jord.tools AI Agent Instructions

**Updated:** December 12, 2025

## Stack & Tooling
- **Core:** Vite + React 19 + TypeScript + Tailwind CSS
- **Dev server:** `pnpm dev` (port 3000, auto-opens)
- **Build:** `pnpm build` → `dist/`
- **No test/lint scripts defined** — add if needed

## Architecture & Routing
- **Routing:** React Router DOM v7 in [src/App.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/App.tsx) defines all routes; nested under `<Layout>` which provides Header/Footer/Background
- **Pages:** All route components live in `src/pages/` as `.tsx` files (NOT `.mdx`)
  - `/` → `pages/index.tsx` (home)
  - `/frameworks/*` → `pages/frameworks/*.tsx` (LangChain, PyTorch, etc.)
  - `/tools/*` → `pages/tools/*.tsx` (MCP, n8n, ComfyUI, etc.)
  - `/projects/*` → `pages/projects/*.tsx` (kuzu-memory-mcp, etc.)
  - `/blog/*` → `pages/blog/*.tsx` (R37HealthcareAI, etc.)
- **Layout pattern:** `<Layout>` ([src/components/Layout.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/components/Layout.tsx)) wraps routes; dynamically sets background image based on pathname via `BackgroundProvider` context

## UI & Styling Conventions
- **Functionality-first workflow:** Do not add/adjust styling (extra Tailwind classes, layout polish, z-index tweaks, spacing, colors, etc.) until the functional behavior is implemented and explicitly approved by the user.
- **Primary glass container:** `<LiquidGlass>` from `@liquidglass/react` — **never wrap in custom CSS or override its visual props**
  - Standard props: `borderRadius={50} blur={1.5} brightness={0.75} contrast={1.2} shadowIntensity={2} elasticity={0.2} displacementScale={20}`
  - Use for hero sections on home, content cards on detail pages (experience/quick-start)
- **Component library:** `src/components/ui/` contains shadcn/ui + Radix primitives (buttons, cards, dialogs, etc.)
- **Tailwind:** Custom design tokens in [tailwind.config.js](/Users/jordankearfott/DevProjects/jord.tools/tailwind.config.js) — SF Pro fonts, iOS-style typography scale, custom animations
- **Comment style:** Block comments above code blocks (not inline); describe the next line/section

## Page Templates
- **Framework/Tool detail pages:** Import `<FrameworkDetailPage>` ([src/components/FrameworkDetailPage.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/components/FrameworkDetailPage.tsx)) or `<FrameworkPage>` and pass `{ title, description, framework, experience?, quickStart?, githubUrl, children }`
  - Example: [src/pages/frameworks/LangChain.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/pages/frameworks/LangChain.tsx)
  - `framework` prop drives `<DocumentationLink>` lookups for docs/API/devkit links
- **Project detail pages:** Use `<ProjectDetailPage>` ([src/components/ProjectDetailPage.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/components/ProjectDetailPage.tsx)) with same props
- **Home page:** Large `<LiquidGlass>` hero + feature sections (`ProjectsFeature`, `ToolsFeature`, `BlogFeature`) imported from `pages/*.tsx`

## Adding New Content
1. Create `.tsx` file in appropriate `src/pages/` subdirectory
2. Import and use detail page component (`FrameworkDetailPage`, `ProjectDetailPage`, etc.)
3. Register route in [src/App.tsx](/Users/jordankearfott/DevProjects/jord.tools/src/App.tsx) under correct `<Route path="...">` block
4. **Do not create `.mdx` files** — all content is TSX components

## Data Sources
- No external JSON/MD file parsing currently; all content hardcoded in TSX pages
- Background images resolved by pathname in `Layout.tsx` (`resolveBackground()` function)

## Known Gaps (from GEMINI.md TODOs)
- Mermaid chart layering in `LLMToolchainChart.tsx` needs correction
- Blog index page needed at `src/pages/blog/index.tsx` (only individual posts exist)
- Navigation bar refactor pending (wrap icons/buttons in `<LiquidGlass>`)
