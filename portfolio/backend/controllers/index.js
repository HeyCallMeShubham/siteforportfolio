
const ClientModel = require('../models/ClientModel')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')



 const registerUser =async(req, res) =>{

    const {name, email, password, image} = req.body

    try{

  
         const hashpass = await bcrypt.hash(password, 10)
      
         const user = await ClientModel.create({
      
           name:name,
           email:email,
           password:hashpass,
           image:image
      
         })
         
    
         const token = await jwt.sign({user:user,name:user.name, id:user._id}, process.env.SECRET, {expiresIn:'2d'});
  
          res.cookie('token', token, {sameSite:'none', secure:true})
  
         res.status(200).json({token:token, message:"registered successfully", userdetail:{name:user.name, email:user.email}})
         
  
      }catch(err){

      console.log(err)

      }
  
  
}




 const login = async(req, res)=>{

     try{
         
         const {email, password} = req.body
       
   
      const findEmail = await ClientModel.findOne({email:req.body.email})
  
      if(findEmail){
        
      //  console.log(findEmail)
    
        const token = await jwt.sign({findEmail:findEmail, name:findEmail.name, email:findEmail.email, id:findEmail._id}, process.env.SECRET, {expiresIn:'2d'})

        res.cookie('token', token)
        
        res.status(200).json({token:token, message:"registered successfully", userdetail:{name:findEmail.name, email:findEmail.email, id:findEmail._id}})
 
      }else{
  
       res.json({message:"sorry no user with this email id "})          
  
      }
  

  
    }catch(err){
  
      console.log(err)
  
     res.send(err)
  
    }



}






const auth = (req, res) =>{

 try{

   const auth = req.cookies.token

  const token = jwt.verify(auth, "secret", {expiresIn:'2d'})

  if(token){

    console.log('yes true')

  }else{

    console.log('no sorry')

  }

 }catch(err){




 }



}


















module.exports = {

registerUser,
login,
auth


}









