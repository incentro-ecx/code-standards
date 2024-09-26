# Incentro ECX - ESLint

## 💫 Introduction

Shared [ESLint](https://eslint.org/) configurations for linting files. It enforces our code style, as well as adding additional checks via various plugins:

- [`typescript-eslint`](https://typescript-eslint.io/) - Typescript support for ESLint
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) - A set of useful (and very stict) ESLint rules.
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Checks around `import` / `export` statements.
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - Checks around React components.
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Checks around React hooks.
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility checks for JSX elements.
- [`eslint-plugin-eslint-comments`](https://github.com/mysticatea/eslint-plugin-eslint-comments) - Checks around comments disabling ESLint rules.

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D eslint @incentro-dc/eslint-config
```

You will need access to this repository, for more info read [this](../../docs/installing-from-this-repo.md).

## 🪛 Usage

Create an ESLint configuration file and re-export this configuration:

```js [eslint.config.js]
export config from "@incentro-dc/eslint-config";

export default [
  ...config,
  {
    ignores: [
      // Build output
      "dist/**",

      // Files in the root directory
      "*.*",
    ],
  },
];
```

> [!NOTE]
> This example uses the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) format.

## ⚙️ Configs

Next to a base configuration, we also provide a set of shared configurations for different types of projects:

### 🦖 Docusaurus

This is the base ESLint configuration for all Docusaurus projects. It extends the base configuration but turns off some rules that are not applicable to Docusaurus projects.

#### 🪛 Usage

```js [eslint.config.js]
import config from "@incentro-dc/eslint-config/docusaurus";

export default [
  ...config,
  {
    ignores: ["dist/**", ".docusaurus", "*.*"],
  },
];
```
