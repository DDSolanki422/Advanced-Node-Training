const http = require('http')
const pid = process.pid

const server = http.createServer()

server.on('request', (req, res) => {
  for(let i=0; i<1e7;i++);
  res.end(`handled by process ${pid}`)
})

server.listen(3010, () => {
  console.log(`started process ${pid}`)
})