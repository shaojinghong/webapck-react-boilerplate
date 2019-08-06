const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');

const resolve = dir => path.join(__dirname, '..', dir);

const config = {
  devtool: false,

  entry: ['./src/index.js'],

  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
  },

  plugins: [
    new CleanWebpackPlugin({
      root: resolve('dist'),
    }),

    new MiniCssExtractPlugin({
      path: resolve('dist'),
      publicPath: 'static/',
      filename: 'static/css/[name].[contenthash].css',
    }),

    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'static',
        ignore: ['.*'],
      },
    ]),
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({
        safe: true,
        autoprefixer: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      cacheGroups: {
        vendors: {
          chunks: 'initial',
          minChunks: 1,
          name: 'vendor',
          priority: 1,
          test: /[\\/]node_modules[\\/].*\.js$/,
        },
        'async-vendors': {
          chunks: 'async',
          minChunks: 1,
          name: 'async-vendors',
          priority: -20,
          test: /[\\/]node_modules[\\/].*\.js$/,
        },
      },
    },
    chunkIds: 'named',
    concatenateModules: true,
    noEmitOnErrors: true,
    mergeDuplicateChunks: true,
    removeEmptyChunks: true,
    removeAvailableModules: true,
    namedModules: true,
    namedChunks: true,
    providedExports: true,
  },
};

module.exports = merge(baseWebpackConfig, config);
