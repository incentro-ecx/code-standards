declare module "eslint-plugin-react-hooks" {
  import type { Linter } from "eslint";

  const plugin: {
    configs: {
      recommended: { rules: Linter.RulesRecord };
    };
  };

  export default plugin;
}