const path = require('path');
const webpack = require('webpack');
const glob = require('glob-all');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const PurifyCSSPlugin = require('purifycss-webpack');

const isProduction = process.env.NODE_ENV === 'production';

//Dev and prod conf for SASS and CSS
const cssLoaders = ['css-loader', 'resolve-url-loader', 'sass-loader'];
const cssDev = ['vue-style-loader'].concat(cssLoaders);
const cssProd = [MiniCssExtractPlugin.loader].concat(cssLoaders);
//SASS goes through sass-loader, then resolve-url-loader, then css-loader
//The result is extracted to a file (see plugin configuration)
const cssConfig = isProduction ? cssProd : cssDev;

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9001,
    open: true,           //Opens browser after build
    stats: 'errors-only', //Shows only errors in console
    hot: true             //Hot Module Replacement mode on
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: { loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      lodash: 'lodash',
      _: 'lodash',
      axios: 'axios'
    }),
    new MiniCssExtractPlugin({
      filename: "/css/[name].css",
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'src/*.html'),
        path.join(__dirname, 'src/js/components/*.vue')
      ])
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: isProduction,
        collapseWhitespace: isProduction
      }
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['.tmp', 'dist']
    }),
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin() //Hot Module Replacement
  ],
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
};