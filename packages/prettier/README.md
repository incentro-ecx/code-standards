# Incentro ECX - Prettier

## 💫 Introduction

A shared [Prettier](https://prettier.io/) configuration for formatting files. We use the base Prettier style (as mentioned in our [code style](../../docs/styleguide)) and add two plugins:

- [Organize Imports](https://www.npmjs.com/package/prettier-plugin-organize-imports) - Sorts and cleans imports.
- [Package.json](https://npmjs.com/package/prettier-plugin-packagejson) - Sorts `package.json` files.

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D prettier @incentro-dc/prettier-config
```

You will need access to this repository, for more info read [this](../../docs/installing-from-this-repo.md).

## 🪛 Usage

Create a Prettier configuration file and re-export this configuration:

```js [prettier.config.js]
export { default } from "@incentro-dc/prettier-config";
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
