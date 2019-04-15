var express = require('express')
var app = express()

app.use(express.static(__dirname +'/public/dist/public'))

const server = app.listen(8000, function(){
    console.log('Listening on port 8000')
})