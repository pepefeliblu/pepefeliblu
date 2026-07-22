---
name: blog-post
description: "Create a new blog post for Juan Rueda's personal site (pepefeliblu). Use this skill whenever the user wants to write, draft, or publish a blog post, article, or entry. Also trigger when the user provides raw notes, ideas, or rough text and wants it turned into a publishable blog post. Covers the full workflow: structuring content, generating frontmatter, creating the markdown file, generating a cover image prompt, and updating llms.txt."
---

# Blog Post Skill

You are helping Juan Rueda create a blog post for his Astro-based personal site. The reference standard is the Google DevFest Quito post at `src/content/blog/google-devfest-quito.md`. Read it if you need to see the exact structure in action.

## Workflow

### Step 1: Understand the input

The user will give you raw content: notes, rough drafts, ideas, or a topic. Before writing:

1. Read `AI_AGENTS/blog.md` for the full specification
2. Read `AI_AGENTS/author_bio.md` for voice and tone
3. If the user provided a rough draft, **do not rewrite their intro**. If you think it can be improved, suggest the change and wait for approval

### Step 2: Generate the blog post

Create the file at `src/content/blog/<slug>.md` where `<slug>` is a kebab-case version of the title.

#### Frontmatter

The very first line of the file must be `---`. The schema is enforced by `src/content/config.ts`.

```yaml
---
title: "Your Title Here"
pubDate: YYYY-MM-DD
description: "Engaging description for SEO and social cards"
author: "Juan Rueda"
tags: ["kebab-case", "relevant", "tags"]
published: true
---
```

- `author` is always "Juan Rueda" unless the user says otherwise
- `published`: set to `false` if the user says it's a draft
- `canonical_url`: only add if the user mentions cross-posting (dev.to, etc.)
- `image`: only add if a cover image already exists at the path

#### Visual Hook (Cover Image)

Immediately after frontmatter, add a `<figure>` block. The caption should be quirky and engaging, like an appetizer for the post.

```html
<figure style="text-align: center;">
    <img src="/pepefeliblu/images/blog/your-image.webp" alt="Description" width="500" style="display: block; margin: 0 auto; border-radius: 10px;" />
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">
        Your quirky, engaging caption here.
    </figcaption>
</figure>
```

Before referencing any image path, verify it exists in the filesystem. If no image exists yet, leave the `<figure>` block with a `TODO` comment and tell the user they need to add an image.

> [!IMPORTANT]
> **Use the markup above exactly as written.** Every post on the site uses `width="500"` with these exact styles; visual consistency across entries beats per-image optimization. Do NOT change the width, styles, or layout based on the image's aspect ratio or your own judgment. If you genuinely believe a deviation would look better, propose it to the user and wait for approval. Never apply it unprompted.

#### Body Structure

- **Intro paragraph**: Sets the scene and states the thesis immediately. Do not pad with filler.
- **H2 sections** (`##`) for major topics
- **H3 sections** (`###`) for breakdowns within a topic
- **Attributions**: If referencing a speaker, person, or source, add immediately under the H2:
  `*Speaker: [Name](URL)*` or `*Source: [Name](URL)*`

#### Footer

End every post with:
```markdown
---

*A reflective closing thought that inspires or leaves room for thought.*
```

The closing note must never be engagement bait. "What do you think?" or "Let me know in the comments" are strictly prohibited. For event recaps, a brief acknowledgment to organizers is acceptable.

### Step 3: Writing rules checklist

Before finalizing, verify:

- [ ] **No em-dashes**: No "—" or "–" anywhere. Use periods or commas instead
- [ ] **Fact-check**: Scan for false or unverifiable claims and flag them
- [ ] **Links are useful and valid**: Verify every link returns 200 OK
  - Consumer products → link to Wikipedia (not the product homepage)
  - Developer tools → link to official documentation
  - Claims/facts → link to reputable news (BBC, Guardian) or academic sources (Arxiv, MDPI)
  - Prioritize free and open-source resources
- [ ] **Sources validated**: Check for linkrot. All URLs must be reachable
- [ ] **No hype or buzzwords**: The tone is professional, clear, opinionated but pragmatic
- [ ] **Slug matches filename**: The kebab-case slug in the filename matches the title

### Step 4: Generate cover image prompt

After writing the post, generate a prompt the user can paste into an AI image generator (Midjourney, DALL-E, etc.) to create the cover image.

The cover is the visual hook: it must hit the reader emotionally before they read a single word. Never produce a flat "minimal illustration of X" prompt. Build a full scene, the way a children's book illustrator would: a character or subject caught mid-moment, doing something, feeling something, in a place.

Every prompt MUST include all of these layers:

1. **Style**: whimsical children's book illustration, hand-painted feel (gouache/watercolor texture, visible brushwork, storybook quality). Keep the "Digital Moleskine" palette: warm creamy paper tones, burnt orange accents, soft muted secondary colors.
2. **Scene & story**: a concrete narrative moment that embodies the post's core tension, not a symbol of the topic. Describe who/what is in the scene, what they are doing, and the emotion on display (frustration, wonder, hesitation). One clear focal point.
3. **Composition**: explicit camera/layout direction: viewing angle, foreground/midground/background, where the focal subject sits, use of negative space, depth. Landscape orientation (3:2 or 16:9) since it renders as a wide blog cover.
4. **Lighting & atmosphere**: time of day, light quality (soft lamplight, late-afternoon sun through a window), mood.
5. **Negative constraints**: always end with: no text, no letters, no numbers, no logos, no photorealism.

**Example (for a post about confusing sticker album design):**
```
Whimsical children's book illustration, hand-painted gouache texture with soft watercolor edges. Scene: a small boy kneels on a living room rug, hunched over an open sticker album almost as big as he is, holding a soccer sticker in mid-air with a worried frown, unable to tell which of two identical-looking slots it belongs to. Scattered sticker packets and a mug sit around him on the rug. Composition: low camera angle at the boy's eye level, album filling the foreground, boy as the focal point slightly right of center, cozy blurred living room in the background, generous negative space in the upper third. Lighting: warm late-afternoon sunlight slanting through a window, soft shadows, nostalgic mood. Palette: warm creamy paper tones, burnt orange and terracotta accents, muted olive greens. Landscape 3:2. No text, no letters, no numbers, no logos, no photorealism.
```

Present the prompt to the user and let them know this step is manual.

### Step 5: Post-publication reminders

After the post is created, remind the user to:

1. **Add a cover image** to `public/images/blog/` if one doesn't exist yet, then update the `<figure>` block and the frontmatter `image` field
2. **Update `public/llms.txt`**: Add the new post to "Recent Posts" and remove the oldest if there are more than 5. Format:
   ```
   - [Title](/pepefeliblu/blog/slug) - Description
   ```
3. **Build and verify**: Run `pnpm build` to check for broken links or schema errors

If the user confirms publication, go ahead and update `llms.txt` yourself.
