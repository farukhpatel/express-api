const jwt=require('jsonwebtoken');
const SECRET_KEY=require('../config/index');

class JwtService{
    static sign(payload,time='60s',secret=String(SECRET_KEY)){
        return jwt.sign(payload,secret,{expiresIn:time});
    }
}
module.exports=JwtService;