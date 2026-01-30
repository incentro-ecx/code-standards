# Incentro IC - Code Standards - ESLint

## 💫 Introduction

Shared [ESLint](https://eslint.org/) configuration for linting files. It enforces our code style, as well as adding additional checks via various plugins:

- [`typescript-eslint`](https://typescript-eslint.io/) - Typescript support for ESLint
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) - A set of useful (and very strict) ESLint rules.
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Checks around `import` / `export` statements.
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - Checks around React components.
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Checks around React hooks.
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility checks for JSX elements.
- [`@eslint-community/eslint-plugin-eslint-comments`](https://github.com/eslint-community/eslint-plugin-eslint-comments) - Checks around comments disabling ESLint rules.
- [`@vitest/eslint-plugin`](https://github.com/vitest-dev/eslint-plugin-vitest) - Checks around Vitest test files.
- [`@cspell/eslint-plugin`](https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin) - Checks spelling and grammar.

The following configurations are available:

- [🏠 Base](#-base) - `@incentro-ic/config-eslint/base`
- [🦁 NestJS](#-nestjs) - `@incentro-ic/config-eslint/nest`
- [🔼 Next.js](#-nextjs) - `@incentro-ic/config-eslint/next`
- [⭐ Nextra](#-nextra) - `@incentro-ic/config-eslint/nextra`
- [🔴 React Router](#-react-router) - `@incentro-ic/config-eslint/react-router`

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D eslint @incentro-ic/config-eslint
```

## 🪛 Usage

Create an ESLint configuration file and re-export this configuration:

```js filename="eslint.config.js"
import config from "@incentro-ic/config-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...config,
  {
    ignores: [
      // Build output
      "dist/**",

      // Files in the root directory
      "*.*",
    ],
  },
]);
```

### ✏️ Adding spell checking

The ESLint config uses [an ESLint plugin](https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin) for [CSpell](https://cspell.org/). If it detects [a CSpell config file](https://cspell.org/docs/Configuration) it will use that file to spell check the codebase. Example:

```json filename="cspell.config.json"
{
  "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
  "version": "0.2",
  "language": "en",
  "words": ["incentro"]
}
```

## ⚙️ Configs

### 🏠 Base

This is the base ESLint configuration that is applicable to all projects. This includes a set of general rules for linting Javascript code, without any framework-specific exceptions.

#### 🪛 Usage

```js filename="eslint.config.js"
import config from "@incentro-ic/config-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...config,
  {
    ignores: [
      // Build output
      "dist/**",

      // Files in the root directory
      "*.*",
    ],
  },
]);
```

### 🦁 NestJS

This is the ESLint configuration for all [NestJS](https://nestjs.com/) projects. It extends [the base configuration](#-base) and adds rules and exceptions specific to NestJS projects. For example, it allow empty classes if they use decorators, because this is a common pattern in NestJS.

#### 🪛 Usage

```js filename="eslint.config.js"
export { default } from "@incentro-ic/config-eslint/nest";
```

> [!NOTE]
>
> By default, the NestJS ESLint config ignores files in the `dist` and root directory. If you need to extend this list of ignored files, take a look at [the usage example for the base config](#-base) for an example on how to add ignored directories.

### 🔼 Next.js

This is the ESLint configuration for all [Next.js](https://nextjs.org/) projects. It extends [the base configuration](#-base) and adds rules and exceptions specific to Next.js projects. For example, it adds [the Next.js ESLint plugin](https://nextjs.org/docs/app/api-reference/config/eslint) and allows default exports in files named `layout.tsx` and `page.tsx`.

#### 🪛 Usage

```js filename="eslint.config.js"
export { default } from "@incentro-ic/config-eslint/next";
```

> [!NOTE]
>
> By default, the Next.js ESLint config ignores files in the `dist`, `.next`, and root directory. If you need to extend this list of ignored files, take a look at [the usage example for the base config](#-base) for an example on how to add ignored directories.

### ⭐ Nextra

This is the ESLint configuration for all [Nextra](https://nextra.site/) projects. It extends [the Next.js configuration](#-nextjs) and adds rules and exceptions specific to Nextra projects. For example, it allows default exports in files named `_meta.tsx`.

#### 🪛 Usage

```js filename="eslint.config.js"
export { default } from "@incentro-ic/config-eslint/nextra";
```

> [!NOTE]
>
> By default, the Nextra ESLint config ignores files in the `dist`, `.next`, and root directory. If you need to extend this list of ignored files, take a look at [the usage example for the base config](#-base) for an example on how to add ignored directories.

### 🔴 React Router

This is the ESLint configuration for all [React Router](https://reactrouter.com/) projects. It extends [the base configuration](#-base) and adds rules and exceptions specific to React Router projects. For example, it allows default exports in files named `root.ts`, `routes.ts`, and other common React Router file names that require default exports. It also allows the "Params" abbreviation because it's commonly used by code generated by React Router.

#### 🪛 Usage

```js filename="eslint.config.js"
export { default } from "@incentro-ic/config-eslint/react-router";
```

> [!NOTE]
>
> By default, the React Router ESLint config ignores files in the `dist`, `.react-router`, and root directory. If you need to extend this list of ignored files, take a look at [the usage example for the base config](#-base) for an example on how to add ignored directories.
