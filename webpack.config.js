module.exports = {
  entry: "./src/app.js",
  output: {
      filename: "dist/bundle.js"
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude:/(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          },
          { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
          }
      ]
  }
};