require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var postContentRoutes = require('./controller/postController')

var app = express();
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(3001,()=>console.log('Server started at : 3001'))

app.use('/postContents',postContentRoutes)