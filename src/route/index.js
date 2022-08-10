const { request } = require('express');
const express = require('express');
const clientController=require('../controller/clientController')
const userController=require('../controller/userController');
const user = require('../model/user');
const jwt=require('jsonwebtoken')

const router=express.Router();
const REG_ROUT=`/register`
const LOG_ROUT=`/login`


//API for client
router.get(`${REG_ROUT}/:id`,function(req,res){
    userController.get(req,res)
})

//create acount
router.post(`${REG_ROUT}`,async function(req,res){
    //userController.create(req,res)
   
    try{
        await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        })
        res.json({status:'sign in data has pass'})
    }catch(e){
        console.log(e)
        res.json({status:'error',error:'sign in error'})
    }
})

//login
router.post(`${LOG_ROUT}`,async function(req,res){
    
        const u=await user.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        
        if(u){
                const token=jwt.sign({
                    name:u.name,
                    email:u.email,

                },'secret123'
            )
            return res.json({status:'login data has pass',u:token})
        }
        else{
            return res.json({status:'error',error:'login error',u:false})
        }
   
    }
)



module.exports = router
