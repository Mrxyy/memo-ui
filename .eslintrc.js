module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "standard",
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  // add your custom rules here
  rules: {
    "getter-return": ["error", { allowImplicit: true }],
    semi: ["error", "always"],
    "no-extra-semi": 0,
    "no-var": "error",
    "no-useless-escape": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false
        }
      }
    ],
    quotes: ["error", "double", { allowTemplateLiterals: true, avoidEscape: true }],
    "space-before-function-paren": 0,
    "no-duplicate-imports": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
