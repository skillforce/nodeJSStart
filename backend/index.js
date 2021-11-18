const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const users = require('./routes/users')
const app = express()
const port = 7542


mongoose.connect('mongodb://localhost:27017/users')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {

})







app.use(cors());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/users', users)

app.get('/tasks', (req, res) => {
    res.send('tasks')
})

app.use((req, res) => {
    res.send(404)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


