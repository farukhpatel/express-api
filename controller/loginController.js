const User=require('./../model/user');
const bcrypt=require('bcrypt');
const CustomErrorHandler=require('./../middlewares/CustomErrorHandler');
const JwtService=require('./../services/JwtService');

const loginController={
   async login(req,res,next){
       //logic for login
       const userDetail=await User.findOne({'email':req.body.email});
       if(!userDetail){
           console.log("not come");
           return next(CustomErrorHandler.emailNotExit());
       }
       const result=await bcrypt.compare(req.body.password,userDetail.password); //first argument is password and second argument is hashpassword
       console.log(result);
       if(!result){
          return next(CustomErrorHandler.emailNotExit());
       }
       //if email or password both are correct
      const access_toen=JwtService.sign({'id':userDetail._id,'role':userDetail.role});
      res.json({'access_login':access_toen});
   }
}
module.exports=loginController;