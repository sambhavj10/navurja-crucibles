# Navurja Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from clean tech and manufacturing industry leaders while maintaining originality. Focus on professional credibility and technical expertise presentation.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Green: 158 85% 22% (primary brand)
- Teal: 174 87% 39% (secondary brand)
- Charcoal: 222 84% 5% (text/headers)

**Supporting Colors:**
- Warm Gray: 220 9% 97% (backgrounds)
- White: 0 0% 100% (cards/sections)

**Gradients:**
- Hero background: Subtle teal to green diagonal gradient
- CTA buttons: Deep green to teal horizontal gradient
- Section dividers: Light gray to transparent

### B. Typography
**Primary Font:** Inter (Google Fonts CDN)
- Headings: Inter 700/800 (H1-H3)
- Body text: Inter 400/500
- Navigation: Inter 500
- Buttons: Inter 600

**Hierarchy:**
- H1 (Hero): 3.5rem/2.5rem mobile, bold
- H2 (Sections): 2.5rem/2rem mobile, bold
- H3 (Cards): 1.5rem, semibold
- Body: 1rem, regular
- Small text: 0.875rem

### C. Layout System
**Tailwind Spacing Units:** 2, 4, 6, 8, 12, 16, 24
- Component padding: p-6/p-8
- Section margins: mb-16/mb-24
- Grid gaps: gap-6/gap-8
- Container max-width: max-w-6xl

### D. Component Library

**Navigation:**
- Sticky header with backdrop blur
- Logo left, nav items right with "Contact Sales" CTA button
- Mobile hamburger menu with slide-out drawer

**Cards:**
- Product cards: White background, subtle shadow, rounded corners (rounded-lg)
- Accordion interaction for product details
- Partner logos: Grayscale default, color on hover

**Buttons:**
- Primary: Gradient background, white text, rounded-lg
- Secondary: Outline style with blurred background when on images
- Hover states: Slight scale and brightness increase

**Forms:**
- Contact form: Clean inputs with proper validation styling
- Error states: Red border and text
- Success state: Green toast notification

**Layout Sections:**
- Hero: Full viewport with gradient background
- Trust strip: Horizontal scroll on mobile, grid on desktop
- Products: 3-column grid becoming single column on mobile
- Gallery: 3x2 responsive grid with lazy loading
- About: 4-column features grid

### E. Animations
**Minimal Motion Design:**
- Hero CTA: Subtle fade-up on load
- Section reveals: Fade-in on scroll intersection
- Product accordions: Smooth expand/collapse
- Navigation: Smooth scroll behavior
- Respect `prefers-reduced-motion`

## Images
**Hero Section:**
- Large background image: Solar field with BESS containers
- High contrast overlay to ensure text readability
- Optimized WebP format with fallbacks

**Product Images:**
- Solar Encapsulants: Close-up of lamination film/panels
- Junction Boxes: Detailed product shots with technical components
- BESS: Containerized storage systems in operation

**Gallery Grid:**
- 6 images total: Solar farms, rooftop installations, control rooms
- All lazy-loaded with descriptive alt text
- Aspect ratio maintained across different screen sizes

**Partner Logos:**
- SVG format for crisp scaling
- Consistent sizing in grid layout
- Placeholder designs for Supercircle and Jakson

## Visual Hierarchy
- Strong contrast between sections using background colors
- Generous whitespace for breathing room
- Clear visual flow from hero → products → partners → contact
- Emphasis on "Made in India" and technical credibility
- Professional, engineering-focused aesthetic balancing approachability with expertise