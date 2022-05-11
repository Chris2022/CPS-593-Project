const express = require('express');
const Group = require('../models/groups');
const User = require('../models/users');
const router = express.Router();


router 
    .get('/groups', async (req, res) => {
        try {
            const groups = await Group.getGroupInfo(req.body);
            console.log(groups + "HEREEEEEEEEEEE");
            res.send(groups);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })
    .post('/groups', async (req, res) => {
        try {
            const user = await User.getCurrentUser();
            const add = await Group.addGroup(req.body, user);
            console.log(add+ " EHEHEEHEHEHEHE H");
            res.send(add);
        } catch(err) {
            res.status(401).send({message: err.message});
        }

    })


    module.exports = router;
