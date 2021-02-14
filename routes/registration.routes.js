
const  path =require('path')

function registration(app)
{

     app.get('/registration',(req,res)=>{
          res.send('about')
     
     })
     return app 
}
module.exports=registration;