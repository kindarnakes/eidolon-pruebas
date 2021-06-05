var path = require('path');

module.exports = {
    entry: './App.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/react']
                    }
                }
            }
        ]
    },
    externals: {
        'react': 'React'
    }
};