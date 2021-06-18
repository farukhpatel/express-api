const Router=require('express').Router();
const RegisterController=require('../controller/RegisterController');
const loginController=require('./../controller/loginController');
//all routes here
Router.get('/register',RegisterController.reqister);
Router.post('/login',loginController.login);

module.exports=Router;