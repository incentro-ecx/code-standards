import type { Linter } from "eslint";
import { globalIgnores } from "eslint/config";
import baseConfigs from "./base.js";

const config: Linter.Config[] = [
  ...baseConfigs,

  {
    name: "incentro-ic/nest",
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      // In NestJS it's common to define everything using class decorators,
      // which often leads to empty class bodies. To accommodate this pattern,
      // we allow extraneous classes if they are decorated.
      "@typescript-eslint/no-extraneous-class": [
        "error",
        { allowWithDecorator: true },
      ],
    },
  },

  globalIgnores(["dist/**", "*.*"], "incentro-ic/nest/ignore-directories"),
];

export default config;
