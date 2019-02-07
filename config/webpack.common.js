const CleanWebpackPlugin   = require('clean-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var helpers = require('./helpers');

module.exports = {
  entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ],
        include: helpers.root('src', 'app')
       },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(
        helpers.root('dist'), { root: helpers.root(), verbose: true }),

    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

