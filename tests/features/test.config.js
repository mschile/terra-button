const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    default: path.join(__dirname, 'fixtures', 'default', 'index'),
    disabled: path.join(__dirname, 'fixtures', 'disabled', 'button', 'index'),
    'disabled-link': path.join(__dirname, 'fixtures', 'disabled', 'link', 'index'),
    'long-text': path.join(__dirname, 'fixtures', 'long-text', 'index'),
    'icon-default': path.join(__dirname, 'fixtures', 'icon', 'default', 'index'),
    'icon-only': path.join(__dirname, 'fixtures', 'icon', 'icon-only', 'index'),
    'icon-reversed': path.join(__dirname, 'fixtures', 'icon', 'icon-reversed', 'index'),
    info: path.join(__dirname, 'fixtures', 'intent', 'info', 'index'),
    negative: path.join(__dirname, 'fixtures', 'intent', 'negative', 'index'),
    positive: path.join(__dirname, 'fixtures', 'intent', 'positive', 'index'),
    primary: path.join(__dirname, 'fixtures', 'intent', 'primary', 'index'),
    secondary: path.join(__dirname, 'fixtures', 'intent', 'secondary', 'index'),
    warning: path.join(__dirname, 'fixtures', 'intent', 'warning', 'index'),
    link: path.join(__dirname, 'fixtures', 'variant', 'link', 'index'),
    outline: path.join(__dirname, 'fixtures', 'variant', 'outline', 'index'),
    huge: path.join(__dirname, 'fixtures', 'size', 'huge', 'index'),
    large: path.join(__dirname, 'fixtures', 'size', 'large', 'index'),
    medium: path.join(__dirname, 'fixtures', 'size', 'medium', 'index'),
    small: path.join(__dirname, 'fixtures', 'size', 'small', 'index'),
    tiny: path.join(__dirname, 'fixtures', 'size', 'tiny', 'index'),
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['default'],
      filename: 'default.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['disabled'],
      filename: 'disabled.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['disabled-link'],
      filename: 'disabled-link.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['long-text'],
      filename: 'long-text.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['icon-default'],
      filename: 'icon-default.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['icon-only'],
      filename: 'icon-only.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['icon-reversed'],
      filename: 'icon-reversed.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['info'],
      filename: 'info.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['negative'],
      filename: 'negative.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['positive'],
      filename: 'positive.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['primary'],
      filename: 'primary.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['secondary'],
      filename: 'secondary.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['primary'],
      filename: 'primary.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['warning'],
      filename: 'warning.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['link'],
      filename: 'link.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['outline'],
      filename: 'outline.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['huge'],
      filename: 'huge.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['large'],
      filename: 'large.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['medium'],
      filename: 'medium.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['small'],
      filename: 'small.html',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'fixtures', 'button-base.html'),
      chunks: ['tiny'],
      filename: 'tiny.html',
    }),
  ],
  postcss: [
    autoprefixer({
      browsers: [
        'ie >= 10',
        'last 2 versions',
        'last 2 android versions',
        'last 2 and_chr versions',
        'iOS >= 8',
      ],
    }),
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.js', '.jsx'],
  },
  sassLoader: {
    data: `@import "${path.resolve('node_modules/terra-legacy-theme/src/terra-legacy-theme.scss')}"; @import "${path.resolve('node_modules/terra-application/src/terra-application.scss')}"; $terra-bidi: true;`,
  },
};
