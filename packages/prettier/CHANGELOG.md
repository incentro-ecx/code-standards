# @incentro-ic/config-prettier

## 3.0.0

### Major Changes

- Merged the original source of this repository (part of the `micro.nova` project) into this project. This includes an upgrade to the latest Prettier version, updates to its dependencies, and fixes compatibility with PNPM version 10. It also includes [a **breaking** upgrade of the `prettier-plugin-organize-imports` plugin when formatting with Vue](https://github.com/simonhaenisch/prettier-plugin-organize-imports/releases/tag/v4.0.0). ([#8](https://github.com/incentro-ecx/code-standards/pull/8))

## 1.0.3

### Patch Changes

- changing eslint to be inline with the AICV project

## 1.0.2

### Patch Changes

- Updating packages that are candidates for Deprecation & dep cleanup

## 1.0.0

### Major Changes

- Release under @incentro-ecx organization ([#7](https://github.com/incentro-ecx/code-standards/pull/7))

# Changelog from @micro.nova/prettier

The original version of this package (which this is a fork off) was merged into this repository and released as version 2.0.0. Below is the changelog of all the versions from the original config:

## 0.3.2

### Patch Changes

- Update dependencies. ([#23](https://github.com/incentro-ecx/micro.nova/pull/23))

## 0.3.1

### Patch Changes

- Remove [the new `@prettier/plugin-oxc` parser]((https://prettier.io/blog/2025/06/23/3.6.0#javascript) because it conflicts with the imports plugin. ([#21](https://github.com/incentro-ecx/micro.nova/pull/21))

## 0.3.0

### Minor Changes

- Use [the new `@prettier/plugin-oxc` parser](https://prettier.io/blog/2025/06/23/3.6.0#javascript) to improve performance (requires Prettier v3.6). Prettier version 3.6 is now added as a peer dependency. ([#20](https://github.com/incentro-ecx/micro.nova/pull/20))

### Patch Changes

- Updated dependencies. ([#20](https://github.com/incentro-ecx/micro.nova/pull/20))

## 0.2.1

### Patch Changes

- Use `require` to resolve Prettier plugins to fix config usage in VSCode's Prettier plugin ([#17](https://github.com/incentro-ecx/micro.nova/pull/17))

## 0.2.0

### Minor Changes

- Resolve Prettier plugins to a path to avoid relying on hoisting ([#13](https://github.com/incentro-ecx/micro.nova/pull/13))

### Patch Changes

- Update dependencies ([#13](https://github.com/incentro-ecx/micro.nova/pull/13))

## 0.1.1

### Patch Changes

- Updated dependencies ([#11](https://github.com/incentro-ecx/micro.nova/pull/11))

## 0.1.0

### Minor Changes

- Initial release ([#6](https://github.com/incentro-ecx/micro.nova/pull/6))
