// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function getBaseConfig(options?: {
  sassOptions: {
    additionalData: string;
  };
}) {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
          exclude: /build|coverage/,
        },
        // load font assets.
        {
          test: /\.(woff|ttf|eot|otf)(\?v=[\da-z]\.[\da-z]\.[\da-z])?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
        // load image assets apart from svg.
        {
          test: /\.(svg|png|jpe?g)$/i,
          type: 'asset/resource',
          exclude: [/lib-components\/src\/icons/],
          generator: {
            filename: 'images/[hash][ext]',
          },
        },
        // NOTE: for some reason webpack ignores the inline override inside the icon loader file
        {
          test: /\.svg$/i,
          include: [/lib-components\/src\/icons/],
          use: ['svg-inline-loader'],
        },
        // load css assets.
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // load scss assets.
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                // eslint-disable-next-line unicorn/prefer-module, @typescript-eslint/no-unsafe-assignment
                implementation: 'sass',
                additionalData: options?.sassOptions.additionalData ?? '',
                sourceMap: process.env.NODE_ENV !== 'production',
              },
            },
          ],
        },
      ],
    },
  };
}
