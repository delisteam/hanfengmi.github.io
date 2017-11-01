const path = require('path');
const webpack = require('webpack');
module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.(svg|png|jpg|ico)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      {test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader'}
      // { test:require.resolve('jquery'), loader:'expose-loader?$!expose-loader?jQuery'}
    ]
  },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            'jQuery':'jquery'
        }),
    ]
};
