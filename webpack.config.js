const path =require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const webpack =require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js'
    },
    module :{
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
                test: /.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "[path][name]-[hash:8].[ext]"
                    }
                  }
                ]
            }
        ]
       
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    plugins: [
        new HtmlWebpackPlugin({
            title:'My React Configuration',
            template:'./index.html',
            minify: {
                collapseWhitespace: true
              },
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })
      ]
}