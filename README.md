# Gwer Donatus Portfolio

A premium, production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Next.js 15 App Router** with static generation
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations
- **shadcn/ui** components
- **Dark Mode** support
- **SEO Optimized** with metadata and Open Graph
- **Responsive Design** for all devices
- **Command Menu** (Cmd+K) for quick navigation
- **Custom Cursor** on desktop
- **Scroll Progress** indicator
- **Animated Sections** with scroll reveal
- **Project Filtering** by category
- **Blog with MDX** support
- **Contact Form** with validation

## Design System

The color palette is extracted from a premium sage-green design:

- **Content Background**: `#d2dec2` — Light sage
- **Light Card**: `#c6d6b1` — Soft green
- **Dark Card**: `#102d16` — Deep forest
- **Heading**: `#14230b` — Near-black green
- **Body**: `#626f56` — Muted green
- **Accent**: `#1a4d2e` — Emerald green

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
app/              # Next.js App Router pages
components/       # React components
  ui/            # shadcn/ui components
  sections/      # Page sections
  motion/        # Animation components
  cursor/        # Custom cursor
  command/       # Command menu
lib/             # Utilities and data
  data.ts        # Projects, blog, videos data
  utils.ts       # Helper functions
types/           # TypeScript types
content/         # MDX content
public/          # Static assets
```

## Pages

- `/` — Home with hero, featured projects, skills, latest posts, CTA
- `/about` — About me, philosophy, values, timeline, tech stack
- `/projects` — Project grid with filtering
- `/projects/[slug]` — Individual project detail
- `/blog` — Blog post listing with filtering
- `/blog/[slug]` — Individual blog post
- `/videos` — Video gallery with categories
- `/experience` — Professional experience timeline
- `/speaking` — Talks, podcasts, workshops
- `/resume` — Online resume with download
- `/contact` — Contact form
- `/privacy` — Privacy policy

## License

MIT
# Donatus-Gwer
