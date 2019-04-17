var express = require("express");
var bodyParser = require('body-parser')
var app = express();
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/1955_api');
var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean}
}, {timestamps: true})
mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

const server = app.listen(8000, function(){
    console.log('listening on port 8000');
})

app.get('/tasks', async function(request,response){
    let task = await Task.find({})

    response.json({
        message: 'Success',
        data: task
    })
})
app.get("/:num", async function(request,response){
    
    let task = await Task.findById(request.params.num,function(err,task){
        
        if(err){
            response.json({
                message: 'Error',
                data: err
            })
        }else{
            response.json({
                message: 'Success',
                data: task
            })
        }
    })
})

app.post('/', async function(request,response){
    task = new Task()
    
    task.title = request.body.title
    task.description = request.body.description || "";
    task.completed = false;
    await task.save()
    .then(v =>{
        response.json({
            message: 'Success',
            data: v
        })
    })
    .catch(e =>{
        response.json({
            message: 'Error',
            data: e
        })
    })
    
})

app.put('/:num', async function(request, response){
    task = await Task.findById(request.params.num, async function(err,data){
        if(err){
            console.log("error updating ",num, 'is',err)
        }else{
            return data
        }
        
    })
    
        task.title = request.body.title
        task.description = request.body.description
        task.completed = request.body.completed
        await task.save()
        .then(v =>{
            
            response.json({
                message: 'Success',
                data: v
            })
        })
        .catch(e =>{
            response.json({
                message: 'Error',
                data: e
            })
        })
})

