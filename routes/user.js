const Router=require('express').Router();
const RegisterController=require('../controller/RegisterController');
const loginController=require('./../controller/loginController');
const meController=require('./../controller/meController');
const auth=require('./../middlewares/auth');
//all routes here
Router.get('/register',RegisterController.reqister);
Router.post('/login',loginController.login);
Router.get('/me',auth,meController.me);

module.exports=Router;