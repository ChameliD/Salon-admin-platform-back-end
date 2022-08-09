const express = require('express');
const clientController=require('../controller/client')

const router=express.Router();
const CLIENT_ROUTES=`/client`


//API for client
router.get(`${CLIENT_ROUTES}/:id`,function(req,res){
    clientController.get(req,res)
})
router.post(`${CLIENT_ROUTES}`,function(req,res){
    clientController.create(req,res)
})

