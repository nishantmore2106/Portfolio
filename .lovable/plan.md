
# Nishant More — 3D Portfolio Website

A premium dark-themed single-page portfolio website replicating the editorial Framer template layout shown in the reference screenshots, with Nishant More's content replacing the original.

---

## Global Design System
- **Background**: Dark `#0f0f0f` with animated CSS noise texture (subtle grain movement)
- **Accent color**: `#D0FF71` (yellow-green) for numbers, tags, buttons, arrows, and highlights
- **Typography**: Large bold uppercase headings, high-contrast white text on dark
- **Custom circular cursor** that enlarges on hover with `#D0FF71` color
- **Smooth scroll reveal** animations as sections enter viewport

---

## 1. Sticky Header
- Left: **Nishant More** (name as logo/brand)
- Right nav links: **Work · Services · Process · Contact**
- Hover effect: **Rolling vertical slot-machine animation** — text slides up, duplicate slides in from below, smooth stop, no bounce
- No background blur, minimal and transparent on scroll

---

## 2. Hero Section
- **Background words**: `WEB` left side, `DESIGNER` right side — large, faded, layered behind portrait
- **Portrait card**: Centered, rounded, with subtle **3D tilt on mouse move** and **Z-depth shift on scroll**
- **Headline**: *"Nishant builds high-converting AI landing pages & digital systems."*
- **Subtext**: *"AI Landing Page Designer & Builder focused on clarity, structure, and scalable web architecture."*
- **Buttons**: Start a Project · View Work · Hire Me on Fiverr
- **Accent circle element** in `#D0FF71` near portrait (like the "Hi" bubble in the template)

---

## 3. What I Can Do For You (Services)
- Section title: **WHAT I CAN DO FOR YOU**
- Short descriptive paragraph
- **Expandable accordion list** (numbered):
  1. AI LANDING PAGE ARCHITECTURE → sub-items: layout planning, conversion flow, CTA strategy, responsive optimization
  2. CONVERSION DESIGN → section hierarchy, trust elements, clear messaging, conversion layouts
  3. WEB DESIGN → clean UI, responsive systems, performance-first
  4. PLANNING → strategy session, user journey mapping, growth roadmap
- Arrow icon rotates on expand, smooth slide-open animation, exact spacing from template

---

## 4. About Section
- Title: **ABOUT ME**
- Short paragraph about Nishant
- **Animated counters** (count up on scroll into view):
  - `6` — Years Experience
  - `118` — Completed Projects  
  - `22+` — Clients Worldwide
- Counter numbers in `#D0FF71` accent color

---

## 5. Featured Projects
- Section title + intro paragraph
- **Large stacked project cards** with rounded edges, full-width image backgrounds, overlay title + accent tag in `#D0FF71`
- Projects: **Elevate Studio · InsightIQ · FlowSync AI · Modern Portfolio**
- Hover: subtle 3D card tilt + slight lift (no heavy scale)
- Placeholder gradient images since no project screenshots provided

---

## 6. What My Clients Say (Testimonials)
- Section title: **WHAT MY CLIENTS SAY**
- **Bento grid layout** matching template: 3-column grid with dark cards
- Featured stat card (white): "22+ happy clients" with satisfaction rate
- Featured stat card (accent `#D0FF71`): growth metric
- Testimonial cards with: ⭐ star rating, quote text, avatar + name + role
- 4–5 testimonials from fictional past clients

---

## 7. Frequently Asked Questions
- **Two-column layout**: Title + intro text on left, accordion on right
- Questions about Nishant's services, process, timelines, revisions, how to get started
- Smooth accordion expand, minimal arrow icon, exact spacing

---

## 8. Design Insights & Ideas (Blog)
- Section title: **DESIGN INSIGHTS & IDEAS**
- Short intro paragraph
- **Two blog cards** side by side: image + accent tag + date + title
- Subtle hover lift effect
- Placeholder editorial images

---

## 9. Let's Work Together (Contact)
- **Left column**: Portrait image with accent circle element (hand emoji bubble matching template)
- **Right column**: Contact form with fields — Name, Email, Service Needed (dropdown), Message textarea
- Submit button styled with `#D0FF71` accent, uppercase text
- Footer below: email, social links, copyright

---

## Performance & Interactions
- CSS 3D transforms only (`perspective`, `preserve-3d`, `will-change: transform`)
- 3D effects disabled on mobile (under 768px)
- Smooth 60fps animations using `transform` and `opacity` only
- Scroll reveal using Intersection Observer
- No heavy libraries — all native CSS + React state
