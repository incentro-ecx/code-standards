import type { Linter } from "eslint";
import base from "./base.js";

const config: Linter.Config[] = [
  ...base,
  {
    rules: {
      // Docusaurus makes great use of Webpack aliases, resulting in a lot of
      // false positives. We'll turn of the lint rule and rely on Typescript and
      // build step to catch these errors.
      "import/no-unresolved": "off",
    },
  },
  {
    files: ["src/pages/**/*.tsx"],
    rules: {
      // Default exports have a special meaning in Docusaurus pages, we have
      // to use them.
      "import/no-default-export": "off",
    },
  },
];

// REASON: We want to provide this config as a default export to users of this
// package as it's a common pattern in the ecosystem of ESLint.
// eslint-disable-next-line import/no-default-export
export default config;
