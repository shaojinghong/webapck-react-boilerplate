module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
    },
    'css-mqpacker': {},
    'postcss-flexbugs-fixes': {},
    autoprefixer: { browsers: ['> 1%', 'last 2 versions'] },
    cssnano: {
      safe: true,
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
          svgo: {
            plugins: [
              {
                removeDoctype: false,
              },
            ],
          },
        },
      ],
    },
  },
};
