var path = require('path');
var config = {
  mode: 'development',
  entry: ['./src/Test.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'play-what-alpha.js',
    /*libraryTarget: "commonjs2"*/
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};

module.exports = config;