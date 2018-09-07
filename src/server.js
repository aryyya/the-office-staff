const express = require('express')
const path = require('path')

const server = express()
const port = process.env.PORT || 3001

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

server.listen(port, () => {
  console.log(`The server is listening for requests on port ${port}.`)
})
