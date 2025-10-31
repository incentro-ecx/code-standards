import type { Linter } from "eslint";
import imports from "eslint-plugin-import";
import { JAVASCRIPT_FILES_GLOB } from "../globs.js";

export const importsConfigs: Linter.Config[] = [
  imports.flatConfigs.recommended,

  {
    name: "incentro-ic/declaration-files",
    files: JAVASCRIPT_FILES_GLOB,
    rules: {
      // Prefer named exports.
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",

      // Warn when importing `devDependencies` in production code.
      "import/no-extraneous-dependencies": "error",

      // Prevent exporting `var` or `let` variables.
      "import/no-mutable-exports": "error",
    },
  },
];
