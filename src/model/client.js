const mongoose=require("mongoose")

const client=mongoose.model("clientList",new mongoose.Schema({
    
    
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    }
}))

module.exports = client;