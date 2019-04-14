const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
   template: "./app/src/index.html",
   filename: "./index.html"
});

module.exports = {
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: {loader: "html-loader"}
            }
        ]
    },
    plugins: [htmlPlugin]
};
