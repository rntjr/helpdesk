module.exports = {
  rules: {
    'prettier/prettier': 2,
    'no-useless-constructor': 0
  },
  overrides: [
    {
      files: ['**/Migrations/*.ts'],
      rules: {
        quotes: [2, 'backtick', { avoidEscape: true }]
      }
    },
    {
      files:['**/Models/*.ts'],
      rules:{
        '@typescript-eslint/no-unused-vars': 0
      }
    }
  ]
}
