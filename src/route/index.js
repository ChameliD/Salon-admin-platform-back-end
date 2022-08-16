const { request } = require('express');
const express = require('express');
const clientController=require('../controller/clientController')
const userController=require('../controller/userController');
const reservationController=require('../controller/reservationController')
const haireStylishController=require("../controller/hairStylishController")
const user = require('../model/user');
const client=require('../model/client')
const reservation=require('../model/reservation')
const haireStylish=require('../model/hairStylish')
const jwt=require('jsonwebtoken')

const router=express.Router();
const REG_ROUT=`/register`
const LOG_ROUT=`/login`
const CLIENT_ROUT=`/client`
const RES_ROUT=`/reservation`
const HAIRST_ROUT=`/hairStylish`


//API for client
router.get(`${CLIENT_ROUT}/all`,(req,res)=>{
    client.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

router.post(`${CLIENT_ROUT}`,async function(req,res){
   
    try{
        await client.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
        })
        res.json({status:'client data has pass'})
    }catch(e){
        console.log(e)
        res.json({status:'error',error:'client creation in error'})
    }
})

//API for reservation

router.get(`${RES_ROUT}/all`,(req,res)=>{
    reservation.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

router.put(`${RES_ROUT}/:id`,(req,res)=>{
    reservationController.update(req,res)
    
})


router.post(`${RES_ROUT}`,async function(req,res){
   
    try{
        await reservation.create({
            hairStylish:req.body.hairStylish,
            client:req.body.client,
            resDate:req.body.resDate,
            resTimeStart:req.body.resTimeStart,
            resTimeEnd:req.body.resTimeEnd,
            status:req.body.status,

        })
        res.json({status:'reservation data has pass'})
    }catch(e){
        console.log(e)
        res.json({status:'error',error:'reservation creation in error'})
    }
})


//API for haireStylish

router.get(`${HAIRST_ROUT}/all`,(req,res)=>{
    haireStylish.find({},(err,result)=>{
        if(err){
            res.json(err)
        }else{
            res.json(result)
        }
    })
})

router.put(`${HAIRST_ROUT}/:id`,(req,res)=>{
    haireStylishController.update(req,res)
    
})


router.post(`${HAIRST_ROUT}`,async function(req,res){
   
    try{
        await haireStylish.create({
            hairStylish:req.body.hairStylish,
            client:req.body.client,
            resDate:req.body.resDate,
            resTimeStart:req.body.resTimeStart,
            resTimeEnd:req.body.resTimeEnd,

        })
        res.json({status:'haireStylish data has pass'})
    }catch(e){
        console.log(e)
        res.json({status:'error',error:'haireStylish creation in error'})
    }
})


//API for create acount
router.get(`${REG_ROUT}/:id`,function(req,res){
    userController.get(req,res)
})


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
