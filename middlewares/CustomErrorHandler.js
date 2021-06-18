class CostomErrorHandler extends Error{
    constructor(status,message) {
    super();
        this.status = status;
        this.message = message;
    }
    
    static alreadyExist(message){
        return new CostomErrorHandler(409,message);
    }
    static emailNotExit(message="Username or Password are wrong!"){
        return new CostomErrorHandler(401,message);
    }
}
module.exports = CostomErrorHandler;
// module.exports=alreadyExist;