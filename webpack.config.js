var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'release')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },{
                test: /\.scss$/,
                use: [
    	            { loader: "style-loader" }, 
    	            { loader: "css-loader" }, 
    	            { loader: "sass-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?presets[]=env'
            }
        ]
    }
};