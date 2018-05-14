const { Todo } = require('../../model');

exports.find = (req, res) => {
    res.send('<h1>여긴 투두야</h1>')
}

exports.findOne = (req, res) => {
    const _id = req.params.id;
    Todo.find({_id}).exec((error, data) => {
        if (error) throw new Error(error);
        res.send(`<pre>${data}</pre>`)
    })
}

exports.create = (req, res) => {
    const data = req.body;
    const todo = new Todo(data);

    todo.save((error, data) => {
        if (error) throw new Error(error);
        res.send(`<pre>${data}</pre>`)
    })
}


exports.update = (req, res) => {
    const _id = req.params.id;
    const data = req.body;

    Todo.update({_id}, data).exec((error, data) => {
        if (error) throw new Error(error);
            res.send(`<pre>${data}</pre>`)
    })
}

exports.destroy = (req, res) => {
    const _id = req.params.id;
    Todo.remove({_id}).exec((error, data) => {
        if (error) throw new Error(error);

        res.send(`<pre>${data}</pre>`)
    })
}

