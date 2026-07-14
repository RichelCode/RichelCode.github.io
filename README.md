# RichelCode.github.io

Personal website & consulting site for **Richel Ohenewaa Attafuah**,
AI/ML Engineer & Data Scientist. Built with [Astro](https://astro.build) +
Tailwind CSS v4, deployed to GitHub Pages.

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## ✏️ Where to edit things

All of my personal content lives in plain data files so it's easy to update:

| What                         | File                                  |
| :--------------------------- | :------------------------------------ |
| Name, links, **credentials** | `src/data/site.ts`                    |
| Services I offer             | `src/data/services.ts`                |
| Featured projects            | `src/data/projects.ts`                |
| Building-in-public updates   | `src/data/building.ts`                |
| Testimonials                 | `src/data/testimonials.ts`            |
| YouTube / Medium content     | `src/data/content.ts`                 |
| Blog posts (Markdown)        | `src/content/blog/*.md`               |

### Credentials to fill in (search the codebase for `TODO`)

- **Formspree** (contact form) → `FORMSPREE_ID` in `src/data/site.ts`
- **MailerLite** (newsletter) → `MAILERLITE_ACCOUNT_ID` + `MAILERLITE_FORM_ID` in `src/data/site.ts`
- **Social links** → `socials` in `src/data/site.ts`

## 🚀 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and deploys it to GitHub Pages. In the repo settings, **Settings → Pages →
Build and deployment → Source** must be set to **GitHub Actions**.

Live at: https://richelcode.github.io
