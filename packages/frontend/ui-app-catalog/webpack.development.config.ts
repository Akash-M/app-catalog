/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable unicorn/prefer-module */
// @ts-ignore
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevelopmentServerConfiguration } from 'webpack-dev-server';

import productionWebpackConfig from './webpack.production.config';

interface DevelopmentConfiguration extends WebpackConfiguration {
  devServer?: WebpackDevelopmentServerConfiguration;
}

const developmentWebpackConfig: DevelopmentConfiguration = {
  ...productionWebpackConfig,
  context: __dirname,
  resolve: {
    ...productionWebpackConfig.resolve,
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 4200,
    open: true,
    historyApiFallback: true,
    hot: true,
    // Expose locales from assets
    contentBase: ['./public', './src/assets'],
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/locales/',
          to: './public/locales/',
          toType: 'dir',
          force: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}',
      },
    }),
  ],
};

export default developmentWebpackConfig;
