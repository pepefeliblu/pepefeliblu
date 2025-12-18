---
title: "The Pragmatist's Dilemma: When 'Wrong' Solutions Work Better"
pubDate: 2025-12-17
description: "Why 'inefficient' solutions like Base64 uploads and code-first templates can sometimes be the right choice for maintainability."
author: "Juan Rueda"
tags: ["engineering", "pragmatism", "maintainability", "architecture"]
---


<figure style="text-align: center;">
    <img src="/pepefeliblu/images/blog/pragmatism_vs_purism.webp" alt="Pragmatism vs Purism" style="display: block; margin: 0 auto; width: 100%; height: auto; border-radius: 10px;" />
    <figcaption style="font-size: 0.9em; color: #666; margin-top: 10px;">Sometimes the crooked path is the only one that leads home.</figcaption>
</figure>

There's a certain satisfaction in doing things "the right way." We read the [RFCs](https://www.ietf.org/standards/rfcs/), we follow the best practices, we architect our systems according to well-established patterns. But sometimes, in the trenches of real-world development, you encounter solutions that make you pause and think: "Wait, that's not how you're supposed to do that... but it actually makes sense."

## The Base64 Revelation

I recently stumbled upon something in our company's web platform that challenged my assumptions about file uploads. Instead of the standard [`multipart/form-data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) approach we all learned to use (probably with [multer](https://www.npmjs.com/package/multer) or similar libraries), our custom API requires files to be converted to [base64 strings](https://developer.mozilla.org/en-US/docs/Glossary/Base64) and embedded directly in JSON payloads.

My first reaction was textbook: "That's inefficient! Base64 encoding bloats the file size by approximately 33%." And I'm not wrong about that. A 1MB file becomes 1.33MB when base64-encoded. On paper, this is wasteful, especially at scale.

But here's the thing: it works beautifully for our use case.

## The Hidden Benefits of "Inefficiency"

When you step back from the theoretical overhead, some practical advantages emerge:

**Simplicity in testing.** No need to wrestle with multipart forms in your API client. Every request is just JSON. You can test endpoints with a simple `curl` command or any basic HTTP client. The friction disappears.

**Consistent serialization.** Your entire request body follows the same structure and validation patterns. No special handling for file parts versus data parts. The mental model is cleaner.

**Easier debugging.** JSON is human-readable. You can log entire requests, inspect them in browser dev tools, and understand exactly what's being sent without specialized tooling.

For an internal API serving a controlled set of clients with modest file sizes, that 33% overhead might be a small price to pay for dramatically improved developer experience.

## Code-First Templates: Another "Wrong" That's Right

I encountered another unconventional choice recently. One of our backend developers generates CSV templates dynamically in code rather than storing static template files in the assets folder.

My instinct said: "Just put the CSV in assets. Why generate something that never changes?"

But his approach has merit:

**Single source of truth.** The CSV structure lives in the same place as the code that validates and processes uploaded CSVs. When the schema changes, the template automatically reflects it. No risk of the template and validation logic drifting apart.

**No asset management overhead.** No questions about cache invalidation, versioning, or deployment pipelines for static files. It's just code.

**Programmatic flexibility.** Need to add helpful comments or examples based on user permissions? Need to generate slightly different templates for different contexts? The code can handle it.

Yes, you're "wasting" CPU cycles generating the same CSV repeatedly instead of serving a static file. But we're talking about microseconds of processing time versus the very real cost of maintaining consistency between code and assets over time.

## The Pattern: Optimizing for Maintainability

Both of these "wrong" solutions share a common thread: they optimize for maintainability and developer experience rather than theoretical efficiency.

This isn't new. The entire history of software development is filled with examples of "slower" solutions winning because they made developers more productive:

- [Python](https://www.python.org/) is slower than C, but we use it anyway
- [React's virtual DOM](https://react.dev/) adds overhead, but simplifies our mental model
- [Docker containers](https://www.docker.com/) have more overhead than bare metal, but we containerize everything

The key insight is understanding **what you're actually optimizing for.**

## When to Break the Rules

I'm not advocating for throwing out best practices. Base64-encoding gigabyte-sized files would be ridiculous. Generating massive, complex templates on every request would be wasteful.

The question to ask is: **What are the actual constraints of my system, and what trade-offs make sense given those constraints?**

For our internal API with controlled clients and modest file sizes, the base64 approach works. For CSV templates that are tiny and generated infrequently, code-first makes sense.

The "right" way is contextual.

## The Pragmatist's Mindset

As engineers, especially as senior engineers who've been burned by technical debt, we can become dogmatic about best practices. We've seen the consequences of shortcuts, and we're rightfully cautious.

But there's wisdom in recognizing when a solution that seems "wrong" by the book is actually the most pragmatic choice for your specific context. Sometimes the code that makes you raise an eyebrow on first glance is the same code that will be easiest to maintain three years from now.

The craft isn't just in knowing the patterns. It's in knowing when to apply them, when to adapt them, and when to ignore them entirely.

After all, there are many ways to kill a mockingbird. The best way depends on what you're actually trying to accomplish.
