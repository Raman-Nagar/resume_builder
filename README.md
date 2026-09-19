# Resume Builder

Free online resume builder at [resumebuilder.ramannagar.in](https://resumebuilder.ramannagar.in). Built with Next.js 15, deployed on Vercel.

- ATS-friendly templates (Classic, Modern, Minimal)
- Live preview, one-click PDF download
- No account required — data stays in the browser (localStorage)
- Privacy-first: nothing is sent to any server

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: CSS custom properties (design tokens in `globals.css`)
- **Analytics**: Google Analytics (`G-YSJBLHXQFW`), Microsoft Clarity (`yktn6voi9e`)
- **Testing**: Vitest
- **Deployment**: Vercel (auto-deploy on push)

## Project Structure

```
src/
├── app/
│   ├── blog/              # 6 blog posts (Article JSON-LD, OG images)
│   ├── builder/           # Resume editor (client-side app)
│   ├── templates/         # Template pages + index
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of use
│   ├── layout.tsx         # Root layout (GA, Clarity, JSON-LD)
│   ├── page.tsx           # Landing page
│   ├── sitemap.ts         # 14-URL sitemap
│   └── robots.ts          # Allows /, disallows /builder/
├── components/
│   ├── blog/              # RelatedPosts component
│   ├── builder/           # Editor UI (forms, preview, sections)
│   ├── landing/           # Landing page sections
│   └── ui/                # Shared UI primitives
├── lib/
│   ├── og.tsx             # Shared OG image generator
│   ├── resume/            # Resume types, defaults, storage, validation
│   └── utils.ts
└── store/                 # ResumeContext + reducer
public/
├── manifest.json          # PWA manifest
├── llms.txt               # AI crawler manifest
├── icon-192.png
└── icon-512.png
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
npm test         # Vitest
```

## SEO

- Metadata + canonical URLs on every page
- JSON-LD: `SoftwareApplication`, `WebSite`, `FAQPage`, `HowTo`, `BreadcrumbList`, `Article`, `CollectionPage`, `CreativeWork`
- OG images generated via `@vercel/og` for all pages
- Sitemap at `/sitemap.xml`, robots at `/robots.txt`
- Google Search Console verified (`google847efaa3bf22d635.html`)

## Deployment

Push to `main` → Vercel auto-deploys.
