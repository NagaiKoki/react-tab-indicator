import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./demo/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
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

export default config;
