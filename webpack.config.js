const path = require("path");
const TestPlugin = require("./plugins/test")

class P2 {
    apply(compiler) {
        compiler.hooks.afterPlugins.tap("p2", () => {
            console.log("p2 call when afterPlugins");
        })
    }
}
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "boundle.js"
    },
    rules: [{
        test: /\.js/,
        use: [path.resolve(__dirname, "loader", "loader1.js"), path.resolve(__dirname, "loader", "loader2.js")]
    }],
    plugins: [
        new TestPlugin(),
        new P2()
    ]
}
