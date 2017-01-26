module.exports = {
  env: {
    node: true,
    commonjs: true
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
  },
  globals: {
    Promise: true
  }
};