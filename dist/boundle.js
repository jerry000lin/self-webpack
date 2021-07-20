(function (modules) {
    var installModules = {}

    function __webpack_require__(moduleId) {
        if (installModules[moduleId]) {
            return installModules[moduleId]
        }
        var module = (installModules[moduleId] = {
            i: moduleId,
            exports: {}
        })
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        return module.exports
    }
    return __webpack_require__("./src/main.js")
})({
     
    "./src/main.js":function(module,exports,__webpack_require__){
        eval(`const a = __webpack_require__("./src/a.js");

console.log(a + "main"); `)
    },
     
    "./src/a.js":function(module,exports,__webpack_require__){
        eval(`module.exports = "aaa"; `)
    },
     
})