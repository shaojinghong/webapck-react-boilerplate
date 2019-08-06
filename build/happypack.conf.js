const HappyPack = require('happypack');
const os = require('os');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const isDev = process.env.NODE_ENV !== 'production';

const config = {
  threadPool: HappyPack.ThreadPool({ size: os.cpus().length }),
  verbose: false,
};

const preLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
    },
  },
];

if (!isDev) {
  preLoaders.push({
    loader: 'postcss-loader',
    options: {
      sourceMap: false,
    },
  });
}

module.exports = [
  new HappyPack({
    id: 'eslint',
    ...config,
    loaders: [
      {
        loader: 'eslint-loader',
        options: {
          cache: true,
          formatter: eslintFriendlyFormatter,
        },
      },
    ],
  }),

  new HappyPack({
    id: 'babel',
    ...config,
    loaders: [
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          cacheCompression: false,
        },
      },
    ],
  }),

  new HappyPack({
    id: 'css',
    ...config,
    loaders: preLoaders,
  }),

  new HappyPack({
    id: 'scss',
    ...config,
    loaders: [
      ...preLoaders,
      {
        loader: 'sass-loader',
        options: {
          sourceMap: false,
        },
      },
    ],
  }),
];
