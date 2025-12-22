You are a senior frontend engineer setting up a **personal website repository** for a software developer.

## Context

* Repository name: `pepefeliblu`
* Purpose:

  * Personal website
  * Tech blog (writing-first)
  * CV / About section
  * SEO-optimized
* Audience:

  * Recruiters
  * Other engineers
  * Tech readers
* Tone:

  * Clean
  * Professional
  * Minimal
  * Opinionated but not flashy

## Constraints

* Use **Astro** as the static site generator
* Content must be **Markdown-first**
* No backend, no database
* Hosting target: **GitHub Pages**
* Deployment via **GitHub Actions**
* Editing workflow must support:

  * Local Markdown editors (e.g. Obsidian)
  * GitHub web editing
* Keep everything lightweight and dependency-minimal
* No CMS, no Angular, no React unless strictly necessary

## Required Features

1. Blog system using Markdown
2. Static pages:

   * Home
   * About
   * CV (Markdown-rendered)
3. SEO:

   * Meta tags
   * Sitemap
   * RSS feed
4. Clean layout with:

   * Header navigation
   * Footer with social links (GitHub, LinkedIn, email)
5. Syntax highlighting for code blocks
6. Dark/light mode (simple, optional)
7. High Lighthouse score focus

## Project Structure

Create a clean, readable structure similar to:

* /src

  * /layouts
  * /components
  * /pages
* /content

  * /blog
  * /pages
* /public
* astro.config.mjs
* README.md

## README Requirements

Write a concise README that explains:

* What the site is
* How to run locally
* How to add new blog posts
* How deployment works

Keep it professional and minimal.

## What to Generate

* Initialize the Astro project
* Configure Markdown content collections
* Set up routing for blog posts
* Add example content (1 blog post, 1 CV page)
* Configure GitHub Actions for automatic deployment
* Ensure the site builds correctly with `pnpm run build`

Do NOT add unnecessary libraries, analytics, CMS tools, or ads.
Favor clarity, simplicity, and long-term maintainability.
