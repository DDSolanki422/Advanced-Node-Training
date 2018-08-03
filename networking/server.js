const net = require('net')
const server = net.createServer()

const allSockets = []
let counter = 0

server.on('connection', socket => {
  allSockets.push(socket)
  console.log(socket.uniqueId)
  console.log(socket)
  socket.setEncoding('utf8')
  socket.on('data', data => {
    console.log('receiving messages from client')
    console.log(data)

    allSockets.forEach(socket => {
      socket.write(data)
    })
  })
  socket.on('error', err => {
    console.log('client disconnected')
    process.exit(0)
  })
  console.log('client connected')
})

server.listen(9000, () => {
  console.log('server listening at 9000 port')
})