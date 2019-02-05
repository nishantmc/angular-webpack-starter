var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
  /* Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.*/
  mode: 'development',

  output: {
    filename: '[name]'
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

    /* Use the optimization.noEmitOnErrors to skip the emitting phase whenever there are errors 
  while compiling. This ensures that no erroring assets are emitted. The emitted flag in the 
  stats is false for all assets. */
  optimization: {
    splitChunks: false,
    runtimeChunk: false
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src/tsconfig.spec.json') }
          } , 'angular2-template-loader'
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'to-string-loader',
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
        ]
       },
      { test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loaders: ['to-string-loader', 'css-loader'] }

    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
}

