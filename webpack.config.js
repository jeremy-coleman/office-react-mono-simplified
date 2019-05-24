//@ts-check
const path = require("path");
var webpack = require('webpack')
const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

const some = (...p) => filestring => p.some(e => e(filestring));
const contains = (...pathString) => (filestring) => pathString.some(v => filestring.indexOf(v) >= 0)
const isNodeModuleFile = contains("node_modules");
const endsWith = (...extensions) => (filestring) => extensions.some(ext => filestring.endsWith(ext))


module.exports = {
        stats: "minimal",
        mode: "production",
        entry: './src/office-ui-fabric-react/index.ts',
        output: {
            filename: "[name].js",
            path: path.join(__dirname, "lib")
        },
        externals: ['react', 'react-dom', 'prop-types'],
        module: {
            rules: [
                // {
                //     enforce: "pre",
                //     test: endsWith(".ts", ".tsx", ".js"),
                //     loader: "source-map-loader",
                //     exclude: some(isNodeModuleFile) //endsWith(".md, etc")
                // },
                {
                    test: endsWith(".ts", ".tsx", ".jsx", ".js"),
                    loader: "ts-loader",
                    options: {transpileOnly: true, experimentalWatchApi: true},
                    exclude: isNodeModuleFile
                },

                {
                    test: endsWith(".scss"),
                    use: [
                        { loader: "@microsoft/loader-load-themed-styles" },
                        { loader: "css-loader" },
                        {
                            loader: "sass-loader",
                            // options: {
                            //     data: `$ms-font-cdn-path: "${fabricFontBasePath}";`
                            // }
                        }
                    ]
                },
                {
                    test: endsWith(".css"),
                    use: [
                        { loader: "@microsoft/loader-load-themed-styles" },
                        { loader: "css-loader" }
                    ]
                },
                {
                    test: endsWith(".woff", ".woff2", ".font.svg", ".ttf", ".eot"),
                    use: [
                        { loader: "file-loader" }
                    ]
                },
                {
                    test: endsWith(".png", ".jpg", ".gif"),
                    use: [
                        { loader: "file-loader" }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".js", ".tsx", ".ts", ".jsx"],
            plugins:[new TsConfigPathPlugin()],
        },
        devtool: "source-map",
        plugins: [
            new UnusedFilesWebpackPlugin({
                globOptions: {
                  ignore: ["*",
                  "!src/**/*.*"]
                }
              })
        ],
        optimization: {
            splitChunks: {
              cacheGroups: {
                commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendor',
                  chunks: 'all',
                },
              },
            },
          }

};

