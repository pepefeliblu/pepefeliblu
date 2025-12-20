# Blog Post Specification

This file outlines the definitive blueprint for building final blog entries. Follow this structure strictly.

## 1. Frontmatter
Always use this exact structure. `author` is fixed.

```yaml
---
title: "Insert Title Here"
pubDate: YYYY-MM-DD
description: "Insert engaging description here"
author: "Juan Rueda"
tags: ["relevant", "tags", "kebab-case"]
---
```

## 2. Visual Hook (The Cover)
- **Placement**: Immediately after frontmatter.
- **Structure**: `<figure>` with `style="text-align: center;"`.
- **Image**: `<img>` tags should be adjusted to fit the specific image provided. Common defaults are `width="500"`, `border-radius: 10px`, and `display: block; margin: 0 auto;`, but these are not mandatory. Please analyze the image for optimal fit and sizing.
- **Caption**: `<figcaption>` with `font-size: 0.9em; color: #666;`.
- **Content Constraint**: The caption **MUST** be quirky and engaging (an "appetizer").
- **Example**:
  ```html
  <figure style="text-align: center;">
      <img src="/path/to/image.webp" alt="Description" width="500" style="display: block; margin: 0 auto; border-radius: 10px;" />
      <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">
          The volunteer got a bit nervous and skipped the 'n' in my name, so we had to perform a hot-fix and squish it in.
      </figcaption>
  </figure>
  ```

## 3. Structural Elements
Use the structure of the *Google DevFest Quito* post as the absolute standard.

### A. Intro
### A. Intro
- **Respect Original Text**: Assume the provided blog entry already has a strong hook and thesis.
- **Review Policy**: Do **NOT** rewrite the intro automatically. If you believe it can be improved, **prompt a change suggestion** to the user first.
- State the core thesis or value proposition immediately (verify this exists, don't invent it).

### B. Body Headings
- **H2 Headers**: Standard Markdown headers.
  - Example: `## Modern Data Architecture`
  - Example: `## Agentic AI & The Local Web`
- **Sub-headers**: Use H3 (`###`) for breakdowns.

### C. Attributions
- If referencing a talk, idea, or specific person, use the "Speaker/Source" line format immediately under the H2.
- Format: `*Speaker: [Name](URL)*` or `*Source: [Name](URL)*`

### D. Footer
- End the post with a horizontal rule `---`.
- Follow with a final italicized **closing note**.
- **Constraint**: This note should leave room for reflection or inspire the reader. It should not just be a dry acknowledgement (unless strictly necessary).
- Example:
  ```markdown
  ---
  
  *Sometimes, the most elegant code isn't the one that follows the rules—it's the one that ships.*
  ```

## 4. Writing Rules
- **No Em-Dashes**: Never use "—" or "–" to separate clauses. Use periods or commas.
- **Author**: Always "Juan Rueda". Unless otherwise specified direcly in the blog entry.
- **Fact-Checking**: You are responsible for scanning the input text for false claims and correcting them.
- **SEO & Trust**: Always add useful resource links (Wikipedia, Docs, Official sites) to concepts and terminology.

## 5. Post-Publication Requirements
- **Update `llms.txt`**: After creating a new blog post, you **MUST** update `public/llms.txt`.
  - Add the new post to the "Recent Posts" section.
  - Keep only the **latest 5** entries.
  - Format: `- [Title](/pepefeliblu/blog/slug) - Description`

## 6. Typical Layout Template

```markdown
[Frontmatter]

[Figure/Image]

Introductory paragraph setting the scene.

Here are the key takeaways...

## Heading Title

*Source: [Name](link)*

Content paragraph explaining the concept.

### Sub-concept
- Detail 1
- Detail 2

## Another Heading

Content...

---

*Final italicized cleanup or thanks.*
```
