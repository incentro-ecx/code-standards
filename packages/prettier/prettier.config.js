import { createRequire } from "node:module";

// We use require with `require.resolve` to resolve the paths to the plugins
// because we use PNPM which makes the plugins unavailable to packages except
// for the package which has them in its dependencies (so
// `@incentro-ic/prettier`).
//
// `require.resolve` fixes this by passing a path to the plugin which the
// Prettier VSCode extension can import directly.
//
// The reason we don't use `import.meta.resolve` is because the Prettier VSCode
// extension uses `require` internally, and paths resolved with
// `import.meta.resolve` create paths that cannot be read by `require`.
//
// The reason we don't just import the plugin sources directly and pass them as
// objects, is because the Prettier VSCode extension uses the VSCode plugin
// bridge to pass information about the config to the worker that executes the
// Prettier command, and the plugin objects cannot be serialized.
//
// https://github.com/prettier/prettier/discussions/15167#discussioncomment-10195922
const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson",
  ].map(require.resolve),
};
