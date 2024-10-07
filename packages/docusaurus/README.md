# Incentro ECX - Docusaurus

## 💫 Introduction

A shared Docusaurus configuration for creating documentation sites. It sets some defaults around presets, Webpack loaders, locales, etc.

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D prettier @incentro-ecx/docusaurus-config
```

You will need access to this repository, for more info read [this](../../docs/installing-from-this-repo.md).

## 🪛 Usage

This module exports a function called `createConfig` which accepts two parameters:

- `config` - A regular Docusaurus configuration object, but without the defaults that this module provides. You can find all defaults this module sets in [the source code](./src/create-config.ts).
- `presetConfig` - A configuration object for the Docusaurus [classic preset](https://docusaurus.io/docs/using-plugins#docusauruspreset-classic).

To use this method, create a Docusaurus configuration file and use `createConfig`:

```ts [docusaurus.config.ts]
import {
  createConfig,
  type Config,
  type PresetConfig,
} from "@incentro-ecx/docusaurus-config";

const config: Config = {
  // Docusaurus configuration without defaults
};

const presetConfig: PresetConfig = {
  // Config for Docusaurus' classic preset
};

export default createConfig(config, presetConfig);
```
