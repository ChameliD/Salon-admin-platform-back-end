const hairStylish=require("../model/hairStylish")
module.exports.create=async function(req,res){
            
    const{name,resDate,resTime}=req.body;
    try{
        const resp=await hairStylish.create({
           
            name:name,
            resDate:resDate,
            resTime:resTime,  
    
        })
    
        res.send({
            success:true,
            data:resp,
        })
    }catch(e){
        console.log("Error: ",e)
    }
   
}
//get all
module.exports.get=async function(req,res){
    const{id}=req.params;
    try{
        haireStylish.find({},(err,result)=>{
            if(err){
                res.json(err)
            }else{
                res.json(result)
            }
        })
    }catch(e){
        console.log("Error: ",e)
    }
    
}

//get byID
module.exports.getById=async function(req,res){
    const{id}=req.params;
    try{
        console.log("variable__",id)
        const resp=await hairStylish.findById(id);

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
    const{name,resDate,resTime}=req.body;

    const resp=await hairStylish.findById(id);
    if(resp){
        resp.name=name,
        resp.resDate=resDate,
        resp.resTime=resTime,
        
        await resp.save();
        res.send()
    }
}