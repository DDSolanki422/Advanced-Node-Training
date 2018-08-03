console.log('In the tasks application')
const yargs = require('yargs')
const tasks = require('./tasks')
yargs
  .command('add', 'To add a task', () => {
    return yargs.options ({
      task: {
        describe: 'The Task name',
        demand: true,
        alias: 't'
      }
    })
  })
  .command('list', 'to List all tasks')
  .help()
if(yargs.argv._.indexOf('add') !== -1) {
  console.log(yargs.argv.task)
   tasks.writeTask(yargs.argv.task).then(() => console.log('success'), () => console.log('failed'))
}
else if(yargs.argv._.indexOf('list') !== -1) {

  tasks.readTasks_events()

  tasks.taskEmitter.on('data', (data) => {
    console.log('success')
    console.log(data)
  })

  tasks.taskEmitter.on('error', error => {
    console.log('failed')
    console.log(error)
  })
}
