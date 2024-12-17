import config from "./dist/index.js";

export default [
  ...config,
  {
    ignores: ["dist/**", "*.*"],
  },
  {
    rules: {
      'unicorn/expiring-todo-comments': 'off',
    },
  }
];
