module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
    'stylelint-config-standard',
  ],
  ignoreFiles: ['**/dist/**', '**/.yarn/**'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': null,
    'block-no-empty': null,
    'block-opening-brace-space-before': null,
    'declaration-colon-newline-after': null,
    'function-linear-gradient-no-nonstandard-direction': null,
    'function-name-case': null,
    indentation: 2,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'plugin/rational-order': [false],
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
  },
};
