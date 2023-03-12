const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                fiber: require("fibers"),
                includePaths: [path.resolve(__dirname, "node_modules")]
              }
            }
          }
        ]
      }
    ]
  }
};
