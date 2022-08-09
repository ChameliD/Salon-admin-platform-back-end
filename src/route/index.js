const { request } = require('express');
const express = require('express');
const clientController=require('../controller/clientController')
const userController=require('../controller/userController');
const user = require('../model/user');

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
        res.json({status:'ok'})
    }catch(e){
        console.log(e)
        res.json({status:'error',error:'Duplicate email'})
    }
})

//login
router.post(`${LOG_ROUT}`,async function(req,res){
    
        const u=await user.findOne({
            email:req.body.email,
            password:req.body.password,
        })
        
        if(u){
            return res.json({status:'ok'})
        }
        else{
            return res.json({status:'error',error:'Duplicate email'})
        }
   
    }
)




module.exports = router
