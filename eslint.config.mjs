import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          args: "after-used",
        },
      ],
      "no-process-exit": "off",
      "prefer-const": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-template": "error",
      "object-shorthand": "error",
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true,
        },
      ],

      "no-async-promise-executor": "error",
      "no-await-in-loop": "warn",
      "require-await": "off",
      "no-return-await": "off",
      "prefer-promise-reject-errors": "error",

      "eqeqeq": ["error", "always", { null: "ignore" }],
      "curly": ["error", "all"],
      "no-throw-literal": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "radix": "error",
      "yoda": "error",

      "arrow-body-style": ["warn", "as-needed"],
      "arrow-spacing": "error",
      "no-duplicate-imports": "error",
      "no-useless-computed-key": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
    },
  },

  prettier,

  {
    ignores: [
      "node_modules/**",
      "coverage/**",
      "dist/**",
      "build/**",
      "lib/**",
      "*.config.js",
    ],
  },
];

