const express = require('express')
const path = require('path')
const { staff, quotes, images } = require('./data')

const server = express()
const port = process.env.PORT || 3001

server.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

server.get('/api/staff', (_, res) => {
  const people = Object.keys(staff)
  res.json(people)
})

server.get('/api/staff/:name', (req, res) => {
  const { name } = req.params
  const person = staff[name]
  
  if (person) {
    res.json(person)
  } else {
    res.json({ error: `name "${name}" does not exist` })
  }
})

server.get('/api/quote/:name', (req, res) => {
  const { name } = req.params
  const quote = quotes[name]

  if (quote) {
    res.json(quote)
  } else {
    res.json({ error: `name "${name}" does not exist` })
  }
})

server.get('/api/image/:name', (req, res) => {
  const { name } = req.params
  const image = images[name]

  if (image) {
    res.json(image)
  } else {
    res.json({ error: `name "${name}" does not exist` })
  }
})

server.get('*', (_, res) => {
  res.json({ error: `no api endpoint exists here` })
})

server.listen(port, () => {
  console.log(`The server is listening for requests on port ${port}.`)
})
