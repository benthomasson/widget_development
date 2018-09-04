var webpack = require('webpack');
module.exports = {
    entry: {
        app: "./src/main.js",
        vendor: ["angular",
                 "angular-ui-router",
                 "hamsterjs",
                 "angular-mousewheel",
                 "reconnectingwebsocket",
                 "angular-xeditable"
                ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['ngtemplate-loader', 'html-loader'],
                include: [
                    /src\//
                ]
            },
            {
                test: /\.svg$/,
                use: ['ngtemplate-loader', 'html-loader'],
                include: [
                    /src\//
                ]
            },
        ]
    },
    output: {
        path: __dirname + "/js",
        filename:  "bundle.js",
    },
    plugins: [
         new webpack.ProvidePlugin({Hamster: 'hamsterjs'}),
         new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};
