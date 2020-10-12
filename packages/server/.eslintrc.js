module.exports = {
  rules: {
    'prettier/prettier': 2,
    '@typescript-eslint/no-unused-vars': 0,
    'no-useless-constructor': 0
  },
  overrides: [
    {
      files: ['**/Migrations/*.ts'],
      rules: {
        quotes: [2, 'backtick', { avoidEscape: true }]
      }
    }
  ]
}
