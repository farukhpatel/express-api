const User = require("../model/user");

const meController={
    async me(req,res,next){
      try {
          const  user=await User.find({_id:req.user.id}); 
           //req,user._id received from auth middleware
        //    console.log(user);
        res.json({userData:user});
      } catch (error) {
          return next(error);
      }
    }
}
module.exports=meController;