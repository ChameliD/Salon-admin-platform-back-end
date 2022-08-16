const mongoose=require("mongoose")

const hairStylish=mongoose.model("haireStylishList",new mongoose.Schema({
    
    
    name:{
        type:String,
        required:true,
    },
    
    resDate:{
        type:String,
        required:true
    },
    resTime:{
        type:String,
        required:true,
    }
}))

module.exports = hairStylish;