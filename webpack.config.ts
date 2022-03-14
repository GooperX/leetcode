import { Configuration } from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import forkTsCheckerPlugin from 'fork-ts-checker-webpack-plugin'

const config = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.ts|js$/,
        exclude: /node_modules/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new forkTsCheckerPlugin()
  ],
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    // contentBase: join(__dirname, 'dist'),
    // static: {
    //   directory: join(__dirname, 'dist'),
    // },
    compress: false,
    port: 9527,
    hot: true
  }
} as Configuration

export default config