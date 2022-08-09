const client=require("../model/client")
module.exports.create=async function(req,res){
            
    const{firstName,phoneNumber,lastName,email}=req.body;
    try{
        const resp=await client.create({
           
            firstName:firstName,
            lastName:lastName,
            phoneNumber:phoneNumber,
            email:email,
           
    
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
        const resp=await client.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}