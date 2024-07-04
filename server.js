const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add-user', (req, res) => {
  res.send('user added ....')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})