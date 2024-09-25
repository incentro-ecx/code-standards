# Incentro ECX - Typescript

## 💫 Introduction

This package provides a set of shared [Typescript](https://www.typescriptlang.org/) configuration files that can be used across different projects.

- [🏠 Base](#-base) - `@incentro-ecx/typescript-config/configs/base/tsconfig.json`
- [📦 Package](#-package) - `@incentro-ecx/typescript-config/configs/package/tsconfig.json`
- [🟩 Package - Node](#-package---node) - `@incentro-ecx/typescript-config/configs/package-node/tsconfig.json`
- [⚛️ Package - React](#%EF%B8%8F-package---react) - `@incentro-ecx/typescript-config/configs/package-react/tsconfig.json`
- [🦖 Docusaurus](#-docusaurus) - `@incentro-ecx/typescript-config/configs/docusaurus/tsconfig.json`

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D typescript @incentro-ecx/typescript-config
```

## 🪛 Usage

After installing the package you can use the provided configuration as a basis by using [the `extends` keyword](https://www.typescriptlang.org/tsconfig#extends) in your `tsconfig.json`.

Here's an example:

```json
{
  "extends": "@micro.nova/typescript-config/configs/base/tsconfig.json"
}
```

> [!NOTE]
> The configuration files do not include any [`includes`](https://www.typescriptlang.org/tsconfig#include), [`files`](https://www.typescriptlang.org/tsconfig#files), [`exclude`](https://www.typescriptlang.org/tsconfig#exclude) or [`compilerOptions.outDir`](https://www.typescriptlang.org/tsconfig#outDir) options. You will need to add these options according to your project's requirements.

## ⚙️ Configs

### 🏠 Base

This is the base Typescript configuration that is applicable to all projects. The settings in this configuration are primarily related to the strictness of TypeScript and should rarely be overridden as they do not affect the output or the compilation target.

#### 🪛 Usage

```json
{
  "extends": "@micro.nova/typescript/configs/base/tsconfig.json"
}
```

### 📦 Package

This is the base Typescript configuration for all projects that are meant to be published as a package. It extends the base configuration and adds settings that are related to the output of the TypeScript compiler.

#### 🪛 Usage

```json
{
  "extends": "@micro.nova/typescript/configs/package/tsconfig.json"
}
```

### 🟩 Package - Node

This is the Typescript configuration for all projects that are meant to be published as Node.js packages. It extends the package configuration and adds settings that are related to Node.js, specifically the LTS version.

#### 🪛 Usage

```json
{
  "extends": "@micro.nova/typescript/configs/package-node/tsconfig.json"
}
```

### ⚛️ Package - React

This is the Typescript configuration for all projects that are meant to be published as React packages. It extends the package configuration and adds settings that are related to interpreting JSX and adding DOM types.

#### 🪛 Usage

```json
{
  "extends": "@micro.nova/typescript/configs/package-react/tsconfig.json"
}
```

### 🦖 Docusaurus

This is the Typescript configuration for all Docusaurus projects. It's based on the settings in the [`@docusaurus/tsconfig`](https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-tsconfig/tsconfig.json) package.

#### 🪛 Usage

```json
{
  "extends": "@micro.nova/typescript/configs/docusaurus/tsconfig.json"
}
```

> [!IMPORTANT]
> To be able to use this config, you need to install the `@types/node`, `@docusaurus/module-type-aliases` and `@docusaurus/theme-classic` package:
>
> ```bash
> pnpm add -D @types/node @docusaurus/module-type-aliases @docusaurus/theme-classic
> ```