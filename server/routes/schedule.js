const express = require('express');
const Schedule = require('../models/schedule');
const router = express.Router();


router
    .get('/', async (req, res) => {
        try {
            const schedules = await Schedule.getSchedules();
            res.send(schedules);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    })
    
    module.exports = router;
