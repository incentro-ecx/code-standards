# Incentro IC - Code Standards - CSpell

## 💫 Introduction

Shared [CSpell](https://cspell.org/) configuration for checking spelling mistakes. It integrates with our [ESLint config](../eslint/README.md), so adding a CSpell config file automatically checks for spelling mistakes using ESLint. It's also recommended to use the [Code Spell Checker VSCode extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) to highlight spelling mistakes in files ESLint doesn't cover (like Markdown files).

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D @incentro-ic/config-cspell
```

## 🪛 Usage

Create an CSPell configuration file and re-export this configuration:

```js [cspell.config.js]
export { default } from "@incentro-ic/config-cspell";
```

### 💅 Customization

By default the configuration allows for the use of the word "incentro", as well as enabling some [dictionaries](https://cspell.org/docs/dictionaries) common for Typescript projects (see [the source](./src/base.ts) for a full list of added dictionaries).

If you want to customize the configuration, be sure to spread the existing values in the config to merge them:

```js [cspell.config.js]
import config from "@incentro-ic/config-cspell";

export default {
  ...config,
  words: [...config.words, "flubbernator"],
};
```
