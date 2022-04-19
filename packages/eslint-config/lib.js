module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react', 'jsx-a11y'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    './base.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // 'react/display-name': 'off',
    // 'import/no-useless-path-segments': 'off',
    // 'react/require-default-props': 'off',
    // 'react/function-component-definition': 'off',
    // 'react/no-unused-prop-types': 'warn',
    // 'react/jsx-props-no-spreading': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/jsx-no-useless-fragment': 'off',
    // 'react/jsx-no-bind': 'off',
    // 'react/no-array-index-key': 'warn',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // 'no-shadow': 'off',
    // 'no-unneeded-ternary': 'warn',
    // 'no-unused-expressions': 'off',
  },
};
