const {DEBUG_MODE}=require('../config');
const {ValidationError}=require('joi')
const errorHandler=(err,req,res,next)=>{
    console.log(ValidationError);
    console.log(DEBUG_MODE);
    let statusCode=500;
    let data={
        message:'Internal server error',
        ...(DEBUG_MODE==="true")&&{origanError:err.message}
    }
    if(err instanceof ValidationError){
        statusCode=422;
        data={
            message:err.message,
        }
    }
    res.status(statusCode).json(data);

}
module.exports=errorHandler;