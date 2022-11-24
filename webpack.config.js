const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode: "development",
    // for single file
    // entry: path.resolve(__dirname, "src/index.js"),
    // for Multiple file
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        // for single file
        // filename: 'bundle.js'   //default-> main.js
        // for Multiple file
        filename: '[name][contenthash].js',   //default-> main.js
        //[contenthash] -> this changes everytime files changed and help in chaching
        clean: true, // prevent file duplication in dist folder while caching
        assetModuleFilename: '[name][ext]'  // asset loading
    },
    //help to debug the code as sometime you have any error in source code but doesn't show code to you
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist")
        },
        port: 3000,
        open: true, // open the browser automatically
        hot: true,  //hot reloading
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss/, //file types
                use: ['style-loader', 'css-loader', 'sass-loader'] // loaders to use
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,    //don't want mes with it
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|gif|jpeg|jpg)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        // Automatically create index file in dist folder
        new HtmlWebpackPlugin(
            {
                title: "Webpack App",
                filename: "index.html",
                template: "src/template.html",   // append this inside the index.html
            }
        ),
        new BundleAnalyzerPlugin(),
    ]
}