# Release Guidelines

We use [bumpp](https://github.com/antfu/bumpp) to handle semantic versioning, git tagging, and changelog generation interactively.

## Release Process

To cut a new release, run the following command in your terminal:

```bash
pnpm release
```

This will launch an interactive wizard that will guide you through:
1.  **Selecting the new version**: Choose between Patch, Minor, Major, or a custom version.
2.  **Confirming changes**: Review the file changes (package.json version bump).
3.  **Git Tagging**: Automatically create a git tag for the release.
4.  **Pushing**: Push the new version and tag to the remote repository.

## Semantic Versioning Rules

We follow [Semantic Versioning 2.0.0](https://semver.org/), adapted for this frontend project:

-   **MAJOR**: Significant refactoring (e.g., switching from Astro to Next.js) or extensive new features that fundamentally change the architecture (e.g., implementing an API connection for data persistence).
-   **MINOR**: New features within the current tech stack and architecture (e.g., implementing Christmas mode, adding RSS feeds, new domain rules).
-   **PATCH**: Bug fixes, minor style corrections, and trivial updates.

> [!NOTE]
> New blog entries do **not** affect the version number.

> [!TIP]
> **Ask the user before proceeding in case of doubts** regarding which version bump to apply.
