const path = require("path")

module.exports = {
  entry : "./src/entry",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fullySpecified: false,
}
}
