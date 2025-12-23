# Release Guidelines

We use [bumpp](https://github.com/antfu/bumpp) to handle semantic versioning, git tagging, and changelog generation interactively.

## Release Process
    
1.  **Ensure a clean state**: Make sure all your changes are committed. The release command will create a new commit for the version bump, so your working directory should be clean (or at least free of changes you intend to include in the release).
    ```bash
    git add .
    git commit -m "feat: your features"
    ```
2.  **Run the release command**: Run the following command in your terminal:

```bash
pnpm release
```

This will launch an interactive wizard that will guide you through:
1.  **Selecting the new version**: Choose between Patch, Minor, Major, or a custom version.
2.  **Confirming changes**: Review the file changes (package.json version bump).
3.  **Git Tagging**: Automatically create a git tag for the release.
4.  **Pushing**: Push the new version and tag to the remote repository.

> [!CAUTION]
> **Do NOT use non-interactive flags** (like `--yes`, `-y`, or `--all`) when running the release command.
> Always manually inspect the "Confirming changes" step to ensure `package.json` is being updated. If `package.json` is not listed in the changes, abort the release.

## Verification

After the release is complete, verify that the `package.json` version matches the new git tag:

```bash
cat package.json | grep version
git describe --tags
```

## Semantic Versioning Rules

We follow [Semantic Versioning 2.0.0](https://semver.org/), adapted for this frontend project:

-   **MAJOR**: Significant refactoring (e.g., switching from Astro to Next.js) or extensive new features that fundamentally change the architecture (e.g., implementing an API connection for data persistence).
-   **MINOR**: New features within the current tech stack and architecture (e.g., implementing Christmas mode, adding RSS feeds, new domain rules).
-   **PATCH**: Bug fixes, minor style corrections, and trivial updates.

> [!NOTE]
> New blog entries do **not** affect the version number.

> [!TIP]
> **Ask the user before proceeding in case of doubts** regarding which version bump to apply.
