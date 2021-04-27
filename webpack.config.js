/*const path = require('path');
const fs = require('fs');
const fileGetter = require('./webpack/get-files');
const iconUpdater = require('./webpack/update-supported-icons');

iconUpdater.updateSupportedIcons();

let apheliaFiles = fileGetter.getFiles('./src');

module.exports = {
    entry: {
        aphelia: apheliaFiles,
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].build.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}*/

/*
    Import module(s)
*/
const path = require('path');
const fileGetter = require('./webpack/get-files');

/*
    Webpack plugins
*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const mafiosoImageFiles = fileGetter.getFiles('./src/game/img');

/*
    Aphelia files array
*/
const apheliaFiles = [
    './src/import.scss',
    './src/import.ts'
];

/*
    Export webpack config
*/
module.exports = {
    entry: {
        apheleia: apheliaFiles
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].build.js'
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            /*{
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:16].[ext]',
                        outputPath: 'images/'
                    }
                }
            },*/
            {
                test: /\.tsx?$/i,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].build.css'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}