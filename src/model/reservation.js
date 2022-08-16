const mongoose=require("mongoose")

const reservation=mongoose.model("reservationList",new mongoose.Schema({
    
    
    hairStylish:{
        type:String,
        required:true,
    },
    client:{
        type:String,
        required:true,
    },
    resDate:{
        type:String,
        required:true
    },
    resTimeStart:{
        type:String,
        required:true,
    },
    resTimeEnd:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
}))

module.exports = reservation;