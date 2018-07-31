module.exports = {
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'arrow-parens': [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    curly: [2, 'all'],
    quotes: [
      2,
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: [2, 'always'],
  },
};
