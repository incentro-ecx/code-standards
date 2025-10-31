import type { Linter } from "eslint";
import jsxAccessibility from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

const REACT_FILES_GLOB = ["**/*.{jsx,tsx}"];

export const reactConfigs: Linter.Config[] = [
  {
    // Add a name to the config for better identification in ESLint Config Inspector
    name: "react-hooks/recommended-latest",
    ...reactHooks.configs.flat["recommended-latest"],
  },

  {
    files: REACT_FILES_GLOB,
    ...jsxAccessibility.flatConfigs.recommended,
  },

  {
    // Add a name to the config for better identification in ESLint Config Inspector
    name: "react/jsx-runtime",

    // Only run on files that use JSX or TSX syntax
    files: REACT_FILES_GLOB,

    ...react.configs.flat["jsx-runtime"],
  },

  {
    name: "incentro-ic/react",
    files: REACT_FILES_GLOB,
    rules: {
      // When using React's memo we do want to allow named functions because
      // they will automatically show up with component names in the debug
      // tools.
      "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],

      // Enforce components to be small atoms by limiting their JSX component
      // depth.
      "react/jsx-max-depth": [
        "warn",
        {
          max: 6,
        },
      ],
    },
  },
];
