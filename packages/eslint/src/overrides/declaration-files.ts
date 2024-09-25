import type { Linter } from "eslint";

const DECLARATION_FILES_GLOB = ["**/*.d.ts", "**/*.d.tsx"];

export const declarationFilesOverride: Linter.Config = {
  files: DECLARATION_FILES_GLOB,
  rules: {
    // We can't control the export type of external modules, so we also can't
    // control whether they use default exports or not.
    "import/no-default-export": "off",
  },
};