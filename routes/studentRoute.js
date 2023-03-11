const express = require('express');

const router = express.Router();

router.get('/allClasses', (req, res)=>{
    res.send("you have math, Physics and Music class");
});

router.route('/result')
    .get((req,res)=>{
        res.send("student result get Method called");
    })
    .post((req,res)=>{
        res.send("student result Post Method called");
    })

module.exports = router;