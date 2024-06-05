const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 7000
app.use(bodyParser.json())
app.listen(port, () => {
    console.log(`Listening on port ${port} at http://localhost:${port}`)
})
app.get('/', (req, res) => {
    res.send(`Hello, Let's start!`)
})

//CRUD operations on users DB
const usersRoutes = require('./routes/users.js')
app.use('/users', usersRoutes)