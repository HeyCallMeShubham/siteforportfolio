
const mongoose = require('mongoose');


const ClientSchema = mongoose.Schema({

    
  name:String,
  email:String,
  password:String,
  image:String

})




 const ClientModel = mongoose.model('webClient', ClientSchema)


module.exports = ClientModel


















