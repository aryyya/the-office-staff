const express = require('express')

const server = express()
const port = process.env.PORT || 3001

server.get('/', (req, res) => {
  console.log('Hello, world!')
})

server.listen(port, () => {
  console.log(`The server is listening for requests on port ${port}.`)
})
