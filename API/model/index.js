const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    isDone : { type : Boolean, default : false, required : true},
    content : { type : String , require : true },
    hash : {type : String , default : "#미분류", required: true},
},{ collection : 'todo'});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
