module.exports = {
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" }
        ]
    }
};