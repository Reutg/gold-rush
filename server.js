const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', function(request,response){
    console.log("The server is running")
})


const port = 3000
app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})