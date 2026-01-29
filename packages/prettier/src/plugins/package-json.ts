import type { Plugin } from "prettier";
import babel from "prettier/parser-babel";
import sortPackageJson from "sort-package-json";

const parser = babel.parsers["json-stringify"];

export const parsers: Plugin["parsers"] = {
  "json-stringify": {
    ...parser,
    async preprocess(text, options) {
      if (parser.preprocess) {
        text = await parser.preprocess(text, options);
      }

      if (options.filepath.endsWith("package.json")) {
        text = sortPackageJson(text);
      }

      return text;
    },
  },
};
