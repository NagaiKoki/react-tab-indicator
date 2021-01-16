const path = require("path");

module.exports = () => {
  return {
    entry: "./src/index.ts",
    output: {
      path: path.join(__dirname, "dist"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      publicPath: "/dist",
      host: "0.0.0.0",
    },
  };
};
