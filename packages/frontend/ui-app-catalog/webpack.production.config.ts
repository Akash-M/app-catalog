// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unsafe-call */
// @ts-ignore
import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';

import getBaseConfig from '../../../webpack.base.config';

const productionWebpackConfig: Configuration = {
  ...getBaseConfig({
    sassOptions: {
      additionalData: '@import "lib-components/src/scss/global";',
    },
  }),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.build.json' })],
  },
  output: {
    // eslint-disable-next-line unicorn/prefer-module
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/assets/locales', to: 'locales' }],
    }),
    new HtmlWebpackPlugin({
      // HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
      template: './public/index.html',
    }),
  ],
};

export default productionWebpackConfig;
