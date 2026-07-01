# Arpit Kumar Singh — Portfolio

A premium, minimalist personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite** — fast dev server and optimized builds
- **TypeScript** — full type safety
- **Tailwind CSS** — utility-first styling with a custom design system
- **Framer Motion** — subtle, purposeful animation
- **Lucide React** + **React Icons** — iconography
- **EmailJS** — contact form email delivery (client-side, no backend needed)

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/       Header, Footer, BackToTop
    sections/      Hero, About, Skills, Experience, Projects, Education,
                    Achievements, GithubSection, Contact
    ui/            Reusable primitives (Button, Section, Reveal, ThemeToggle)
  constants/        All resume/portfolio content lives here — edit this
                     file to update copy without touching components
  hooks/            useTheme, useScrollSpy, useScrolled, useGithubRepos
  types/            Shared TypeScript interfaces
  styles/           Tailwind entry + design tokens (globals.css)
```

## Before you deploy — required setup

### 1. Add your resume PDF
Place your resume at `public/Arpit_Kumar_Singh_Resume.pdf` (referenced by
`PERSONAL_INFO.resumeUrl` in `src/constants/index.ts`).

### 2. Set your GitHub username
Update `GITHUB_USERNAME` in `src/constants/index.ts`. Repositories are fetched
live from the public GitHub REST API — no token needed for public repos, but
rate limits apply (60 requests/hour unauthenticated).

### 3. Configure EmailJS (contact form)
The contact form is wired to [EmailJS](https://www.emailjs.com) but ships
with placeholder IDs so it won't send real emails until configured:

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) and a **Template** with variables
   `from_name`, `from_email`, `message`.
3. Install the SDK: `npm install @emailjs/browser`
4. In `src/components/sections/ContactForm.tsx`, replace:
   ```ts
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
   with your actual IDs from the EmailJS dashboard.

Until configured, the form simulates a successful send in the console so you
can preview the UI/UX without live credentials.

### 4. Update social + contact links
All personal info (email, LinkedIn, GitHub, LeetCode) lives in
`PERSONAL_INFO` inside `src/constants/index.ts`.

### 5. Replace placeholder project links
Each project in `PROJECTS` (same file) has a `githubUrl` — update these to
your real repository URLs, and add `liveUrl` where a live demo exists.

### 6. Open Graph / SEO image
Add a `public/og-image.png` (1200×630px recommended) for social share
previews, referenced in `index.html`.

## Design System

Defined in `tailwind.config.ts` and `src/styles/globals.css`:

- **Colors**: white/near-white backgrounds, `#111111` text, `#2563EB` accent,
  full dark mode variant
- **Type**: Inter (body) + Manrope (display/headings)
- **Motion**: fade/slide-up reveals on scroll, hover lift on cards, respects
  `prefers-reduced-motion`

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`)
- Skip-to-content link
- Visible focus rings throughout
- ARIA labels on icon-only buttons
- Sufficient color contrast in both themes

## Deployment

Any static host works well — Vercel, Netlify, GitHub Pages, Cloudflare Pages.
For Vercel: connect the repo and it will auto-detect the Vite build.
