module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'space-before-function-paren': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
  },
  globals: {}
}
