var x = 10;
var y;

console.log('x', x)
console.log('y', y)
//console.log('z', z)//Reference error --> z is not defined
fn()
function fn() {
    var x = 50;
    console.log('x in function', x)
    console.log('message', message)
    if(x < 100) {
        var message = 'hello'
    }
    console.log('message', message)
}

