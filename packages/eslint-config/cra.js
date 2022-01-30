module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "plugin:react/recommended", "prettier"],
  plugins: ["react", "@typescript-eslint"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "warn",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
