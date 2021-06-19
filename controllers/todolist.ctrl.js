const todolistService = require('../services/todolist.svc');
const constants = require('../constants');
const config = require('../config');

class TodolistCtrl {
    async get(req, res) {
        try {
            const tasks = await todolistService.getAll();
            if (tasks) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({data: tasks});
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Tasks not found' });    
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id;
            const task = await todolistService.getById(id);            
            if (task) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({data: task});
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Product not found' });    
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async insert(req, res) {
        try {
            const tasks = await todolistService.getByTitle(req.body.title);
            if (tasks && tasks.length > 0) {
                res.status(constants.STATUS_CODES.CONFLICT);
                res.send({ error: 'conflict', errorDescription: 'Task already exist' }); 
            } else {
                const insertedTask = await todolistService.add(req.body);
                res.status(constants.STATUS_CODES.CREATED);
                res.json({data: insertedTask});
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async delete(req, res) {
        try {
            const task = await todolistService.delete(req.params.id);
            res.status(constants.STATUS_CODES.SUCCESS);
            res.json({data: task});
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
}

module.exports = new TodolistCtrl();