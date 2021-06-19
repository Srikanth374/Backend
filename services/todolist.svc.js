const todolistModel = require('../models/todolist.model');

class TodolistService {
    getAll(){
        return todolistModel.find();
    }
    getById(id) {
        return todolistModel.findById(id);
    }
    getByTitle(title) {
        return todolistModel.find({title});
    }
    add(data) {
        const task = new todolistModel(data);
        return task.save();
    }
    update(data, id) {
        return todolistModel.findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                status: data.status
            }
        }, {
            new: true
        });
    }
    delete(id) {
        return todolistModel.findByIdAndRemove(id);
    }
}

module.exports = new TodolistService();