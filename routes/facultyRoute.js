const express = require('express');

const router = express.Router();

///  /faculty/allClasses
///  /faculty/:class/result

router.use((req, res, next)=>{
    console.log(req.url);
    next();
})

router.route('/allClasses')
.get((req,res)=>{
    res.send("faculty get method called");
})
.post((req,res)=>{
    res.send("faculty post method called");
})

router.all('/:class/result', (req,res)=>{
    console.log(req.params.class);
    res.send(`faculty asking result of class ${req.params.class}`)
})

routerHeight.get('/', (req,res)=>{

})


module.exports = router;