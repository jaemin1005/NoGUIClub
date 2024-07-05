// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = 'style-loader';
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');


const config = {
    entry: './src/client/Client.ts',
    output: {
        path: path.resolve(__dirname, 'webpack'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: "body"
        }),
        new HtmlInlineScriptPlugin(HtmlWebpackPlugin, [/bundle\.js$/])
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
                options: {
                    configFile: path.resolve(__dirname, 'babel.config.json')
                    //plugins: ['@babel/plugin-transform-runtime']
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        alias: {
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@client': path.resolve(__dirname, 'src/client'),
            '@server': path.resolve(__dirname, 'src/server')
        }
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.devtool = 'source-map';
        config.mode = 'development';
    }
    return config;
};
