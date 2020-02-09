const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

var toDoItem= [
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.use(morgan('dev'));

app.get('/', function(req,res){
res.json('');
});

app.get('/api/TodoItems', function(req,res){
res.json(toDoItem);
});

app.get('/api/TodoItems/:number', function(req,res){
    for(var i=0;i<toDoItem.length;i++){
        if(toDoItem[i].todoItemId==req.params.number){
            res.json(toDoItem[i]);
        }
    }
    });
    
app.use(bodyParser.json());
app.post('/api/TodoItems/', function(req,res){
    res.json(201,req.body);
});

app.delete('/api/TodoItems/:number', function(req,res){
    for(var i=0;i<toDoItem.length;i++){
        if(toDoItem[i].todoItemId==req.params.number){
            res.json(toDoItem[i]);
        }
    }
})

console.log('server is starting ')

module.exports = app;
