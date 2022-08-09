const express = require('express');
const clientController=require('../controller/clientController')
const userController=require('../controller/userController')

const router=express.Router();
const REG_ROUT=`/register`


//API for client
router.get(`${REG_ROUT}/:id`,function(req,res){
    userController.get(req,res)
})
router.post(`${REG_ROUT}`,function(req,res){
    userController.create(req,res)
})



module.exports = router
