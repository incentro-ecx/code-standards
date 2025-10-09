# Incentro IC - Code Standards - Prettier

## 💫 Introduction

A shared [Prettier](https://prettier.io/) configuration for formatting files. We use the base Prettier style (as mentioned in our [code style](https://incentro-ecx.github.io/code-standards/style-guide)) and add two plugins:

- [Organize Imports](https://www.npmjs.com/package/prettier-plugin-organize-imports) - Sorts and cleans imports.
- [Package.json](https://npmjs.com/package/prettier-plugin-packagejson) - Sorts `package.json` files.

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D prettier @incentro-ic/prettier-config
```

## 🪛 Usage

Create a Prettier configuration file and re-export this configuration:

```js [prettier.config.js]
export { default } from "@incentro-ic/prettier-config";
```

Then, add a script to your `package.json` file to run Prettier:

```json [package.json]
{
  "scripts": {
    "format:prettier": "prettier --write . --cache",
    "lint:prettier": "prettier --check . --cache"
  }
}
```
