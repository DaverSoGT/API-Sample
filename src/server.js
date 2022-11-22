const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  // res.json({ mensaje: 'Hello World!'})
  res.send("<h2>It's Working!</h2>")
})

app.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

app.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

app.del('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log('API escuchando en el puerto ' + port)
})