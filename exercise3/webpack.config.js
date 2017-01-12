'use strict';

/**
 * Set the environment
 */
const args = require('minimist')(process.argv.slice(2));
const allowedEnvs = ['dev', 'dist', 'test'];
let env;
if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env && args.env && args.env.length > 0 && allowedEnvs.indexOf(args.env) !== -1) {
  env = args.env;
} else {
  env = 'dev';
}
process.env.REACT_WEBPACK_ENV = env;


const path = require('path');
const _ = require('lodash');
let webpack = require('webpack');
let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let extractCSS = new ExtractTextPlugin('app.css');


/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
const config = {
  srcPath: path.join(__dirname, './src'),
  host: 'localhost',
  port: 8000,
  additionalPaths: []
};

module.exports = {
  host: config.host,
  port: config.port,
  debug: true,
  output: {
    publicPath: `http://${config.host}:${config.port}/`,
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: config.port,
    noInfo: false,
    compress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: config.srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      }, {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=font/opentype&name=fonts/[hash].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.join(__dirname, './src/Main/assets/vendor/fonts')],
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(svg|png|jpg|gif|mp4)$/,
        exclude: [path.join(__dirname, './src/Main/assets/vendor/fonts')],
        loader: 'file-loader?limit=8192&name=assets/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'react-hot!babel-loader',
        include: [path.join(__dirname, './src')]
      }
    ]
  },
  entry: [
    'webpack-dev-server/client?http://' + config.host + ':' + config.port,
    'webpack/hot/only-dev-server',
    path.join(__dirname, './src/index')
  ],
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.NoErrorsPlugin(),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    extractCSS
  ]
};
