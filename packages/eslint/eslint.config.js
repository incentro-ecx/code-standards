import { defineConfig } from "eslint/config";
import config from "./dist/index.js";

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
      // It's common for ESLint configs to be the default export
      "import/no-default-export": "off",
    },
  },
]);
