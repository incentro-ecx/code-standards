import nextPlugin from "@next/eslint-plugin-next";
import type { Linter } from "eslint";
import { globalIgnores } from "eslint/config";
import baseConfigs from "./base.js";
import { REACT_ABBREVIATION_REPLACEMENTS } from "./partials/react.js";

export const NEXT_ABBREVIATION_REPLACEMENTS = {
  // Allow the use of "params" in Next.js codebases, as it's common in route
  // segment files, and required by exports like "generateStaticParams".
  params: false,
};

const config: Linter.Config[] = [
  ...baseConfigs,

  nextPlugin.configs["core-web-vitals"],

  {
    name: "incentro-ic/next",
    files: ["src/app/**/{layout,page}.{ts,tsx}"],
    rules: {
      // Next.js requires default exports for page files.
      "import/no-default-export": "off",

      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            ...REACT_ABBREVIATION_REPLACEMENTS,
            ...NEXT_ABBREVIATION_REPLACEMENTS,
          },
        },
      ],
    },
  },

  globalIgnores(
    ["dist/**", "*.*", ".next/**"],
    "incentro-ic/next/ignore-directories",
  ),
];

export default config;
