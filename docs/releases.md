# Releases

Portfolio releases use semantic versions. `package.json`, `package-lock.json`,
the Git tag, and the GHCR image tag must identify the same version.

Use `vX.Y.Z` for Git and GHCR tags. The package files omit the `v` prefix.

## Create a release

Start from a clean, up-to-date `main` branch. Choose one of the following:

```bash
npm version patch -m "chore(release): %s"
npm version minor -m "chore(release): %s"
npm version major -m "chore(release): %s"
```

To release a specific version instead:

```bash
npm version 1.0.5 -m "chore(release): %s"
```

`npm version` updates both package files, creates a release commit, and creates
the corresponding `v1.0.5` Git tag locally.

Push the release commit first:

```bash
git push origin main
```

Wait for the `CI` workflow to publish the commit-SHA image. Then push the tag:

```bash
git push origin v1.0.5
```

The `Release` workflow verifies the package versions and promotes the existing
SHA image to `ghcr.io/alikayar/portfolio:v1.0.5`. It does not rebuild the
application and refuses to overwrite an existing version image.

## Deploy or roll back

Run the private infrastructure repository's `Deploy portfolio` workflow with
the desired version as `image_tag`:

```text
v1.0.5
```

Rollback uses the same operation with an older version, such as `v1.0.2`.

## Version policy

- Patch: content changes and fixes, for example `1.0.4` to `1.0.5`.
- Minor: new sections or features, for example `1.0.5` to `1.1.0`.
- Major: a breaking public contract or an intentional new site generation, for
  example `1.1.0` to `2.0.0`.

An internal architecture or implementation change alone does not require a
major release when the site's public behavior remains compatible.

Published `v*` Git tags and GHCR version tags are treated as immutable. Do not
move, delete, recreate, or overwrite them. Protect `v*` Git tags with a GitHub
tag ruleset that restricts updates and deletions.

The GitHub tag ruleset does not protect the corresponding GHCR container tag.
GHCR version immutability is enforced by the release workflow's existing-image
check and by limiting package write access.
