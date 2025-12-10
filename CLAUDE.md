# Blog Knowledge Base Website Update - jord.tools

# Prompt for Gemini 3 - Version 2.0

# Updated: December 19, 2024

## CRITICAL CONTEXT

You are updating an existing blog website at `/Users/jordankearfott/DevProjects/jord.tools` that will be deployed to Netlify. This site needs to become a comprehensive knowledge base cataloging AI/ML tools and frameworks with links to official documentation. The site must maintain the existing Apple liquid glass design style from the imported Figma designs.

## DESIGN MANDATE

**IMPORTANT**: Preserve and extend the existing Apple liquid glass design system:

- Glassmorphism effects with backdrop-filter
- Subtle gradients and transparency
- Smooth animations and transitions
- Clean, minimal interface following Apple's HIG principles
- Maintain all existing Figma-imported styles
- DO NOT create new design system - extend what exists

## PHASE 1: ANALYSIS & DISCOVERY

### Step 1.1: Examine Current Structure & Style

First, analyze the existing website structure and design system:

```bash
cd /Users/jordankearfott/DevProjects/jord.tools
# Examine current structure
find . -type f -name "*.html" -o -name "*.css" -o -name "*.scss" | head -20
# Check for Figma imports/tokens
grep -r "figma" . --include="*.css" --include="*.scss" --include="*.js"
# Identify glass morphism styles
grep -r "backdrop-filter\|glassmorphism\|blur" . --include="*.css"
cat package.json
```

### Step 1.2: Preserve Existing Design System

Document and preserve:

- Current CSS variables for glass effects
- Backdrop-filter implementations
- Border-radius values
- Color palette with transparency values
- Animation/transition timing functions
- Typography scale from Figma

### Step 1.3: Comprehensive Project Discovery

Scan all development directories for projects:

```bash
# Scan primary development directories
echo "=== Projects in DevProjects ===" 
ls -la ~/DevProjects/ | grep "^d" | awk '{print $NF}' | grep -v "^\."

echo "=== Projects in DevApps ===" 
ls -la ~/DevApps/ | grep "^d" | awk '{print $NF}' | grep -v "^\."

echo "=== Projects in Dev_grimoire ===" 
ls -la /Users/jordankearfott/Dev_grimoire/ | grep "^d" | awk '{print $NF}' | grep -v "^\."

# Check for GitHub repos
find ~/DevProjects ~/DevApps /Users/jordankearfott/Dev_grimoire -name ".git" -type d | sed 's/\/.git$//' | sort -u

# Create a comprehensive project list
cat > /tmp/discovered_projects.txt << 'EOF'
# TODO: Populate this list after scanning
# Categories: Personal Projects | Tools | Frameworks | MCP Servers
EOF
```

## PHASE 2: CONTENT ARCHITECTURE DESIGN

### Step 2.1: Create Knowledge Base Structure

Design and implement this directory structure:

```
jord.tools/
├── src/
│   ├── pages/
│   │   ├── index.jsx              # Landing with glass morphism hero
│   │   ├── knowledge-base/        # Main KB section
│   │   │   ├── index.jsx
│   │   │   ├── frameworks/        # Framework catalog
│   │   │   │   ├── pytorch.mdx
│   │   │   │   ├── tensorflow.mdx
│   │   │   │   ├── mlx.mdx
│   │   │   │   ├── langchain.mdx
│   │   │   │   └── langgraph.mdx
│   │   │   ├── tools/             # Tools catalog
│   │   │   │   ├── mcp.mdx
│   │   │   │   ├── flowise.mdx
│   │   │   │   ├── n8n.mdx
│   │   │   │   ├── comfyui.mdx
│   │   │   │   └── marker.mdx
│   │   │   ├── projects/          # Personal projects
│   │   │   │   ├── agent-dojo.mdx
│   │   │   │   ├── kuzu-memory-graph-mcp.mdx
│   │   │   │   └── [discovered-projects].mdx
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── GlassCard.jsx          # Apple glass morphism card
│   │   ├── KnowledgeCard.jsx      # Extends GlassCard
│   │   ├── DocumentationLink.jsx  # Official docs linker
│   │   └── ProjectShowcase.jsx
│   └── styles/
│       ├── glass-morphism.css     # Preserve existing
│       └── variables.css          # Design tokens
└── public/
```

