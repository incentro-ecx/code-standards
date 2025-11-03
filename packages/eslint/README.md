# Incentro IC - Code Standards - ESLint

## 💫 Introduction

Shared [ESLint](https://eslint.org/) configurations for linting files. It enforces our code style, as well as adding additional checks via various plugins:

- [`typescript-eslint`](https://typescript-eslint.io/) - Typescript support for ESLint
- [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) - A set of useful (and very stict) ESLint rules.
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) - Checks around `import` / `export` statements.
- [`eslint-plugin-react`](https://github.com/jsx-eslint/eslint-plugin-react) - Checks around React components.
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Checks around React hooks.
- [`eslint-plugin-jsx-a11y`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - Accessibility checks for JSX elements.
- [`@eslint-community/eslint-plugin-eslint-comments`](https://github.com/eslint-community/eslint-plugin-eslint-comments) - Checks around comments disabling ESLint rules.
- [`@vitest/eslint-plugin`](https://github.com/vitest-dev/eslint-plugin-vitest) - Checks around Vitest test files.
- [`@cspell/eslint-plugin](https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin) - Checks spelling and grammar.

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D eslint @incentro-ic/eslint-config
```

## 🪛 Usage

Create an ESLint configuration file and re-export this configuration:

```js [eslint.config.js]
export config from "@incentro-ic/eslint-config";

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

### ✏️ Adding spell checking

The ESLint config uses [an ESLint plugin](https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin) for [CSpell](https://cspell.org/). If it detects [a CSpell config file](https://cspell.org/docs/Configuration) it will use that file to spell check the codebase. Example:

```json [cspell.config.json]
{
  "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
  "version": "0.2",
  "language": "en",
  "words": ["incentro"]
}
```
