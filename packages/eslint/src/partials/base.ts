import cspell from "@cspell/eslint-plugin/recommended";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import eslint from "@eslint/js";
import type { Linter } from "eslint";
import unicorn from "eslint-plugin-unicorn";
import { JAVASCRIPT_FILES_GLOB } from "../globs.js";

export const baseConfigs: Linter.Config[] = [
  {
    name: "eslint/js/recommended",
    ...eslint.configs.recommended,
  },

  unicorn.configs.recommended,
  eslintComments.recommended,

  {
    name: "cspell",
    ...cspell,
  },

  {
    name: "incentro-ic/base",
    files: JAVASCRIPT_FILES_GLOB,
    rules: {
      // Prevent the common mistake of adding `console.log` in production code.
      "no-console": "error",

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

      // We allow the use of expiring TODO comments, but we don't ever want
      // CI / CD pipelines to start failing because it's a different day.
      "unicorn/expiring-todo-comments": "off",
    },
  },
];
