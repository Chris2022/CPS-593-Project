const express = require('express');
const Contact = require('../models/contact');
const router = express.Router();


router
    .post('/contact', async (req, res) => {
        try {
            const contact = await Contact.sendMessage(req.body);
            console.log("Contact sent!");
            res.send(...contact);
        } catch(err) {
            res.status(401).send({message: err.message});
        }
    }
    )
    

    module.exports = router;
