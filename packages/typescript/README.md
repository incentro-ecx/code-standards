# Incentro IC - Code Standards - Typescript

## 💫 Introduction

This package provides a set of shared [Typescript](https://www.typescriptlang.org/) configuration files that can be used across different projects.

- [🏠 Base](#-base) - `@incentro-ic/typescript/base`
- [📦 App - Next.js](#-app---next) - `@incentro-ic/typescript/app-next`
- [📦 Package](#-package) - `@incentro-ic/typescript/package`
- [🌎 Package - Browser](#-package---browser) - `@incentro-ic/typescript/package-browser/`
- [🟩 Package - Node](#-package---node) - `@incentro-ic/typescript/package-node/`
- [⚛️ Package - React](#%EF%B8%8F-package---react) - `@incentro-ic/typescript/package-react`

## 💾 Installation

To install the package, use the following command:

```bash
pnpm add -D typescript @incentro-ic/typescript
```

## 🪛 Usage

After installing the package you can use the provided configuration as a basis by using [the `extends` keyword](https://www.typescriptlang.org/tsconfig#extends) in your `tsconfig.json`.

Here's an example:

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript"
}
```

> [!NOTE]
>
> The configuration files do not include any [`includes`](https://www.typescriptlang.org/tsconfig#include), [`files`](https://www.typescriptlang.org/tsconfig#files), [`exclude`](https://www.typescriptlang.org/tsconfig#exclude) or [`compilerOptions.outDir`](https://www.typescriptlang.org/tsconfig#outDir) options. You will need to add these options according to your project's requirements.

## ⚙️ Configs

### 🏠 Base

This is the base Typescript configuration that is applicable to all projects. The settings in this configuration are primarily related to the strictness of Typescript and should rarely be overridden as they do not affect the output or the compilation target.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript"
}
```

### 🔼 App - Next.js

This is the Typescript configuration for all Next.js projects. It extends [the base configuration](#-base) and adds settings that are related to working with React and Next.js' Typescript plugin and type helpers.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript/app-next"
}
```

### 📦 Package

This is the base Typescript configuration for all projects that are meant to be published as a package and do not specifically target the browser or a Node.js environment. It extends [the base configuration](#-base) and adds settings that are related to the output of the Typescript compiler.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript/package"
}
```

### 🌎 Package - Browser

This is the Typescript configuration for all projects that are meant to be published as package targeting browser environments. It extends [the package configuration](#-package) and adds settings that are specific to browser environments, like enabling types for methods only available in DOM environments. It targets the latest versions of most major browsers.

> [!IMPORTANT]
>
> This config [disables file emission by the Typescript compiler](https://www.typescriptlang.org/tsconfig/#noEmit) as it is expected that you'll be using a bundler to transform the source files for use in browser environments.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript/package-browser"
}
```

### 🟩 Package - Node

This is the Typescript configuration for all projects that are meant to be published as Node.js packages. It extends [the package configuration](#-package) and adds settings that are related to Node.js, specifically the LTS version.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript/package-node"
}
```

### ⚛️ Package - React

This is the Typescript configuration for all projects that are meant to be published as React packages. It extends [the browser package configuration](#-package---browser) and adds settings that are related to interpreting JSX.

> [!IMPORTANT]
>
> This config [disables file emission by the Typescript compiler](https://www.typescriptlang.org/tsconfig/#noEmit) as it is expected that you'll be using a bundler to transform the source files for use in browser environments.

#### 🪛 Usage

```json filename="tsconfig.json"
{
  "extends": "@incentro-ic/typescript/package-react"
}
```
