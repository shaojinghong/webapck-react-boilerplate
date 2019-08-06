const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const happyPack = require('./happypack.conf');

const { NODE_ENV } = process.env;

const isDev = NODE_ENV === 'development';

const resolve = dir => path.join(__dirname, '..', dir);

const config = {
  mode: NODE_ENV,

  target: 'web',

  entry: './src/index.js',

  output: {
    publicPath: '/',
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js',
    pathinfo: false,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=eslint',
        enforce: 'pre',
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'happypack/loader?id=babel',
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isDev
            ? {
                loader: 'style-loader',
                options: {
                  hmr: true,
                  singleton: true,
                  sourceMap: false,
                },
              }
            : MiniCssExtractPlugin.loader,
          'happypack/loader?id=css',
        ],
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          isDev
            ? {
                loader: 'style-loader',
                options: {
                  hmr: true,
                  singleton: true,
                  sourceMap: false,
                },
              }
            : MiniCssExtractPlugin.loader,
          'happypack/loader?id=scss',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'static/images',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [resolve('src'), resolve('node_modules')],
    alias: {
      src: resolve('src'),
      assets: resolve('src/assets'),
      components: resolve('src/components'),
      constants: resolve('src/constants'),
      locales: resolve('src/locales'),
      routes: resolve('src/routes'),
      stores: resolve('src/stores'),
      utils: resolve('src/utils'),
      views: resolve('src/views'),
    },
  },

  stats: {
    assetsSort: '!size',
    children: false,
    chunks: false,
    colors: true,
    entrypoints: false,
    warnings: true,
    modules: false,
  },

  plugins: [
    ...happyPack,

    new webpack.EnvironmentPlugin(['NODE_ENV']),

    new WebpackBar({
      name: NODE_ENV,
      color: 'green',
      profile: !isDev,
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency',
      isDev,
    }),
  ],

  optimization: {
    runtimeChunk: false,
  },

  performance: {
    hints: false,
  },
};

if (process.env.npm_config_report) {
  config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 3002 }));
}

module.exports = config;
