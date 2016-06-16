module.exports = {
  entry: "./src/main.js",
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
            plugins: ["transform-class-properties"]
        }
      }
    ]
  }
};
