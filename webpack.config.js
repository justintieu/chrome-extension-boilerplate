const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
    ],
    devtool: "cheap-module-source-map",
};
