import type { Linter } from "eslint";
import tseslint from "typescript-eslint";
import { JAVASCRIPT_FILES_GLOB } from "../globs.js";

export const typescriptConfigs: Linter.Config[] = [
  // https://github.com/typescript-eslint/typescript-eslint/issues/10899
  ...(tseslint.configs.strictTypeChecked as Linter.Config[]),
  ...(tseslint.configs.stylisticTypeChecked as Linter.Config[]),

  {
    name: "incentro-ic/typescript",
    files: JAVASCRIPT_FILES_GLOB,
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Enabling this rule does two things, 1) it cleans up our code by
      // requiring the use of boolean types in expressions and 2) prevents
      // errors using the common `expression && <Component />` syntax in JSX.
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

      // When using Typedoc, interfaces are preferred over types because they
      // are read and documented natively by Typedoc. Type aliases require the
      // `@interface` comment
      // (https://typedoc.org/documents/Tags._interface.html). Therefore, we
      // allow renaming interfaces by extending another interface and not
      // adding or removing any members.
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "always" },
      ],

      // We don't allow unnecessary conditions, expect for cases like
      // `while(true)` where the intention is clear.
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        { allowConstantLoopConditions: "only-allowed-literals" },
      ],

      // We generally don't allow returning void values, and require a separate
      // return statement instead. However, when using arrow function
      // shorthands, we have a tradeoff to make, because Prettier will format
      // wrapped arrow functions on three lines instead of one, greatly
      // reducing readability. In this specific case we allow arrow functions
      // to return void values and we rely on Typescript to avoid mistakes.
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        { ignoreArrowShorthand: true },
      ],

      // This rule encourages replacing explicit type assertions with non-null
      // assertions (`!`). It directly conflicts with @typescript-eslint/no-non-null-assertion,
      // which we intentionally keep enabled to avoid introducing subtle runtime
      // errors and hard-to-spot null assertion errors. However, there is a reason to
      // want to opt-in to non-null assertions in some cases, for example when
      // dealing with third-party libraries without proper types or when dealing
      // with data structures where the type system cannot easily express the
      // nullability. We disable this rule to allow explicit type
      // assertions in such cases.
      "@typescript-eslint/non-nullable-type-assertion-style": "off"
    },
  },
];
