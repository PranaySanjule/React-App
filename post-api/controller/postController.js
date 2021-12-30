const express = require('express')
const { PostContent } = require('../models/postContent')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId   

router.get('/', (req, res) => {
    PostContent.find((err,docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all posts : ',JSON.stringify(err,undefined,2))
    })
})

router.post('/',(req,res) => {
    var newPost = new PostContent ({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    })

    newPost.save((err,docs) => {
        if(!err) res.send(docs)
        else console.log('Error while creating new post : ',JSON.stringify(err,undefined,2))
    })
})

router.patch('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('No record with given id :' , req.params.id)
    }

    var updatedPost = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content
    } 
     
    PostContent.findByIdAndUpdate(req.params.id, { $set: updatedPost }, {new: true}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while updating a post : ', JSON.stringify(err, undefined, 2))
    })

})


router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('No record with given id : ', req.params.id)
    }

    PostContent.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while deleting a post : ', JSON.stringify(err, undefined, 2))
    })
})

module.exports = router