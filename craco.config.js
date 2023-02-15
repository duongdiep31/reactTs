const path = require('path');
const {CracoAliasPlugin} = require('react-app-alias')

module.exports = {
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.svg'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }, 
        plugins: [
            {
              plugin: CracoAliasPlugin,
              options: {}
            }
        ]
}