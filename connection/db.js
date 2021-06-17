const mongoose=require('mongoose');
module.exports=mongoose.connect('mongodb://127.0.0.1:27017/restfulapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(
    console.log("connection done")
)
.catch(err=>{console.log(err)});


// module.exports=db;