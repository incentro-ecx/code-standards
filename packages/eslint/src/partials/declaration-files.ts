import type { Linter } from "eslint";
import { DECLARATION_FILES_GLOB } from "../globs.js";

export const declarationFilesConfigs: Linter.Config[] = [
  {
    name: "incentro-ic/declaration-files",
    files: DECLARATION_FILES_GLOB,
    rules: {
      // We can't control the export type of external modules, so we also can't
      // control whether they use default exports or not.
      "import/no-default-export": "off",
    },
  },
];
