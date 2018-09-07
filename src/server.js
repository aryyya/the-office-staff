// modules

const express = require('express')
const path = require('path')
const { staff, quotes, images } = require('./data')

// server

const server = express()
const port = process.env.PORT || 3001

// middleware

server.use(
  express.static('public')
)

server.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
})

// routes

server.get('/', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

server.get('/api/staff', (_, res) => {
  const ids = Object.keys(staff)
  res.json(ids)
})

server.get('/api/staff/:id', (req, res) => {
  const { id } = req.params
  const employee = staff[id]
  
  if (employee) {
    res.json(
      copyObjectProperties(
        employee,
        'name',
        'id',
        'aliases',
        'gender'
      )
    )
  }
  
  else {
    res.status(404).json({ error: `id "${id}" does not exist` })
  }
})

server.get('/api/quote/:id', (req, res) => {
  const { id } = req.params
  const employee = staff[id]

  if (employee) {
    res.json(
      copyObjectProperties(
        employee,
        'quotes'
      )
    )
  }
  
  else {
    res.status(404).json({ error: `id "${id}" does not exist` })
  }
})

server.get('/api/image/:id', (req, res) => {
  const { id } = req.params
  const employee = staff[id]

  if (employee) {
    res.json(
      copyObjectProperties(
        employee,
        'images'
      )
    )
  }
  
  else {
    res.status(404).json({ error: `id "${id}" does not exist` })
  }
})

server.get('*', (_, res) => {
  res.status(404).json({ error: `no api endpoint exists here` })
})

// start

server.listen(port, () => {
  console.log(`The server is listening for requests on port ${port}.`)
})

// utility

const copyObjectProperties = (object, ...properties) => (
  properties.reduce((newObject, property) => {
    newObject[property] = object[property]
    return newObject
  }, {})
)
