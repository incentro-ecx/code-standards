# @incentro-ic/config-typescript

## 2.0.0

### Major Changes

- Merged the original source of this repository (part of the `micro.nova` project) into this project. This includes **breaking** changes to various Typescript configs, updates their entrypoints, and removes the `docusaurus` config. In the merger the `react-router` Typescript wasn't copied because it was based on experimental RSC features for React Router. ([#8](https://github.com/incentro-ecx/code-standards/pull/8))

### Minor Changes

- Adds a default configuration for [Next.js](https://nextjs.org/) projects. ([#8](https://github.com/incentro-ecx/code-standards/pull/8))

## 1.0.1

### Patch Changes

- Updating packages that are candidates for Deprecation & dep cleanup

## 1.0.0

### Major Changes

- Release under @incentro-ecx organization ([#7](https://github.com/incentro-ecx/code-standards/pull/7))

## 0.2.0

### Minor Changes

- Remove external dependency on @tsconfig

## 0.1.0

### Minor Changes

- Refer to package for extension through path

# Changelog from @micro.nova/typescript

The original version of this package (which this is a fork off) was merged into this repository and released as version 2.0.0. Below is the changelog of all the versions from the original config:

# @micro.nova/typescript

## 0.5.1

### Patch Changes

- Use `rootDirs` instead of `typeRoots` for the `@micro.nova/typescript/react-router` Typescript config. ([#25](https://github.com/incentro-ecx/micro.nova/pull/25))

## 0.5.0

### Minor Changes

- A new [React Router](https://reactrouter.com/) is added. ([#24](https://github.com/incentro-ecx/micro.nova/pull/24))

- A new browser package Typescript config is added. ([#24](https://github.com/incentro-ecx/micro.nova/pull/24))

- The Node.js Typescript config now targets ES2024 and some ES2025 features, because those features [are supported in the LTS version](https://node.green/#ES2024). ([#24](https://github.com/incentro-ecx/micro.nova/pull/24))

### Patch Changes

- The Docusaurus Typescript config is simplified by using [`@docusaurus/tsconfig`](https://www.npmjs.com/package/@docusaurus/tsconfig). ([#24](https://github.com/incentro-ecx/micro.nova/pull/24))

## 0.4.0

### Minor Changes

- The `@micro.nova/typescript/package-node` now assumes you're targeting Node.js version 22 or higher. ([#22](https://github.com/incentro-ecx/micro.nova/pull/22))

- All `@micro.nova/typescript/package-*` configs now also emit [declaration maps](https://www.typescriptlang.org/tsconfig/#declarationMap) during a build. ([#22](https://github.com/incentro-ecx/micro.nova/pull/22))

## 0.3.1

### Patch Changes

- Updated dependencies. ([#20](https://github.com/incentro-ecx/micro.nova/pull/20))

## 0.3.0

### Minor Changes

- [BREAKING] Clean up exports for config imports. Use the shortened imports, e.g. `@micro.nova/typescript/package-react`. ([#14](https://github.com/incentro-ecx/micro.nova/pull/14))

## 0.2.2

### Patch Changes

- Update dependencies ([#13](https://github.com/incentro-ecx/micro.nova/pull/13))

## 0.2.1

### Patch Changes

- Updated dependencies ([#11](https://github.com/incentro-ecx/micro.nova/pull/11))

## 0.2.0

### Minor Changes

- Switch from bundler module resolution to nodenext module resolution ([#7](https://github.com/incentro-ecx/micro.nova/pull/7))

- Turn off `verbatimModuleSyntax` for Docusaurus projects as they're not ESM ([#7](https://github.com/incentro-ecx/micro.nova/pull/7))

## 0.1.0

### Minor Changes

- Initial release ([#6](https://github.com/incentro-ecx/micro.nova/pull/6))
