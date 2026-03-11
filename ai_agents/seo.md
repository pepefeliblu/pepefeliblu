# SEO Rules (Project-Specific)

Standard SEO practices (robots.txt, sitemaps, canonicalization, heading hierarchy, alt text, performance) are assumed. This file documents only the **non-obvious, project-specific rules**.

## Title Tag Format
```
Primary Topic – Context | Juan Rueda
```
- 50-60 characters, descriptive, non-repetitive

## Metadata
- `<meta name="author">` mapped from frontmatter `author` field
- `<meta property="article:published_time">` mapped from frontmatter `pubDate` field
- Meta descriptions: 140-160 characters, unique per page, no keyword stuffing

## Open Graph
- Required on all pages: og:title, og:description, og:type, og:url, og:image
- Twitter Card: `summary_large_image`
- OG images: minimum 1200x630

## Internal Linking
- Every indexable page must link to at least **2 relevant internal pages**
- Descriptive anchor text (no "click here")

## External Links
- `rel="noopener"` where applicable
- Do NOT overuse `nofollow`
- Link strategy is defined in [blog.md](blog.md) (Wikipedia for products, official docs for tools, news/academic for claims)

## Structured Data (Schema)
- **Article / BlogPosting** for blog posts
- **BreadcrumbList** for navigation
- **Person** for author (name, role, profile links)
