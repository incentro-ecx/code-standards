declare module "eslint-plugin-unicorn" {
  import type { Linter } from "eslint";

  const plugin: {
    configs: {
      "flat/recommended": Linter.Config;
    };
  };

  export default plugin;
}
