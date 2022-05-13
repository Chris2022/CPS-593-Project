const express = require('express');
const Group = require('../models/groups');
const router = express.Router();


router
    .post('/all', (req, res) => {
        try {
            const all = Group.getAllGroups(req.body.user_id);
            res.send(all);
        } catch (err ) {
            res.status(401).json({ message: err.message });
        }
    } )
    .post('/info', async (req, res) => {
        try {
            const user = req.body.user_id;
            const groups = await Group.getGroupInfo(user);
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
    .delete('/delete', async (req, res) => {
        try {
            console.log("DELETE GROUP")
            const user = req.body.user_id;
            const deleteGroup = await Group.deleteGroup(req.body.group_name, user);
            res.send(deleteGroup);
        }
        catch(err) {
            res.status(401).send({message: err.message});
        }
    })


    module.exports = router;