## PHASE 3: COMPONENT IMPLEMENTATION

### Step 3.1: Glass Morphism Components

Extend existing glass morphism styles:

#### GlassCard Component (Preserve Existing)

```javascript
// Purpose: Base glass morphism card matching Figma design
// IMPORTANT: Use existing CSS classes and variables
// Features: 
// - backdrop-filter: blur(20px) saturate(180%)
// - background: rgba(255, 255, 255, 0.15)
// - border: 1px solid rgba(255, 255, 255, 0.2)
// - border-radius from Figma tokens
// - Subtle shadow and hover effects
```

#### LiquidGlass Component (Verified Implementation)

```javascript
// Purpose: Advanced liquid glass effect wrapper for React
// Source: https://github.com/rdev/liquid-glass-react/tree/master
//
// VERIFIED PROPS (API):
// - displacementScale (number, default: 70): Intensity of displacement
// - blurAmount (number, default: 0.0625): Frost/blur level
// - saturation (number, default: 140): Color saturation
// - aberrationIntensity (number, default: 2): Chromatic aberration
// - elasticity (number, default: 0.15): Liquid feel (0=rigid)
// - cornerRadius (number, default: 999): Border radius
// - overLight (boolean, default: false): optimize for light backgrounds
// - mode ("standard" | "polar" | "prominent" | "shader")
//
// BROWSER COMPATIBILITY:
// - Chrome/Chromium: Full support (Best Experience)
// - Safari/Firefox: Partial support (Displacement/refraction NOT visible)
//
// NOTE: The Framer-specific props (refThickness, glareRange, etc.) 
// are NOT supported by this React library.
```

#### DocumentationLink Component (NEW)

```javascript
// Purpose: Smart linking to official documentation
// Props: framework, type (docs|api|devkit|github), label
// Features:
// - Automatic URL resolution to official sources
// - External link indicator
// - Glass morphism button style
// - Hover state with subtle glow
```

#### ProjectShowcase Component

```javascript
// Purpose: Display personal projects with glass cards
// Props: title, description, technologies, githubUrl, status
// Features:
// - Glass morphism container
// - Technology badges
// - GitHub stats integration
// - Live/Demo links when available
```

### Step 3.2: Navigation with Glass Effects

Maintain existing navigation with glass morphism:

- Frosted glass navigation bar
- Smooth scroll with transparency changes
- Apple-style subtle animations
- Preserve existing navigation structure

## PHASE 4: CONTENT STRATEGY (DOCUMENTATION-FOCUSED)

### Step 4.1: Framework/Tool Documentation Pages

For each framework/tool, create lightweight MDX files:

```mdx
---
title: [Framework Name]
category: framework
officialDocs: https://pytorch.org/docs/
apiReference: https://pytorch.org/docs/stable/index.html
githubRepo: https://github.com/pytorch/pytorch
devKit: https://pytorch.org/get-started/locally/
lastUpdated: [date]
---

# [Framework Name]

## Quick Overview
[2-3 sentence description of what it is and why it matters]

## My Experience
[Brief personal notes on using this tool/framework]

## Quick Start
\`\`\`bash
# Installation command
pip install torch torchvision
\`\`\`

## Key Resources
<DocumentationLink framework="pytorch" type="docs" label="Official Documentation" />
<DocumentationLink framework="pytorch" type="api" label="API Reference" />
<DocumentationLink framework="pytorch" type="devkit" label="Getting Started" />
<DocumentationLink framework="pytorch" type="github" label="GitHub Repository" />

## My Projects Using This
[Links to relevant personal projects]

## Community Resources
- [PyTorch Forums](https://discuss.pytorch.org/)
- [PyTorch Hub](https://pytorch.org/hub/)
```

### Step 4.2: Project Catalog Pages

For discovered projects:

