const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin([{ from: path.join(__dirname, 'images'), to: 'images' }])
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
