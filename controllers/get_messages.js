const db_message = require('../models/message')

module.exports=(req,res)=>{
    db_message.find({}).populate('channel').then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}
// module.exports=(req,res)=>{
//     db_message.find({}).populate({
//         path:'channel',
//         select: 'name'
//     }).then((data)=>{
//         res.send(data)
//     }).catch((err)=>{
//         res.send(err)
//     })
// }

//sorting by date .sort('date') to reverse it sort('-date')