```mdx
---
title: [Project Name]
type: project
status: active|archived|in-progress
technologies: [list]
repository: https://github.com/[username]/[repo]
---

# [Project Name]

## What It Does
[Concise description]

## Technologies Used
[Technology badges with links to their knowledge base entries]

## Links
- [GitHub Repository](link)
- [Live Demo](if applicable)
- [Documentation](if exists)

## Related Knowledge Base Entries
[Links to relevant tools/frameworks in the KB]
```

## PHASE 5: PROJECT DISCOVERY TODO

### Step 5.1: Generate Project List for Manual Review

Create `/tmp/project-discovery-todo.md`:

```markdown
# Project Discovery TODO for Manual Review

## Discovered Projects
[Auto-generated list from Phase 1.3]

## Categorization Needed:
1. **Personal Projects** (e.g., Agent_Dojo, kuzu-memory-graph-mcp)
2. **MCP Servers** (any *-mcp projects)
3. **Experiments/Prototypes**
4. **Client Projects** (if applicable)

## For Each Project, Determine:
- [ ] Should it be showcased?
- [ ] Is it public/private?
- [ ] Current status (active/archived)
- [ ] Key technologies used
- [ ] Has documentation?
- [ ] Has live demo?

## Deduplication Check:
- [ ] Remove duplicate entries
- [ ] Consolidate similar projects
- [ ] Identify primary vs. experimental versions
```

## PHASE 6: SEARCH & DISCOVERY

### Step 6.1: Implement Search with Glass UI

```javascript
// Search bar with glass morphism effect
// Features:
// - Frosted glass search input
// - Instant results in glass dropdown
// - Category pills with glass effect
// - Keyboard navigation
```

## PHASE 7: RESPONSIVE GLASS MORPHISM DESIGN

### Step 7.1: Preserve Apple-Style Responsiveness

Maintain glass effects across devices:

- Mobile: Reduced blur for performance
- Tablet: Full glass effects
- Desktop: Enhanced depth with multiple layers

### Step 7.2: Dark Mode Glass Morphism

Adapt glass effects for dark mode:

```css
/* Preserve existing dark mode glass variables */
--glass-bg-dark: rgba(30, 30, 30, 0.6);
--glass-border-dark: rgba(255, 255, 255, 0.1);
```

## PHASE 9: BUILD CONFIGURATION

### Step 9.1: Netlify Configuration

Keep existing, ensure compatibility:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
```

## PHASE 10: VERIFICATION CHECKLIST

Before marking complete:

- [ ] Glass morphism effects preserved from Figma
- [ ] All external documentation links functional
- [ ] Project discovery list reviewed and categorized
- [ ] Apple liquid glass style consistent throughout
- [ ] Build completes: `npm run build`
- [ ] No design system conflicts
- [ ] Existing styles maintained
- [ ] All projects properly cataloged

## EXECUTION NOTES

1. **PRESERVE DESIGN** - Do not override existing glass morphism styles
2. **LINK, DON'T DUPLICATE** - Point to official docs, don't recreate
3. **CATALOG EVERYTHING** - Comprehensive project discovery is key
4. **MAINTAIN AESTHETICS** - Apple liquid glass is the design language
5. **PERFORMANCE MATTERS** - Glass effects can be heavy, optimize

## STYLE PRESERVATION EXAMPLES

```css
/* Example: Preserve these existing patterns */
.glass-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
```

## FINAL NOTES

This is a knowledge catalog with external documentation links, not a tutorial platform. Focus on:

- Beautiful presentation with Apple aesthetics
- Quick access to official resources
- Showcasing your projects effectively
- Maintaining the existing design system

Remember: You're creating a beautiful index, not recreating documentation.

---

## KEY CHANGES FROM VERSION 1

1. **Documentation Strategy**: Link to official docs instead of creating study guides for each framework
2. **Design Preservation**: Maintain existing Apple liquid glass design from Figma
3. **Project Discovery**: Comprehensive scanning of ~/DevProjects, ~/DevApps, and /Users/jordankearfott/Dev_grimoire
4. **Target AI**: Gemini 3 instead of Claude Code

## RELATED FILES

- Project Discovery TODO: `/Users/jordankearfott/DevProjects/jord.tools/PROJECT-LIST-TODO.md`
- Netlify Deployment: `/Users/jordankearfott/DevProjects/jord.tools/netlify-deployment-checklist.md`
