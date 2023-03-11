const express = require('express');
const studentRouter = require('./routes/studentRoute');
const facultyRouter = require('./routes/facultyRoute');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/student', studentRouter);
app.use('/faculty', facultyRouter);

app.get('/', (req,res)=>{
    
})


app.listen( PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
});
