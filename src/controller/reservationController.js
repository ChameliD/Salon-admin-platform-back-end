const reservation=require("../model/reservation")
module.exports.create=async function(req,res){
            
    const{hairStylish,client,resDate,resTimeStart,resTimeEnd,status}=req.body;
    try{
        const resp=await reservation.create({
           
            hairStylish:hairStylish,
            client:client,
            resDate:resDate,
            resTimeStart:resTimeStart,
            resTimeEnd:resTimeEnd,
            status:status,
           
    
        })
    
        res.send({
            success:true,
            data:resp,
        })
    }catch(e){
        console.log("Error: ",e)
    }
   
}

module.exports.get=async function(req,res){
    const{id}=req.params;
    try{
        console.log("variable__",id)
        const resp=await reservation.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}

module.exports.update=async function(req,res){
    const{id}=req.params;
    const{hairStylish,client,resDate,resTimeStart,resTimeEnd}=req.body;

    const resp=await reservation.findById(id);
    if(resp){
        resp.hairStylish=hairStylish,
        resp.client=client,
        resp.resDate=resDate,
        resp.resTimeStart=resTimeStart,
        resp.resTimeEnd=resTimeEnd,
        await resp.save();
        res.send()
    }
}