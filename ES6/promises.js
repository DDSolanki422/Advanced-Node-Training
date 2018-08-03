
function someTask(a) {
    //long-running tasks
    return new Promise((resolve, reject) => {
        if(a > 100) {
            setTimeout(() => {
                var result = a * 2
                resolve(result)
            },100)
        }
        else {
            setTimeout(() => {
                var result = a * 8
                reject(result)
            },100)
        }
    })
    
}
/*
var handle = someTask(40).then((result) => {
    console.log('success', result)
}, (result) => {
    console.log('failure', result)
    
}).then(() => {
    console.log('Task finished')
})
*/


Promise
.race([Promise.reject('a'), Promise.resolve('b'), someTask(400)])
.then((result) => {
    console.log('result resolved', result)
})
.catch(result => {
    console.log('result rejected', result)
})

module.exports = {
    someTask
}