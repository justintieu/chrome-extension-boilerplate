const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: {
        background: "./src/background.js",
        content: "./src/content.js",
        popup: "./src/popup.js",
        options: "./src/options.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: "public", to: "." },
                { from: "manifest.json", to: "." },
            ],
        }),
        new ESLintPlugin({
            eslintPath: "eslint/use-at-your-own-risk", 
            extensions: ["js"],
            exclude: "node_modules",
            failOnError: process.env.NODE_ENV === "production",
        }),
    ],
    devtool: "cheap-module-source-map",
};
