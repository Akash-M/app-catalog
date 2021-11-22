const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
  // Setup typescript support for build.
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    // Make whatever fine-grained changes you need
    config.module.rules.push(
      // load scss assets.
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import '~/src/scss/global';`,
              sassOptions: {
                implementation: require('sass'),
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    );
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              require('@babel/preset-typescript').default,
              require('@babel/preset-react').default,
              require('@babel/preset-env').default,
            ],
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.svg$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('svg-inline-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
