// Configurações no webpack para lidar com o jwt 

const { override, addWebpackResolve, addWebpackPlugin } = require('customize-cra');
const webpack = require('webpack');

 module.exports = override(
 addWebpackResolve({
   fallback: {
     "buffer": require.resolve("buffer/"),
     "crypto": require.resolve("crypto-browserify"),
     "stream": require.resolve("stream-browserify"),
     "util": require.resolve("util/"),
   }
 }),
 addWebpackPlugin(
   new webpack.ProvidePlugin({
     process: 'process/browser',
   }),
 ),
 function(config) {
   config.module.rules.push({
     test: /node_modules[/\\](iconv-lite|buffer|crypto-browserify)[/\\].+\\.js$/,
     resolve: {
       fullySpecified: false,
     },
   });
   return config;
 },
 );