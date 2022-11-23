const express = require('express')
const bodyParser = require('body-parser')
const v1ConsumeRouter = require('./v1/routes/consumeRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use('/api/v1/consume', v1ConsumeRouter)

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log('API escuchando en el puerto ' + port)
})