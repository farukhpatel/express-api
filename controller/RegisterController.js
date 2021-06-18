const joi = require('joi');
const CustomErrorHandle = require('./../middlewares/CustomErrorHandler');
const User=require('./../model/user');
const bcrypt=require('bcrypt');
const JwtService = require('../services/JwtService');
// console.log(CustomErrorHandle);
const registerController = {
    //for register user
    async reqister(req, res, next) {
        console.log(User);
        const schema = joi.object({
            name: joi.string().min(3).max(10).required(),
            email: joi.string().email({ tlds: { allow: ['com', 'net'] } }),
            password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]')).required(),
            confirm_password: joi.ref('password')
        });
        // console.log(req.body);
        const { error } = schema.validate(req.body); //you can passobject
        if (error) {
            // res.json({'error':error.message});
            //throw error;//it can work in sync function but not work in async
            return next(error); //through error in midddleware

        }
        //check email if already exist
        const exist = "farukhpatel@gmail.com";
        try {
            if (exist === req.body.email) {
                return next(CustomErrorHandle.alreadyExist("This email already exist"))
            }

        } catch (error) {
            return next(error);
        }
        let access_toen;
       try {
        const hashPassword=await bcrypt.hash(req.body.password,10);
        console.log(hashPassword);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        const result=await user.save(req.body);
        access_toen=JwtService.sign({'id':result._id,'role':result.role});

       } catch (error) {
           return next(error);
       }
        res.json({ 'token': access_toen });
    }
}
module.exports = registerController;