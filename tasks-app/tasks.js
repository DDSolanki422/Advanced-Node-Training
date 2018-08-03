var fs = require('fs')
var EventEmmitter = require('events')
class TaskEvent extends EventEmmitter {}
const taskEmitter = new TaskEvent()
var tasks = []
function writeTask(taskName) {
  return new Promise(async (resolve, reject) => {
    readTasks()
      .then(data => {
        tasks = data
      }, (err) => {
        console.log('no task-file.json is available')
        tasks = []
      })
      .then(() => {
        tasks.push({task: taskName})
        fs.writeFile('task-file.json', JSON.stringify(tasks), (err) => {
          if(err) {
            reject(err)
          }
          else {
            resolve('done')
          }
        })
      })
  })
}



function writeTask_asyn_await(taskName) {
    return new Promise(async (resolve, reject) => {    
  
        try {
          data = await readTasks()
          tasks = data
        }
        catch {
          tasks = []
        }
  
        tasks.push({task: taskName})
          fs.writeFile('task-file.json', JSON.stringify(tasks), (err) => {
            if(err) {
              reject(err)
            }
            else {
              resolve('done')
            }
          })
        })
  }
function readTasks() {
  return new Promise((resolve, reject) => {
    fs.readFile('task-file.json', {encoding: 'utf8'}, (err, data) => {
      if(!err) {
        resolve(JSON.parse(data))
        
      }
      else {
        reject(err)        
      }
    })
  })
}

function readTasks_events() {
    console.log('readTasks_events')
    fs.readFile('task-file.json', {encoding: 'utf8'}, (err, data) => {
        if(!err) {            
            taskEmitter.emit('data', JSON.parse(data))
        }
        else {         
            taskEmitter.emit('error', err)
        }
    })    
}
module.exports = {
  writeTask,
  readTasks,
  taskEmitter,
  readTasks_events
}