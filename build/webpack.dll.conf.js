const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = dir => path.join(__dirname, '..', dir);

const config = {
  mode: 'development',

  entry: {
    common: [
      'react',
      'react-dom',
      'prop-types',
      'react-router',
      'react-router-config',
      'react-router-dom',
      'lodash',
    ],
  },

  output: {
    path: resolve('dlls/js'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
      }),
    ],
  },

  plugins: [
    new WebpackBar({
      name: 'build dlls',
      color: 'green',
      profile: true,
    }),

    new CleanWebpackPlugin({
      root: resolve('dlls'),
    }),

    new FriendlyErrorsWebpackPlugin({
      clearConsole: false,
    }),

    new webpack.DllPlugin({
      path: resolve('dlls/[name]-manifest.json'),
      name: '[name]',
    }),
  ],

  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    modules: false,
  },
};

if (process.env.npm_config_report) {
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3002 }));
}

module.exports = config;
