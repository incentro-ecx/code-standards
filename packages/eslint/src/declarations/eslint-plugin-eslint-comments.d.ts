declare module "eslint-plugin-eslint-comments" {
  import type { Linter } from "eslint";

  const plugin: {
    configs: {
      recommended: {
        rules: Linter.RulesRecord;
      };
    };
  };

  export default plugin;
}
