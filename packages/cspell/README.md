# Incentro IC - Code Standards - CSpell

## 💫 Introduction

Shared [CSpell](https://cspell.org/) configuration for checking spelling mistakes. It integrates with our [ESLint config](../eslint/README.md), so adding a CSpell config file automatically checks for spelling mistakes using ESLint. It's also recommended to use the [Code Spell Checker VSCode extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) to highlight spelling mistakes in files ESLint doesn't cover (like Markdown files).

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D @incentro-ic/config-cspell
```

## 🪛 Usage

Create [a CSpell configuration file](https://cspell.org/docs/Configuration) (e.g. `cspell.config.js`) and re-export this configuration:

```js filename="cspell.config.js"
export { default } from "@incentro-ic/config-cspell";
```

### 💅 Customization

By default the configuration allows for the use of the word "incentro", as well as enabling some [dictionaries](https://cspell.org/docs/dictionaries) common for Typescript projects (see [the source](./src/base.ts) for a full list of added dictionaries).

If you want to customize the configuration, be sure to spread the existing values in the config to merge them:

```js filename="cspell.config.js"
import config from "@incentro-ic/config-cspell";

export default {
  ...config,
  words: [...config.words, "flubbernator"],
};
```

### 🇳🇱 Accepting Dutch words

By default the configuration will only allow the use of English words, since this is most common on our code bases. However, this will result in warnings when you use Dutch words in strings and other constants. To allow the use of Dutch words you first have to install the Dutch language dictionary:

```bash
pnpm add -D @cspell/dict-nl-nl
```

Then, you have to extend the CSpell config to import the Dutch language dictionary and accept the Dutch language:

```js filename="cspell.config.js"
import config from "@incentro-ic/config-cspell";

export default {
  ...config,
  import: ["@cspell/dict-nl-nl/cspell-ext.json"],
  language: "en,nl",
};
```

> [!NOTE]
>
> This will of course also work for other locales besides Dutch. Just make sure you install the right dictionary and the right language codes.

> [!WARNING]
>
> Even though this will allow the use of Dutch words, you should never use Dutch words when naming variables, functions, classes, etc.
