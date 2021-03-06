var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      }
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  ],
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          loader: 'file'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: __dirname
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'cheap-module-eval-source-map',
};
