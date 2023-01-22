module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['standard-with-typescript', 'plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended', 'prettier'],
  overrides: [
    {
      files: ['./src/env.d.ts'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'astro/no-set-html-directive': 'error',
        'astro/no-set-text-directive': 'error',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro'],
  },
  plugins: ['import', 'unused-imports'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
        'newlines-between': 'never',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
