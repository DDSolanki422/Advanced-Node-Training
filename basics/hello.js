module.paths.push(global.process.cwd())

var app = require('app.js')

console.log('Hello')

console.log(module)
var x = 10; //module scope
y = 30; //global scope
console.log('global x', global.x)
console.log('global y', global.y)

console.log(app.name)