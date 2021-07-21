class TestPlugin {
    constructor() {

    }
    apply(compiler) {
        compiler.hooks.emit.tap("test", () => {
            console.log("test plugin call by emit");
        })
    }
}

module.exports = TestPlugin