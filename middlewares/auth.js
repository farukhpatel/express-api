const CustomErrorHandler=require('./CustomErrorHandler');
const JWtServices=require('./../services/JwtService');
const auth=async(req,res,next)=>{
    let token=req.headers.bearer;
    if(!token){
        return next(CustomErrorHandler.tokenError()); 
    }
    try {
        const {id,role}= await JWtServices.verify(token);
        // console.log(id);
        // console.log(role);
       const user={
           id,role
       }
       req.user=user;
       next();
        
    } catch (error) {
        return next(error);
    }


}
module.exports=auth;