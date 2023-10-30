const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
      static: {
          directory: path.join(__dirname, '/'),
      },
      compress: true,
      port: 9000,
      },
  mode: "production",
  entry: './src/index.ts',
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  plugins: [ new CleanWebpackPlugin() ]
};