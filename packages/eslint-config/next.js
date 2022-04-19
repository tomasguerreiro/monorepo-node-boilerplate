module.exports = {
  extends: ['plugin:react/recommended', 'next', './base.js'],
  plugins: ['react'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
