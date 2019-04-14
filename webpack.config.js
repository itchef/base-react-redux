const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
   template: "./app/src/index.html",
   filename: "./index.html"
});

const cssPlugin = new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: '[id].css',
});

const config = (devMode) => ({
    entry: [
        "babel-polyfill",
        "./app/src/index.js"
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: {loader: "html-loader"}
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: '/node_modules/',
                use:[
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [htmlPlugin]
});

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return config(devMode);
};
