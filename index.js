const express = require('express')
const path = require('path')
const app = express()

 app.get('/shop',(req,res)=>{
    //the way we specified files to be treateed as is static files
    res.sendFile(path.join(__dirname,'client/shop.html'))
 })




// Run server
app.listen(4000,()=>{
    console.log('Server listening on port 4000')
})