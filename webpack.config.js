var path = require('path');
var webpack = require("webpack");


module.exports = {
    entry: ['./src/lib.js', './src/app.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'release')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=fonts/[name].[ext]"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=env'
            },

        ]
    },
    plugins: [
        //jQuery must be included slightly differently
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            _: "lodash",
        })
    ],
    devtool: 'eval-source-map',
    target: 'async-node'
};