const Router=require('express').Router();
const RegisterController=require('../controller/RegisterController')
//all routes here
Router.get('/register',RegisterController.reqister);

module.exports=Router;