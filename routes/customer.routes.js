    const path=require('path')
  
    




    function customer(app)
    {

          app.get('/',(req,res)=>
          {

         res.sendFile(path.join(__dirname,'..','/views','index.html'))
       

         
          })

    }


     