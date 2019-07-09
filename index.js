const express = require('express')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
require('./db')

app.get('/api/messages',require('./controllers/get_messages')) 
app.post('/api/messages',require('./controllers/post_message'))
app.post('/api/channels',require('./controllers/post_channel'))
app.get('/api/channels',require('./controllers/get_channels')) 
app.post('/api/signup', require('./controllers/signup'))



// Run server
require('dotenv').config()
app.listen(process.env.PORT,()=>{
    console.log(`Server Listening Port ${process.env.PORT}`)
    
})