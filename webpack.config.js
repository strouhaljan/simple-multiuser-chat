module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
            presets: ['react', 'es2015'],
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread"
            ]
        }
      }
    ]
  },
  devtool: 'source-map'
};
