# Yashdeep Tehlan — Portfolio

Personal portfolio site for **Yashdeep Tehlan**, AI / Backend Engineer specialising in LLM systems, RAG pipelines, and FastAPI backends.

**Live:** [yashdeeptehlan.com](https://yashdeeptehlan.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion (motion/react v12) |
| 3D background | Three.js (raw, no R3F) |
| Theme | next-themes (dark / light) |
| Deployment | Vercel |

---

## Features

- **Raining letters hero** — canvas-based falling characters with TextScramble cycling through role titles
- **Three.js dot wave** — 2,400-particle animated background, theme-aware (dark/light)
- **Stacked panels gallery** — 3D perspective project showcase with spring physics; mobile falls back to a horizontal snap carousel with tap-to-expand overlay
- **In Production badges** — pulsing green indicators on projects actively running in production, with hover tooltips
- **Light / dark mode** — system-independent toggle, persisted via `localStorage`
- **Cursor glow** — custom magnetic cursor with spring-delayed outer ring (desktop only)
- **3D card tilt** — cards tilt toward the cursor on hover (±8°)

---

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── raining-letters-hero.tsx   # Hero section
│   │   ├── dotted-surface.tsx         # Three.js background
│   │   └── stacked-panels-cursor-intereactive-component.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── CursorGlow.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── ProjectsGallery.tsx
│   └── Skills.tsx
├── data/
│   └── portfolio.ts      # All content lives here — edit this to personalise
├── hooks/
│   ├── useCardTilt.ts
│   └── useScrollSpy.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

```bash
# Clone
git clone https://github.com/yashdeeptehlan/portfolio.git
cd portfolio

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build
```

Requires **Node.js 18+**.

---

## Personalising

All content is centralised in `src/data/portfolio.ts` — update `personalInfo`, `projects`, `experience`, `education`, and `skills` there. No other files need to change for content updates.

---

## Connect

- LinkedIn: [linkedin.com/in/yashdeeptehlan](https://linkedin.com/in/yashdeeptehlan)
- GitHub: [github.com/yashdeeptehlan](https://github.com/yashdeeptehlan)
- Email: tehlanyashdeep@gmail.com
