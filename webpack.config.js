const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const breakpoints = [
{ prefix: 'xs-', mediaQuery: '(max-width: 480px)' },
{ prefix: 'sm-', mediaQuery: '(min-width: 480px)' },
{ prefix: 'md-', mediaQuery: '(min-width: 630px)' },
{ prefix: 'nrw-', mediaQuery: '(min-width: 720px)' },
{ prefix: 'lg-', mediaQuery: '(min-width: 800px)' },
{ prefix: 'mn-', mediaQuery: '(min-width: 960px)' },
{ prefix: 'xl-', mediaQuery: '(min-width: 1200px)' },
{ prefix: 'hdr-', mediaQuery: '(min-width: 1440px)' },
];

const processors = [
  require('postcss-import'),
	require('postcss-custom-properties'),
	require('postcss-custom-media'),
	require('postcss-nested'),
	require('postcss-calc'),
	require('postcss-responsify')({breakpoints}),
	require('cssnano'),
];


const PATH = {
  src: path.join(__dirname, 'src', 'css', 'index.pcss'),
  dist: path.join('dist'),
};


const config = {
  devtool: 'source-map',
  entry: 'file?name=[name].[ext]!' + PATH.src,
  output: {
    filename: 'index.css',
    path: PATH.dist,
  },
  module: {
    loaders: [

      // PostCSS loaders
      {
        test: /\.pcss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader']),
        include: PATH.src,
      },

    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      title: 'Pgrid',
      template: './index.tpl.html',
    }),
  ],
  postcss: function() {
    return processors;
  },
};

module.exports = config;
