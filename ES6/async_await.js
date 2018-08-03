const { someTask } = require('./promises')

const invokeSomeFn = async () => {
  try {
    var result = await someTask(40)
    console.log(result)
  }
  catch (err) {
    console.log('error', err)
  }
}

invokeSomeFn()