<div align="center">
  <h1 align="center">Contributing</h1>
</div>

## ⚙️ Setup

After cloning the repository you need to install all dependencies. We use [PNPM](https://pnpm.io/) to manage dependencies. Installation instructions for PNPM can be found at [pnpm.io](https://pnpm.io/). After installing PNPM, you can install all dependencies by running:

```bash
pnpm install
```

Some packages, like the ESLint config, need to be built before they can use. To prepare your code environment, you can run:

```bash
pnpm prepare
```

## 🟠 Monorepo

This repository is a monorepo built with [PNPM workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/repo).

The root `package.json` contains a set of scripts you can run, to run commands in the repository. For example, you can run `pnpm lint` to lint all apps and packages.

This monorepo separates two types of packages:

- `apps` - Contains applications that are meant to be run.
- `packages` - Contains shared code, configuration, and tools.

## 🤖 Scripts

The root `package.json` contains a set of scripts you can run, most notably:

- `build` - Build apps and packages.
- `prepare` - Prepare the code environment by running the builds for all config packages.
- `clean` - Clean temporary / cache related folders for all apps and packages. This does not remove the `node_modules` folder.
  - `clean:build` - Clean the build output.
  - `clean:cache` - Clean the tooling caches (Typescript, Prettier, ESLint, etc.).
  - `clean:turbo` - Clean the Turbo cache.
- `format` - Run all code formatters for all apps and packages.
  - `format:eslint` - Run ESLint in fix mode.
  - `format:prettier` - Format code with Prettier.
- `lint` - Run all code linters for all apps and packages.
  - `lint:eslint` - Run ESLint.
  - `lint:prettier` - Run Prettier in check mode.
  - `lint:typescript` - Run Typescript type checking.
- `docs:build` - Build the docs app.
- `docs:serve` - Serve the build output for the docs app. This will run a build first.
- `docs:start` - Start the development server.
- `eslint:build` - Run a build for the ESLint config.
- `eslint:inspect` - Start the [ESLint Config Inspector](https://github.com/eslint/config-inspector) for the ESLint config.

> [!TIP]
> You might want to run a script for only one package or app. Almost all of the `package.json` scripts support the use of the [`--filter` flag](https://turbo.build/repo/docs/reference/command-line-reference/run#--filter) used by Turborepo:
>
> ```bash
> pnpm lint --filter=@incentro-ecx/prettier-config
> ```

## 💅 Style Guide

The style guide can be found [here](./STYLEGUIDE.md).

## 🚀 Versioning & Releasing

Keeping track of versions in a monorepo manually can be tricky, so that's why we use [Changesets](https://github.com/changesets/changesets) to help us with this.

Whenever you create a PR we require you to declare a changeset matching the PR. This is a summary of all the version bumps required for all packages and a summary of all the changes that are included in the release.

When a PR is merged, the changeset will be used to automatically bump the versions of the packages and generate a changelog.

### ✒️ Generating changesets

To generate a changeset, you can use the following command:

```bash
pnpm changeset:add
```

This command will guide you through a menu where you can select the affected packages and write a message to add to the changelog.

> [!NOTE]
> The [Changeset Bot](https://github.com/apps/changeset-bot) will warn you when you haven't added a changeset to your PR.

### 🚢 Releasing

Whenever it's time to release the packages, we have a manual release process. Why manual?

1. Publishing to the NPM registry requires two-factor authentication, [which isn't supported by the Changeset GitHub Actions workflow](https://github.com/changesets/action?tab=readme-ov-file#with-publishing).
2. We want a publish to NPM to be traced back to an individual, not a bot.

Before starting the release process, you need to make sure you have created a personal access token for both NPM and GitHub:

1. Copy the `.nmprc.example` file in the root of this repository and rename it to `.npmrc`.
2. Create a PAT for NPM following the instructions [here](https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-granular-access-tokens-on-the-website). It should have write access to the relevant `@incentro-ic` packages.
3. Paste the PAT for NPM in the `.npmrc` file, replacing `<TOKEN>`.
4. Copy the `.env.example` file in the root of this repository and rename it to `.env`.
5. Create a PAT for GitHub using [this link](https://github.com/settings/tokens/new?scopes=repo,read:user&description=Incentro%20-%20Code%20standards%20development). The link will automatically send you to the screen where you can create a PAT with the correct scopes.
6. Paste the PAT for GitHub in the `.env` file after `GITHUB_TOKEN=`.
7. Configure SSO for the PAT by finding your newly created PAT in [the list](https://github.com/settings/tokens) and clicking on the `Configure SSO` button and configuring it for the `incentro-ecx` organization.

To release the packages, you first need to make sure you pushed all of your commits:

```bash
git push
```

Afterwards you need to update all the versions of the packages. You can do this by running the following command:

```bash
pnpm changeset:version
```

This command will update the versions of the packages and create a changelog for each package. You should commit these changes before continuing:

```bash
git add .
git commit -m "release new versions"
```

After updating the versions you need to make sure all packages are built before publishing them to NPM.

```bash
pnpm build
```

After running the builds, you can publish the packages by running the following command:

```bash
pnpm changeset:publish --otp=<token>
```

_The `--otp` flag is used to provide NPM with a [one-time password](https://docs.npmjs.com/about-two-factor-authentication)._

> [!IMPORTANT]
> This command assumes the last is the release commit. You should not commit any changes between running the version and publish command.

This should publish the packages to NPM, update the changelog and create Git tags. To push the tags to Github run:

```bash
git push --follow-tags
```
