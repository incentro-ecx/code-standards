import config from "@incentro-ic/config-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...config,
  {
    name: "ignore-dist-and-root",
    ignores: ["dist/**", "*.*"],
  },
  {
    name: "allow-default-exports",
    files: ["**/*.js", "**/*.ts"],
    rules: {
      // It's common for Cspell configs to be the default export
      "import/no-default-export": "off",
    },
  },
]);
