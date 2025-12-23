# SEO Guidelines

This document defines **SEO-only rules** for this website. It
intentionally excludes content style, writing tone, CSS, UI, or general
site architecture.

The objective is: - Sustainable organic traffic - Strong technical SEO
foundations - High trust and crawlability - Long-term search visibility

------------------------------------------------------------------------

## 1. SEO Scope & Authority

These rules apply to: - All indexable pages - Blog posts - Static
pages - Generated content

If any SEO rule conflicts with non-SEO specs, this document governs
**only SEO-related decisions**.

------------------------------------------------------------------------

## 2. Indexing & Crawl Control

### 2.1 robots.txt

-   Allow indexing of:
    -   Blog posts
    -   Core pages
-   Disallow:
    -   Drafts
    -   Internal tools
    -   Experiments
    -   Build artifacts

### 2.2 Sitemap (sitemap-index.xml)

-   Must be generated automatically
-   Must include:
    -   Canonical URLs only
    -   Last modified date
-   Must update on every publish

------------------------------------------------------------------------

## 3. URL Strategy

Rules: - Lowercase only - Hyphen-separated - Human-readable - Stable
(never change without redirects)

Good:

    /pepefeliblu/blog/angular-route-guards

Bad:

    /blog/Post?id=42

------------------------------------------------------------------------

## 4. Canonicalization

Every indexable page must define:

    <link rel="canonical" href="PRIMARY_URL" />

Prevent duplication from: - Trailing slashes - Query params - HTTP vs
HTTPS - WWW vs non-WWW

------------------------------------------------------------------------

## 5. Metadata (Mandatory)

### 5.1 Title Tags

-   50--60 characters
-   One per page
-   Descriptive, non-repetitive

Format:

    Primary Topic – Context | Juan Rueda

### 5.2 Meta Descriptions

-   140--160 characters
-   Unique per page
-   Written for humans
-   No keyword stuffing

------------------------------------------------------------------------

## 6. Open Graph & Social SEO

Required on all pages: - og:title - og:description - og:type - og:url -
og:image

Also include: - Twitter Card (`summary_large_image`)

Images: - Minimum 1200×630 - Unique where possible - Relevant to page
content

------------------------------------------------------------------------

## 7. Heading Semantics

Rules: - One `<h1>` per page - Logical hierarchy - No skipped levels

SEO relies on **structural clarity**, not visual size.

------------------------------------------------------------------------

## 8. Internal Linking

Rules: - Every indexable page must link to at least: - 2 relevant
internal pages - Anchor text must be descriptive

Avoid: - "click here" - generic anchors

------------------------------------------------------------------------

## 9. External Links

-   Use external links to:
    -   Authoritative sources
    -   Official documentation
-   Add `rel="noopener"` where applicable
-   Do NOT overuse `nofollow`

------------------------------------------------------------------------

## 10. Image SEO

Rules: - Every image must include: - Descriptive `alt` text - Alt text
must: - Describe the image content - Avoid keyword stuffing - Decorative
images must be marked appropriately

------------------------------------------------------------------------

## 11. Performance (SEO-Relevant Only)

SEO-critical requirements: - Fast TTFB - Minimal CLS - No
render-blocking assets for core content - Lazy-load non-critical media

Target: - Lighthouse SEO ≥ 95 - Core Web Vitals: Pass

------------------------------------------------------------------------

## 12. Structured Data (Schema)

Use where applicable: - Article / BlogPosting - BreadcrumbList - Person
(Author)

Author schema must include: - Name - Professional role - Public profile
links (if available)

------------------------------------------------------------------------

## 13. Content Duplication Rules

Avoid: - Publishing near-identical pages - Reusing intros or
conclusions - Auto-generated variants

If overlap is unavoidable: - Use canonical URLs - Merge content when
possible

------------------------------------------------------------------------

## 14. Indexability Checklist

Before publishing, confirm: - Page is indexable - Canonical URL is
correct - Metadata is present - Internal links exist - Page is reachable
within 3 clicks

------------------------------------------------------------------------

## 15. SEO Philosophy (Final Rule)

SEO must support: - Clarity - Trust - Discoverability

Short-term tactics are forbidden. Search visibility is earned through
**technical correctness and consistency**.
