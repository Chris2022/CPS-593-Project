const express = require('express');
const Group = require('../models/groups');
const router = express.Router();


router 
    .get('/', async (req, res) => {
        try {
            const groups = await Group.getGroups();
            res.send(groups);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })
    .post('/', async (req, res) => {
        try {
            const add = await Group.addGroup(req.body);
            res.send(add);
        } catch(err) {
            res.status(401).send({message: err.message});
        }

    })


    module.exports = router;
