import type { Linter } from "eslint";
import nextConfig from "./next.js";

const config: Linter.Config[] = [
  ...nextConfig,

  {
    name: "incentro-ic/nextra",
    files: ["src/content/**/_meta.{ts,tsx}"],
    rules: {
      // Nextra requires default exports for page files.
      "import/no-default-export": "off",
    },
  },
];

export default config;
