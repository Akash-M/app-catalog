module.exports = {
  extends: ['kirinus'], // This is an open source eslint definition.
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    jest: {
      version: 'latest',
    },
    react: {
      version: 'latest',
    },
  },
  ignorePatterns: ['**/storybook-static/*.js'],
  rules: {
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'off',
    'ordered-imports/ordered-imports': [
      'error',
      {
        'group-ordering': [
          {
            name: 'current workspace',
            match: '^(\\$|#|\\.\\.?)/',
            order: 40,
          },
          {
            name: 'monorepo packages',
            match: '^(lib|ui)-.*/src',
            order: 30,
          },
          { name: 'third party', match: '.*', order: 20 },
          {
            name: 'framework libraries',
            match: '^react.*',
            order: 10,
          },
        ],
      },
    ],
    'eslint-comments/disable-enable-pair': 'off',
    'jsx-a11y/no-onchange': 'off',
    'no-self-assign': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: false,
        reservedFirst: true,
      },
    ],
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-null': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    /**
     * Jest
     */
    {
      files: ['**/*.spec.ts', '**/*.test.ts', '**/test/**'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'unicorn/no-array-callback-reference': 'off',
      },
    },
  ],
};
