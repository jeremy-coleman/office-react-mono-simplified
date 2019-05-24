const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsConfigPathPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin
const ForkCheckerPlugin = require("fork-ts-checker-webpack-plugin")
const contains = (...values) => {
    return (filename) => {
        return values.some(value => {
            return filename.indexOf(value) >= 0;
        });
    }
};

const isNodeModuleFile = contains("node_modules");

const some = (...p) => {
    return (filename => {
        return p.some(e => e(filename));
    });
};

const endsWith = (...extensions) => {
    return (filename) => {
        return extensions.some(ext => {
            return filename.endsWith(ext);
        });
    };
};


const createConfig = (env) => {
    const publicPath = env && env.publicPath ? env.publicPath : "/";
    const defaultAppEnv = {
        fabricFontBasePath: "/", // Fabric appends /fonts/... 
        fabricIconBasePath: "/icons/fabric/"
    };
    const appEnv = Object.assign({}, defaultAppEnv, env);
    const production = env && env.production ? true : false;
    const buildVersion = env && env.buildVersion ? env.buildVersion : production ? "Unknown" : "DEV";

    const AppConfig = {
        production: production,
        publicPath: publicPath,
        buildVersion: buildVersion,
        buildDate: new Date().toString(),
        env: appEnv
    };

    const config = {
        stats: "none",
        mode: production ? "production" : "development",
        entry: {
            index: ["./src/samples/editor/index.tsx"]
        },
        output: {
            filename: production ? "[name].[chunkhash].js" : "[name].js",
            path: path.join(__dirname, "dist"),
            publicPath: publicPath
        },
        module: {
            rules: [
                {
                    test: endsWith(".ts", ".tsx"),
                    loader: "ts-loader",
                    options: {transpileOnly: true, experimentalWatchApi: true},
                    exclude: isNodeModuleFile
                },
                {
                    test: endsWith(".woff", ".woff2", ".svg", ".ttf", ".eot",".png", ".jpg", ".gif", ".bmp"),
                    use: [{ loader: "file-loader" }]
                },
                {
                    test: endsWith(".css"),
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js",".jsx"],
            plugins:[new TsConfigPathPlugin()]
        },
        devtool: "cheap-eval-source-map",
        devServer: {
            stats: "minimal",
            contentBase: "./dist",
            historyApiFallback: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            port: 1337
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: "Office UI React Sample",
                template: "src/samples/editor/index.html",
                AppConfig: AppConfig,
                chunks: ["index"],
                chunksSortMode: "none"
            }),
            new ForkCheckerPlugin()
        ]
    };

    return config;
};

module.exports = createConfig;


// {
//     test: endsWith(".scss"),
//     use: [
//         { loader: "@microsoft/loader-load-themed-styles" },
//         { loader: "css-loader" },
//         {
//             loader: "sass-loader",
//             // options: {
//             //     data: `$ms-font-cdn-path: "${fabricFontBasePath}";`
//             // }
//         }
//     ]
// },
// {
//     test: endsWith(".css"),
//     use: [
//         { loader: "@microsoft/loader-load-themed-styles" },
//         { loader: "css-loader" }
//     ]
// },