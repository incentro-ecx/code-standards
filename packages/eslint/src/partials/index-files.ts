import type { Linter } from "eslint";
import { INDEX_FILES_GLOB } from "../globs.js";

export const indexFileConfigs: Linter.Config[] = [
  {
    name: "incentro-ic/index-files",
    files: INDEX_FILES_GLOB,
    rules: {
      // We allow the index file to have more dependencies than the default
      "import/max-dependencies": "off",
    },
  },
];
