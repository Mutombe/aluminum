---
name: Architectural Aluminium Brand & Design System
description: Brand colors, typography, design tokens, and component patterns for AA website
type: project
---

**Brand:** Architectural Aluminium (AA) - Premium aluminium fabrication company, Zimbabwe. Est. 1994.

**Colors (in @theme):**
- Gold: #D4AF37 (primary accent), Yellow: #FFD700, Amber: #F5B800, Gold-dark: #B8960C
- Black: #0A0A0A, Charcoal: #1A1A1A, Graphite: #2D2D2D, Slate: #3D3D3D, Steel: #4A4A4A, Muted: #5C5C5C
- White: #FFFFFF, Snow: #FAFAFA, Platinum: #F5F5F5, Silver-light: #E5E5E5, Silver: #CCCCCC, Silver-dark: #6B6B6B
- Aluminum: #A8A9AD, Brushed: #C9C9C9, Chrome: #DFE0E2

**Typography:**
- Display: Syne (headings)
- Body: Outfit (body text)
- Mono: Space Mono (accents/labels)

**Stack:** React + Vite + Tailwind v4 (@theme), framer-motion, phosphor-icons, react-router-dom

**Key files:**
- `src/index.css` - All theme tokens, custom utilities, gradient classes
- `src/pages/Home.jsx` - Hero section with image carousel and layered gradient overlays
- `src/components/Navbar.jsx` - Fixed nav, scroll-aware bg, mobile slide-out menu

**Hero architecture:**
- Layer 1: Full-width image carousel (5 building photos) with bg-arch-black/30 darkening overlay
- Layer 2: Gradient overlays - mobile (top-to-bottom white fade) and desktop (left-to-right white fade)
- Layer 3: Content (badge, heading, subheading, CTAs, stats)
- Desktop: left-to-right gradient creates "dissipating" effect from solid white to transparent
- Mobile: top-to-bottom white gradient for readability (the one being replaced)

**Why:** Understanding brand identity and codebase structure for consistent design recommendations across sessions.
**How to apply:** Reference these tokens and patterns when making any visual/CSS recommendations. All color changes should use the established arch-* naming convention.
