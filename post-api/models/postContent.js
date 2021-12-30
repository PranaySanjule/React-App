const mongoose = require('mongoose')

var PostContent = mongoose.model('PostContent',{
    title : {type:String},
    author : {type:String},
    content : {type:String},
},'PostContent')

module.exports = { PostContent }