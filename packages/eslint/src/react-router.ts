import type { Linter } from "eslint";
import { globalIgnores } from "eslint/config";
import baseConfigs from "./base.js";
import { REACT_ABBREVIATION_REPLACEMENTS } from "./partials/react.js";

export const REACT_ROUTER_ABBREVIATION_REPLACEMENTS = {
  // Allow the use of "params" in React Router codebases, as it's common in
  // route files, and required by loaders.
  params: false,
};

const config: Linter.Config[] = [
  ...baseConfigs,

  {
    name: "incentro-ic/react-router",
    files: [
      "react-router.config.ts",
      "src/routes/**/*.{ts,tsx}",
      "src/{root,routes,entry.client,entry.server}.{ts,tsx}",
    ],
    rules: {
      // React Router requires default exports for a number of files.
      "import/no-default-export": "off",

      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            ...REACT_ABBREVIATION_REPLACEMENTS,
            ...REACT_ROUTER_ABBREVIATION_REPLACEMENTS,
          },
        },
      ],

      // Throwing Response and Redirect objects in loaders and actions is a
      // common pattern in React Router.
      "@typescript-eslint/only-throw-error": "off",
    },
  },

  globalIgnores(
    ["dist/**", "*.*", ".react-router/**"],
    "incentro-ic/react-router/ignore-directories",
  ),
];

export default config;
