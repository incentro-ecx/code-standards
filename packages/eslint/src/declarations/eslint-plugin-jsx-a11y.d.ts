declare module "eslint-plugin-jsx-a11y" {
  import type { Linter } from "eslint";

  const plugin: {
    configs: {
      recommended: { rules: Linter.RulesRecord };
    };
  };

  export default plugin;
}
