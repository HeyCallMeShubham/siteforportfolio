
const express = require('express');

const dotenv = require('dotenv').config()

const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');


const cookieParser = require('cookie-parser')
const path = require('path')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const ws = require('ws')

const mongoose = require('mongoose');



const router = require('./routes/routes');
const { userInfo } = require('os');



mongoose.connect(process.env.MONGODB)




  app.use(cors({

    credentials:true,
    origin:'http://localhost:3000'
  
  }))
  


  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}))
  //app.use(express.static(path.join(__dirname, '../client/build')));
  app.use(cookieParser())
  

  app.use(express.static(path.join(__dirname, '../frontend/build')))

   app.get('*', function(req, res){

     res.sendFile(path.join(__dirname, '../frontend/build/index.html'))

   })


 app.use('/', router)

  









const server = app.listen(5400, ()=> console.log('5400'))




const wss = new ws.WebSocketServer({server})


wss.on('connection', (connection, req) =>{

 
   connection.on('message', (message)=>{
  
     const messageSentByClient = JSON.parse(message);

     //console.log(messageSentByClient)

  [...wss.clients].filter(c => c.userid === message.recipient )
  .forEach(c => c.send(JSON.stringify({

      text:"hello",
      recipient:"666ybb"

  })))

   })



})









{/*



  const cookies = req.headers.cookie

   if(cookies){

    const tokenCookieString = cookies.split(';').find(str => str.startsWith('token='))

     if(tokenCookieString){

      const token = tokenCookieString.split('=')[1];

      if(token){


       jwt.verify(token, "secret", {}, (err, userdata) =>{

         if (err) throw err

         const {id, name} = userdata

         connection.id = id;
         connection.name = name

         console.log(connection.name)


       })

      }


     }



   }



   connection.on('message', (message) =>{

    console.log('message')

  });

 




*/}


























{/*






  try{


    const userToken = req.headers.cookie

    console.log(userToken)


    ws.on('message', (message) =>{
  
     const ws = JSON.parse(message);
   
     console.log(ws);

      [...wss.clients].map(c => console.log(c, 'ghjijfdk'));

      [...wss.clients].filter(c => c.userid === ws.userid)
      .forEach(c => c.send(JSON.stringify({

         text:"shubham",
         userid:"dalle"


      })));


      console.log(userToken)
  
    })
  

  
  ws.on('close', () => {
  
     console.log('Client disconnected');
    
  });



  }catch(err){

    console.log(err)

  }








*/}












