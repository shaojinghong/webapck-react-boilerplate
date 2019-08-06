const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/build', 'webpack.base.conf.js'),
      },
    },
  },
  plugins: ['react', 'babel', 'promise', 'import'],
  rules: {
    camelcase: [0, { ignoreDestructuring: true }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console':
      process.env.NODE_ENV === 'production'
        ? [2, { allow: ['warn', 'error'] }]
        : [1, { allow: ['warn', 'error'] }],
    'class-methods-use-this': 0,
    'react/forbid-prop-types': 0,
    'react/no-multi-comp': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/require-default-props': 0,
  },
  globals: {},
};
