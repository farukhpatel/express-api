const express=require('express');
const app=express();
const errorHandler=require('./middlewares/errorHandler');


//database connection
const db=require('./connection/db');
//for json data read in from req
app.use(express.json());


//configration of router
const userRouter=require('./routes/user');
app.use('/api',userRouter);

//use middleware
app.use(errorHandler);

//for index.js file
require('./config/index');
app.listen(PORT,()=>{
    console.log("Rest api launched");
    console.log(`listening on port ${PORT}`);
})