const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router 
    .get('/', async (req, res) => {
        try {
            const tasks = await Task.getTasks();
            res.send(tasks);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })
    .post('/', async (req, res) => {
        try {
            const task = await Task.addTask(req.body);
            res.send(task);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })

    module.exports = router;
