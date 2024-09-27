import type { Linter } from "eslint";

const INDEX_FILES_GLOB = ["**/index.ts"];

export const indexFilesOverride: Linter.Config = {
  files: INDEX_FILES_GLOB,
  rules: {
    // We allow the index file to have more dependencies than the default
    "import-x/max-dependencies": "off",
  },
};
