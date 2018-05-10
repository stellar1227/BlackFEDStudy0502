const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
    isComplete : { type : Boolean, default : false, required : true},
    content : { type : String , require : true },
    createdAt : {type : Date , default : new Date, required: true},
    completedAt : {type : Date, default : null}
},{ collection : 'todo'});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
