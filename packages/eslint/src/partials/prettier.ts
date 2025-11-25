import type { Linter } from "eslint";
import prettier from "eslint-config-prettier/flat";

export const prettierConfigs: Linter.Config[] = [
  {
    ...prettier,
    name: "prettier",
  },
];
