'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');

// new webpack.ProvidePlugin({
//     $: 'jquery',
//     jQuery: 'jquery'
// });

module.exports = {
    entry: Path.resolve(__dirname, '../src/scripts/index'),
    output: {
        path: dest,
        filename: 'scripts/bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(
            [dest],
            {root: Path.join(__dirname, '../')}),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: './'},
            {from: Path.resolve(__dirname, '../src/images'), to: './images'},
        ]),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/blogs.html',
            filename: "blogs.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/visas.html',
            filename: "visas.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/visa-text.html',
            filename: "visa-text.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/companions.html',
            filename: "companions.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/companions-add-listings.html',
            filename: "companions-add-listings.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/registration.html',
            filename: "registration.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/articles.html',
            filename: "articles.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/articles-inner.html',
            filename: "articles-inner.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/photo.html',
            filename: "photo.html",
        }),
        new HtmlWebpackPlugin({
            template: './src/airlines.html',
            filename: "airlines.html",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': "jquery",
            UIkit: 'uikit',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: '../images/',
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts/',
                    }
                }
            },
        ]
    }
};
