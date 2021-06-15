const joi=require('joi');

const registerController={
    //for register user
    async reqister(req,res,next){
        const schema=joi.object({
            name:joi.string().min(3).max(10).required(),
            email:joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password:joi.string().pattern(new RegExp('^[a-zA-Z0-9]')).required(),
            confirm_password:joi.ref('password')
        });
        // console.log(req.body);
        const {error}=schema.validate(req.body); //you can passobject
        if(error){
            // res.json({'error':error.message});
            //throw error;//it can work in sync function but not work in async
            return next(error); //through error in midddleware

        }
        res.json({msg:"controller part done"});
    }
}
module.exports=registerController;