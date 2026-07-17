# Aurexon - Premium Digital Studio

Next.js 15 + TypeScript + Tailwind CSS v4 + GSAP

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aurexon/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page with GSAP animations
│   └── sitemap.ts           # Dynamic sitemap generation
├── components/
│   ├── About.tsx            # About section
│   ├── CaseStudies.tsx      # Case studies section
│   ├── Contact.tsx          # Contact section
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Maintenance.tsx      # Maintenance section
│   ├── Nav.tsx              # Navigation with magnetic buttons
│   ├── Packages.tsx         # Packages/pricing section
│   ├── Process.tsx          # Process section
│   ├── Services.tsx         # Services section
│   └── Stack.tsx            # Tech stack section
├── public/
│   └── robots.txt           # SEO + LLM optimized robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Features

- ✅ Modern Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 for styling
- ✅ GSAP animations (ScrollTrigger, timelines)
- ✅ Magnetic button effects
- ✅ 3D card hover effects
- ✅ Animated background blobs (purple, pink, blue)
- ✅ FAQ accordion functionality
- ✅ SEO optimized metadata
- ✅ LLM-friendly robots.txt
- ✅ Dynamic sitemap generation
- ✅ Responsive design

## SEO & LLM Optimization

### robots.txt
Optimized for both traditional search engines and LLM crawlers:
- Allows Googlebot, Bingbot, etc.
- Allows GPTBot, Claude-Web, PerplexityBot, etc.
- Disallows admin/private areas
- Includes sitemap reference

### Sitemap
Dynamic sitemap generated via Next.js:
- Main page with daily updates
- Section anchors with weekly updates
- Priority-based indexing

### Metadata
Comprehensive OpenGraph and Twitter cards:
- Title, description, keywords
- Author information
- Social media previews
- Google verification ready

## Customization

### Colors
Edit the blob colors in `app/globals.css`:
```css
.blob-1 {
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
}
```

### Animations
Modify GSAP animations in `app/page.tsx`:
```typescript
gsap.from(".hero-title span", {
  y: 120,
  opacity: 0,
  stagger: 0.15,
  duration: 1,
  ease: "power4.out",
});
```

### Content
Update component files in `components/` directory to change text, pricing, services, etc.

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## License

© 2026 Aurexon Studio - Premium Digital Development
