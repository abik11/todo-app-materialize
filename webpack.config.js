var path = require('path');
var webpack = require('webpack');
var glob = require('glob-all');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var PurifyCSSPlugin = require('purifycss-webpack');

var isProduction = process.env.NODE_ENV === 'production';

//Dev and prod conf for SASS and CSS
var cssDev = ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader', 
  loader: ['css-loader', 'resolve-url-loader', 'sass-loader']
  //SASS goes through sass-loader, then resolve-url-loader, then css-loader
  //The result is extracted to a file (see plugin configuration)
});
var cssConfig = isProduction ? cssProd : cssDev;

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
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: { 
            //Using babel-loader for javascript in .vue components
            js: 'babel-loader?presets[]=es2015',
            //Enabling SASS transpilation in .vue components
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.scss$/,
        use: cssConfig 
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader']
      },      
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      },
      { 
        test: /\.(woff2?|ttf|eot|svg)$/, 
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
      },
    ]
  },
  plugins: [   
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      lodash: 'lodash',
      _: 'lodash',
      axios: 'axios'
    }),    
    new ExtractTextPlugin({
      filename: '/css/[name].css',
      disable: !isProduction 
      //Turning off Extract Text Plugin for dev mode
      //To enable Hot Module Replacement
    }),
    new PurifyCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, 'src/*.pug'),
        path.join(__dirname, 'src/js/components/*.vue')
      ])
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      minify: {
        removeComments: isProduction,
        collapseWhitespace: isProduction
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: isProduction }),
    new CleanWebpackPlugin(['.tmp', 'dist']),
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(), //Hot Module Replacement
    new webpack.NamedModulesPlugin()          //Hot Module Replacement
  ],  
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  }
};