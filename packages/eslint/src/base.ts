import type { Linter } from "eslint";
import { baseConfigs } from "./partials/base.js";
import { declarationFilesConfigs } from "./partials/declaration-files.js";
import { importsConfigs } from "./partials/imports.js";
import { indexFileConfigs } from "./partials/index-files.js";
import { prettierConfigs } from "./partials/prettier.js";
import { reactConfigs } from "./partials/react.js";
import { testFileConfigs } from "./partials/test-files.js";
import { typescriptConfigs } from "./partials/typescript.js";

const config: Linter.Config[] = [
  ...baseConfigs,
  ...typescriptConfigs,
  ...importsConfigs,
  ...reactConfigs,
  ...declarationFilesConfigs,
  ...indexFileConfigs,
  ...testFileConfigs,
  ...prettierConfigs,
];

export default config;
