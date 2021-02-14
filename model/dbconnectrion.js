const mongo=require('mongoose')
     mongo.connect('mongodb://localhost:27017/MacBook', 
     {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useNewUrlParser:true,
           useFindAndModify:true
          })
const user=mongo.model('User',{
     userName:{type:String},
     password:{type:String}
})
const data =new user({userName:'ahmed',password:'123546'})
data.save()