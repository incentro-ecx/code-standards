declare module "eslint-plugin-import" {
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