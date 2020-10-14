module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    'max-len': [
      'error',
      {
        code: 110,
      },
    ],
    'padded-blocks': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-imports': 'error',
  },
}
