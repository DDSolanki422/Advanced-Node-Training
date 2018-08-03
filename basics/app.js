console.log('...in app.js')

var dist = require('dist')
var os = require('os')

console.log(dist)
console.log(os)

module.id = 'main'
module.exports = {
    name: 'app.js'
}
console.log(module.paths)

