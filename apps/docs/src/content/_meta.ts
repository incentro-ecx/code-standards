import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  "*": {
    theme: { copyPage: false, pagination: false },
  },
  index: {
    type: "page",
    display: "hidden",
    title: "Incentro IC - Code Standards",
    theme: {
      copyPage: false,
      toc: false,
      timestamp: false,
      typesetting: "article",
    },
  },
  configs: {
    type: "menu",
    items: {
      cspell: "CSpell",
      eslint: "ESLint",
      prettier: "Prettier",
      typescript: "Typescript",
    },
  },
  "style-guide": { type: "page", title: "Style Guide" },
};

export default meta;
