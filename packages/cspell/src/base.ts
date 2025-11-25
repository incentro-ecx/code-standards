import type { CSpellUserSettings } from "@cspell/cspell-types";

const baseConfig: CSpellUserSettings = {
  version: "0.2",
  language: "en",
  words: ["incentro"],
  dictionaries: [
    "typescript",
    "node",
    "html",
    "css",
    "fonts",
    "filetypes",
    "npm",
  ],
};

export default baseConfig;
