---
name: deploy
description: "Commit staged changes with a conventional commit message and run a semantic version release. Use when the user says 'deploy', 'release', 'ship it', 'do a patch/minor/major release', or wants to commit and bump the version. The user MUST specify the release type (patch, minor, major) or say 'no release' for a commit-only deploy."
---

# Deploy Skill

You are helping Juan Rueda commit and release his Astro-based personal site.

## Arguments

The user must provide the release type. Examples:
- `deploy patch` → commit + patch release
- `deploy minor` → commit + minor release
- `deploy major` → commit + major release
- `deploy no release` → commit + push only (no version bump)

If the user does not specify a release type, **ask them** before proceeding. Do not guess.

## Workflow

### Step 1: Read the release guidelines

Read `AI_AGENTS/release.md` for the full release specification. Follow it strictly.

### Step 2: Assess the current state

Run `git status` and `git diff --stat` to understand what changed. If there are no changes (nothing staged, nothing modified, no untracked files), **stop** and tell the user there's nothing to deploy.

### Step 3: Generate the commit message

Analyze the changed files to determine the commit type and write a message following the [Conventional Commits](https://www.conventionalcommits.org/) format used in this repo.

#### Commit type rules (derived from git history)

| Type       | When to use                                                                 |
|------------|-----------------------------------------------------------------------------|
| `feat`     | New blog post, new component, new capability, new page                     |
| `fix`      | Bug fix, typo correction, broken link fix                                  |
| `refactor` | Code restructuring without changing behavior                               |
| `docs`     | README updates, AI_AGENTS spec changes, documentation-only changes         |
| `style`    | CSS/styling changes, formatting-only changes                               |
| `chore`    | Dependency updates, config changes, tooling changes (NOT releases, bumpp handles those) |

#### Commit message format

```
type: concise lowercase description
```

Rules:
- **Lowercase** after the colon (no capital first letter)
- **No period** at the end
- **Concise but descriptive**: describe *what* changed, not *why* (the diff shows why)
- If a new blog post is the primary change, use: `feat: add new post '<Post Title>'`
- If multiple types of changes exist, use the most significant one
- **Max 72 characters** for the subject line

Examples from the repo history:
- `feat: add new post 'Simple vs Complex'`
- `fix: typo on cv`
- `refactor: improved ai context files`
- `docs: Refine README with updated project descriptions`
- `feat: add code syntax highlighting capabilities`

### Step 4: Stage and commit

```bash
git add -A
git commit -m "type: your message"
```

**Do NOT add a `Co-Authored-By` trailer.** The commit is authored by the user, period.

After committing, run `git status` to confirm a clean working directory.

### Step 5: Release (if requested)

> **Important reminder from `AI_AGENTS/release.md`:**
> New blog entries do **not** affect the version number. If the only changes are blog content, suggest `deploy no release` instead.

If the user requested a release type (patch, minor, major):

1. Run the release using bumpp with the specified type:
   ```bash
   npx bumpp --release <type> --yes --commit "chore: release v%s" --tag --push
   ```

2. After the release completes, verify success:
   ```bash
   cat package.json | grep version
   git describe --tags
   git log --oneline -2
   ```

3. Confirm to the user: the new version number, the git tag, and that it was pushed.

If the user requested `no release`:

1. Push the commit:
   ```bash
   git push
   ```

### Step 6: Summary

Print a short summary:
- What was committed (commit type + message)
- The release type and new version (if applicable)
- Confirmation that changes were pushed to remote
