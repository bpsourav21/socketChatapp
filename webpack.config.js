var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
       // inline: true,
        contentBase: __dirname +'./public',
        port: 5001,
    },

    devtool: 'cheap-module-eval-source-map',
    entry: './app/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                  }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        // path: __dirname,
        // filename: "js/bundle.min.js",
        path: __dirname + '/js', // Folder to store generated bundle
        filename: 'bundle.min.js',  // Name of generated bundle after build
    },
    
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html",
            inject: 'body'
        })
    ]
};
