const express = require('express');
const Group = require('../models/groups');
const User = require('../models/users');
const router = express.Router();


router 
    .post('/info', async (req, res) => {
        try {
            const groups = await Group.getGroupInfo(req.body.group_name);
            res.send(groups);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })
    .post('/create', async (req, res) => {
        try {
            const user = req.body.user_id;
            const add = await Group.addGroup(req.body.group_name, user);
            res.send(add);
        } catch(err) {
            res.status(401).send({message: err.message});
        }

    })


    module.exports = router;
