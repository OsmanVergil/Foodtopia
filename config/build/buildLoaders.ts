import webpack from 'webpack';
import { BuildOptions } from './types/config';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const isDev = options.mode === 'development';

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
          }
        },
      },
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
  };

  return [tsLoader, cssLoader, svgLoader];
}
