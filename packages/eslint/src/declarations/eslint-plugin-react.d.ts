declare module "eslint-plugin-react" {
  import type { Linter } from "eslint";

  const plugin: {
    configs: {
      recommended: { rules: Linter.RulesRecord };
      "jsx-runtime": { rules: Linter.RulesRecord };
    };
  };

  export default plugin;
}
