Template for `RELEASE_NOTES.md` when release body needs manual fallback or local preview.

## Rules

- Source of truth stays in latest version section of `CHANGELOG.md`.
- `RELEASE_NOTES.md` should contain only latest released version section.
- Do not include `## [Unreleased]` content.
- Do not append GitHub auto-generated notes if release body must exactly match changelog.

## Expected Shape

```md
### [0.1.4](https://github.com/<owner>/<repo>/compare/v0.1.3...v0.1.4) (2026-05-13)

### Features

- **scope:** short summary ([abc1234](https://github.com/<owner>/<repo>/commit/<fullhash>))

### Bug Fixes

- **scope:** short summary ([def5678](https://github.com/<owner>/<repo>/commit/<fullhash>))

### Documentation

- short summary ([ghi9012](https://github.com/<owner>/<repo>/commit/<fullhash>))

### Refactoring

- short summary ([jkl3456](https://github.com/<owner>/<repo>/commit/<fullhash>))

### Tests

- short summary ([mno7890](https://github.com/<owner>/<repo>/commit/<fullhash>))

### Chores

- short summary ([pqr2345](https://github.com/<owner>/<repo>/commit/<fullhash>))
```

## Why Previous Releases Looked Empty

- `gh release create` still used `--notes-file CHANGELOG.md`, not extracted `RELEASE_NOTES.md`.
- `--generate-notes` appended GitHub `Changes`, so release body differed from changelog section.
- `standard-version` default changelog omitted `docs`, `refactor`, `test`, `chore`, so version section could be almost empty.

## Recommended Flow

1. Commit with conventional commit types.
2. Run `standard-version`.
3. Extract latest version section from `CHANGELOG.md` into `RELEASE_NOTES.md`.
4. Publish GitHub Release with `--notes-file RELEASE_NOTES.md` only.
