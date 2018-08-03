const EventEmitter = require('events')
class MyEmitter extends EventEmitter {
    getName(){
        return 'MyEmitter'
    }

    doTask(callback) {
        console.log('starting doTask...')
        this.emit('begin')
        callback()
        this.getName()
        this.emit('end')
        console.log('finishing doTask')
    }
}
const myEmitter = new MyEmitter()
myEmitter.on('begin', () => console.log('begin emitted'))
myEmitter.on('end', () => console.log('end emitted'))
myEmitter.doTask(() => console.log("this is call back console"))
