const express= require('express');
require("dotenv").config();
const bodyParser=require('body-parser');
const dbConnection=require('./db/connection');
const server=express();
const router =require("./route/");
var cors = require('cors')

const port= process.env.PORT || 3002;
server.use(cors());
const { createProxyMiddleware } = require('http-proxy-middleware');
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))
server.use("/api",router,createProxyMiddleware({ 
    target: 'http://localhost:3000', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

dbConnection();
server.listen(port,function(){
    console.log('server started at port:',port);
})