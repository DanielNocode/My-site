# AI Automation Portfolio — Danil

Персональный сайт-визитка технического специалиста по AI-агентам, чат-ботам и автоматизациям онлайн-бизнеса.

**Tech stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion

**Design:** Cyberpunk / tech-neon, glassmorphism, responsive (mobile-first)

---

## Quick start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Dev server runs at `http://localhost:3000`.

---

## Deploy to Vercel

The project is ready for zero-config deployment to Vercel:

1. Push the repo to GitHub
2. Import the repo in [vercel.com/new](https://vercel.com/new)
3. Deploy — no extra configuration needed

---

## Project structure

```text
.
├── app/
│   ├── layout.tsx          # Root layout with meta tags
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles + cyberpunk theme
├── components/
│   ├── sections/           # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Audience.tsx
│   │   ├── Services.tsx
│   │   ├── Cases.tsx
│   │   ├── Process.tsx
│   │   ├── Tools.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contacts.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI components
│       ├── AnimatedSection.tsx
│       ├── GlassCard.tsx
│       ├── NeonButton.tsx
│       └── SectionHeading.tsx
├── public/images/          # Static assets
├── SITE_ARCHITECTURE.md    # Content source (RU)
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Content source

All site text comes from `SITE_ARCHITECTURE.md`. To update copy, edit that file and rebuild.

## Links

- Telegram: https://t.me/techprod_ai
- Email: dss.techspec@gmail.com
