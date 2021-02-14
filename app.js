     //==============notes=========> all methode [ all=>  get post put  patch delete ]


     const express=require('express')
     const app =express();
     const path =require('path')
     const mongo=require('mongoose')
     require('./model/dbconnectrion')
     // ====================== require routes ======================
     
     const customer=require('./routes/registration.routes')
     const registration=require('./routes/customer.routes')
     //const mongo =require('./dbconnectrion')




     // ====================== call function from routes ======================
      customer(app)    
      registration(app)
       
     app.all('*',(req,res)=>{ 
          res.send('not founf 404')

     })
     //====================== for To know the engine that I am running HBS======================
     app.set('view engine','hbs') 
     //======================for  Solve the static folder problem======================
     app.use('public',express.static(path.join(__dirname,'public')))
     app.use('upload',express.static(path.join(__dirname,'upload')))
     app.use('views',express.static(path.join(__dirname,'views')))
     //====================== for Transferring Buffer to String======================
     app.use(express.urlencoded({extended:false}))
     app.listen(3100)

     //====================== for connection bd by mongoose ======================

     mongo.connect('mongodb://localhost:27017/MacBook', {useNewUrlParser: true, useUnifiedTopology: true})

   

     console.log('server running ...........');

     // const test = require('./my module')()

