const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Assign-5-DB',{useNewUrlParser:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : '.JSON.stringify(err, undefined, 2))
    })