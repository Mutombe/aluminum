---
name: Architectural Aluminium Website - Design System
description: Brand colors, fonts, component patterns, and design tokens for the Arch Aluminum Zimbabwe website
type: project
---

**Stack:** React + Vite + Tailwind CSS v4 (@theme syntax) + Framer Motion
**Fonts:** Syne (display/headings), Outfit (body), Space Mono (mono/accents)
**Brand Colors:**
- Gold: #D4AF37 (primary accent), #FFD700 (yellow), #F5B800 (amber), #B8960C (gold-dark)
- Blacks: #0A0A0A (black), #1A1A1A (charcoal), #2D2D2D (graphite), #3D3D3D (slate), #4A4A4A (steel)
- Silvers: #FFFFFF, #FAFAFA (snow), #F5F5F5 (platinum), #E5E5E5, #CCCCCC, #6B6B6B
- Aluminum metallic: #A8A9AD, #C9C9C9, #DFE0E2

**Design Language:** Light theme, premium architectural. Uses glass-morphism classes (glass, glass-dark, glass-light). Gold gradient text via `.gradient-text`. Smoky left-to-right fade on hero. Rounded-2xl cards. Shadow system (shadow-soft, shadow-medium).

**Key Files:**
- Home page: `website/src/pages/Home.jsx`
- CSS/theme: `website/src/index.css`
- Animations: `website/src/components/AnimatedComponents.jsx`
- Patterns: `website/src/components/ArchitecturalPatterns.jsx`

**Hero Structure:** Full-screen carousel with L-to-R gradient fade. Content on left, carousel images on right. Floating stats card bottom-right. Badge, h1, subheading, CTA buttons, stats row.

**Why:** Understanding established patterns prevents conflicting recommendations and ensures additions feel native.
**How to apply:** All design suggestions must use existing tokens, glass classes, and animation patterns. Syne for display, Outfit for body. Gold as primary accent.
