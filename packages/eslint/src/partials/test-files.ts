import vitest from "@vitest/eslint-plugin";
import type { ESLint, Linter } from "eslint";

const TEST_FILES_GLOB = ["**/*.test.ts", "**/*.test.tsx"];

export const testFileConfigs: Linter.Config[] = [
  {
    name: "incentro-ic/test-files",
    files: TEST_FILES_GLOB,
    plugins: {
      // The Vitest ESLint plugin should fix its types
      // https://github.com/vitest-dev/eslint-plugin-vitest/issues/759
      vitest: vitest as unknown as ESLint.Plugin,
    },
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
    rules: {
      ...vitest.configs.recommended.rules,

      // Force the use of `it` instead of `test` in test files.
      "vitest/consistent-test-it": [
        "error",
        { fn: "it", withinDescribe: "it" },
      ],

      // Force the use of `vi` instead of `vitest` in test files.
      "vitest/consistent-vitest-vi": "error",

      // Avoid the use of alias methods and prefer the original methods.
      "vitest/no-alias-methods": "error",

      // Avoid using `expect` in e.g. if-statements, as it's often a sign a
      // test is attempting to cover too much.
      "vitest/no-conditional-expect": "error",

      // Using conditionals in tests is often a sign that the test is
      // attempting to cover too much.
      "vitest/no-conditional-in-test": "error",

      // Tests should run predictably, and wrapping tests in conditionals can
      // lead to flaky tests.
      "vitest/no-conditional-tests": "error",

      // Using `it.only` is fine, but only when testing locally. We add this
      // rule to prevent merging focused tests into the main branch.
      "vitest/no-focused-tests": "error",

      // We prefer writing asynchronous tests over using the `done` callback.
      "vitest/no-done-callback": "error",

      // Snapshots should not rely on string interpolation as it can lead to
      // flaky tests.
      "vitest/no-interpolation-in-snapshots": "error",

      // We prefer all `expect` calls to be wrapped in an `it` block.
      "vitest/no-standalone-expect": "error",

      // Return statements in test files are a sign that someone made a mistake
      // as it's not possible to return a value in a test.
      "vitest/no-test-return-statement": "error",

      // We like readable tests, so we enforce a consistent padding around
      // various vitest constructs.
      "vitest/padding-around-all": "error",

      // Forces human readable tests with numbers.
      "vitest/prefer-comparison-matcher": "error",

      // Force a consistent order of test hooks.
      "vitest/prefer-hooks-in-order": "error",

      // Prefer all test hooks to be at the top of the file.
      "vitest/prefer-hooks-on-top": "error",

      // Avoid typos in test titles.
      "vitest/prefer-lowercase-title": ["error", { ignore: ["describe"] }],

      // Prefer e.g. `.mockResolvedValue()` over
      // `.mockReturnValue(Promise.resolve())`.
      "vitest/prefer-mock-promise-shorthand": "error",

      // Avoid weird things like `expectTypeOf({}).toBe(Object)`.
      "vitest/prefer-to-be-object": "error",

      // Prefer the readable `expect(...).toContain()` to check if an array
      // contains a value.
      "vitest/prefer-to-contain": "error",

      // Prefer the readable `expect(...).toHaveLength()` to check if an array
      // has a specific length.
      "vitest/prefer-to-have-length": "error",

      // Prefer `vi.mocked()` over `as Mock`.
      "vitest/prefer-vi-mocked": "error",

      // Avoid writing setup and teardown logic outside of test hooks.
      "vitest/require-hook": "error",

      // Avoid expects in promises that are not awaited as they can be skipped
      // unexpectedly.
      "vitest/valid-expect-in-promise": "error",

      // Allow the usage of unbound methods in cases like
      // `expect(instance.method).toHaveBeenCalled()`.
      "@typescript-eslint/unbound-method": "off",

      // We are less strict when it comes to any type usage in test files, as
      // mocks and test utilities often require or use the `any` type.
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
];
