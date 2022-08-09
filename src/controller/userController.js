const user=require("../model/user")
module.exports.create=async function(req,res){
            
    const{name,email,password}=req.body;
    try{
        const resp=await user.create({
           
            name:name,
            email:email,
            password:password,
           
    
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
        const resp=await user.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}