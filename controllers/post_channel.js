const db_channel = require('../models/channel')
module.exports=(req,res)=>{
   
// res.send('message Created')
db_channel.create(req.body).then((data)=>{
    res.send(data)
}).catch((err)=>{
    res.send(err)
})
}