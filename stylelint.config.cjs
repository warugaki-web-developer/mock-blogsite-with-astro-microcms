module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-rscss'],
  rules: {
    'selector-class-pattern': null,
    'rscss/no-descendant-combinator': true,
    'rscss/class-format': [
      true,
      {
        // https://github.com/rstacruz/stylelint-rscss/blob/master/docs/rules.md#rscssclass-format
      },
    ],
  },
};
