# Blog Knowledge Base Website - jord.tools

# Gemini Context & State Reconciliation

# Updated: December 9, 2025

## 1. PROJECT IDENTITY & MANDATES

**Project Root:** `/Users/jordankearfott/DevProjects/jord.tools`
**Core Stack:** Vite + React + TypeScript + Tailwind CSS
**Aesthetic:** "Liquid Glass" (Dark mode, heavy usage of `@liquidglass/react`, a library which should never be visually altered with custom .css or tailwind properties.)
**Commenting:** Leave comments over every code block but avoid any inline comments. Instread, write the comments as a block above the code-- when you refer to code on the next line down, I'll know because you dropped to the next line to add the comment or used a line break.

### Critical Design Mandates

- **Primary Container:** `<LiquidGlass />` from `@liquidglass/react`.
- **UI Components:** `src/components/ui/` contains standard UI elements (buttons, inputs) built with **shadcn/ui**. shadcn/ui, radix, lucide elements can be wrapped with `<LiquidGlass />` and should follow the props listed here:
  
`<LiquidGlass />` Props that alter the image behind the 'glass' box from the viewers perspective. Is not used for positioning, or meant to alter anything outside the box.

```props
Prop Type Default Description
borderRadius number 20 Border radius in pixels
blur number 0.25 Blur intensity
contrast number 1.2 Contrast level
brightness number 1.05 Brightness level
saturation number 1.1 Saturation level
shadowIntensity number 0.25 Shadow intensity
displacementScale number 1 Displacement effect scale
elasticity number 0.6 Elasticity of the liquid effect
zIndex number 9999 Z-index of the component
className string undefined Additional CSS classes
children ReactNode undefined Child components to render inside
```

- **Layouts:** Pages use specific layout components (e.g., `FrameworkPage`, `Layout`) to maintain visual consistency.
- **Routing:** strict usage of `react-router-dom` defined in `src/App.tsx`.

## 2. CURRENT ARCHITECTURE

The project structure has been verified.

### Routing & Pages

- **Router:** `src/App.tsx` defines all routes.
- **Page Location:** `src/pages/` contains the actual route components.
- **Implementation:**
  - Pages are **TypeScript React Components** (`.tsx`), NOT MDX files.
  - **Key Pattern:** Framework and Tool pages import `FrameworkPage` from `src/components/` and wrap hardcoded content.

**Example Structure:**

```tree
src/
├── App.tsx                     # SOURCE OF TRUTH for Routing
├── pages/
│   ├── index.tsx               # Home
│   ├── knowledge-base/
│   │   ├── frameworks/
│   │   │   ├── LangChain.tsx   # ACTIVE page (imported in App.tsx)
│   │   │   ├── langchain.mdx   # DEAD CODE (orphaned, unused)
│   │   │   └── ...
│   │   └── tools/
│   │       ├── MCP.tsx         # ACTIVE page
│   │       ├── mcp.mdx         # DEAD CODE
│   │       └── ...
└── components/
    ├── FrameworkPage.tsx       # Standard Layout Template
    └── ui/                     # Shadcn UI components
```

### Component usage

- **`src/components/FrameworkPage.tsx`**: The standard wrapper for "Framework" and "Tool" detail pages. It handles title, "My Experience", "Quick Start", and links.
- **`src/components/ui/*`**: Standard atomic components (Cards, Buttons).
- **`@liquidglass/react`**: Used directly in layouts for the signature visual style.

## 3. STATE RECONCILIATION & TODO LIST

The following items are misaligned with the current architecture and require action.

### 🚨 Critical Technical Debt

### Feature & Content Gaps

- [ ] **Project Inventory:** The "Projects" section (`src/pages/knowledge-base/projects/`) needs a page for each project listed in the 'projects home' page similar to the tools pages.

- [ ] **Blog:** `src/pages/blog/` exists but content population is minimal.

## 4. EXECUTION GUIDELINES FOR AGENTS

1. **Adding a New Page:**
    - Create `NewPage.tsx` in the appropriate `src/pages/` subdirectory.
    - Use the `FrameworkPage` component wrapper if it's a tool/framework.
    - **Register the route** in `src/App.tsx`.
    - **DO NOT** create an `.mdx` file.

2. **Modifying Design:**
    - Check `src/components/ui` first for existing primitives.
    - Use `<LiquidGlass>` for containers needing the signature look. Although the home page as these large glass containers, no other page should-- the other pages should relegate the LiquidGlass features to buttons and UI elements that should be highlighted.
    - Respect Tailwind utility classes.

3. **Refactoring:**
    - The Nav bar should be updated, using shadcn, lucide or icons,
