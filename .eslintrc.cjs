module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    module: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.cjs',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.cjs', './.backup/*'],
  rules: {
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'indent': ['error', 'tab'],
    'no-tabs': ['error', { allowIndentationTabs: true }]
  },
};
