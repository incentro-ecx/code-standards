import javascript from "@eslint/js";
import type { Linter } from "eslint";
import prettier from "eslint-config-prettier";
import eslintComments from "eslint-plugin-eslint-comments";
import imports from "eslint-plugin-import";
import jsxAccessibility from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unicorn from "eslint-plugin-unicorn";
import typescript from "typescript-eslint";

import { declarationFilesOverride } from "../overrides/declaration-files.js";
import { indexFilesOverride } from "../overrides/index-files.js";

const typescriptConfigs = typescript.configs.recommended as Linter.Config[];

const config: Linter.Config[] = [
  unicorn.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: imports,
      "eslint-comments": eslintComments,
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        project: true,
      },
    },
    rules: {
      ...javascript.configs.recommended.rules,
      ...imports.configs.recommended.rules,
      ...eslintComments.configs.recommended.rules,

      // Prevent the common mistake of adding `console.log` in production code.
      "no-console": "error",

      // Prefer named exports.
      "import/prefer-default-export": "off",
      "import/no-default-export": "error",

      // Warn when importing `devDependencies` in production code.
      "import/no-extraneous-dependencies": "error",

      // Prevent exporting `var` or `let` variables.
      "import/no-mutable-exports": "error",

      // We allow Array#reduce because sometimes it's the most readable syntax.
      "unicorn/no-array-reduce": "off",

      // ❤️ null
      "unicorn/no-null": "off",

      // This conflicts with TypeScript settings around strict undefined
      // checks.
      "unicorn/no-useless-undefined": "off",

      // The idea behind this rule is great, but event emitters have the added
      // benefit of strongly typed events and arguments, while this would
      // require additional effort to do with event targets.
      // Whenever we need Deno / browser compatibility we can always make the
      // switch as it should be pretty low-effort.
      "unicorn/prefer-event-target": "off",

      // This conflicts with the requirement from Typescript to enforce the use
      // of objects when spreading. -> ts(2698)
      "unicorn/no-useless-fallback-in-spread": "off",

      // Enabling this rule does two things, 1) it cleans up our code by
      // requiring the use of boolean types in expressions and 2) prevents errors
      // using the common `expression && <Component />` syntax in JSX.
      //
      // We do allow the use of falsy booleans (so boolean | null | undefined)
      // because that typecasting always makes sense and doesn't cause leaked
      // renders.
      //
      // https://github.com/jsx-eslint/eslint-plugin-react/issues/2073#issuecomment-744040384
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],

      // Since Typescript 5.0, it doesn't warn you when you don't specify the
      // type keyword in `import type { Type } from "x"` when importing a type
      // only. We add this rule because we want to avoid accidentally importing
      // any files that contain side effects.
      //
      // We want this to be enforced regardless of the `verbatimModuleSyntax`
      // setting which controls what happens when importing types from modules
      // with side effects.
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxAccessibility,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxAccessibility.configs.recommended.rules,

      // When using React's memo we do want to allow named functions because they
      // will automatically show up with component names in the debug tools.
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
  ...typescriptConfigs,
  prettier,
  declarationFilesOverride,
  indexFilesOverride,
];

// REASON: We want to provide this config as a default export to users of this
// package, as it's a common pattern in the ecosystem of ESLint.
// eslint-disable-next-line import/no-default-export
export default config;