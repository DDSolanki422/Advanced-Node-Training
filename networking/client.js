const net = require('net')
const readline = require('readline')
const uniqid = require('uniqid')

const readConsole = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const clientSocket = new net.Socket()
clientSocket.uniqueId = uniqid()

console.log(clientSocket)

clientSocket.connect(9000, "localhost", () => {
  console.log('connected to server')
  clientSocket.setEncoding('utf8')
  clientSocket.on('data', data => {
    console.log(`server says: ${data}`)
    readConsole.prompt(); 
  })

  clientSocket.on('error', error => {
    console.log(`Connection closed as server is not available`)
    process.exit(0)
  })

  readConsole.on('line', line => {
    clientSocket.write(line)
    readConsole.prompt(); 
  })
})