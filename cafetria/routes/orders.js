var express=require('express');
var fs=require('fs');
var router =express.Router();
var bodyParser=require('body-parser');
var bodyParserMid=bodyParser.urlencoded();
var multer=require('multer');

var mongoose=require('mongoose');
var uploadMid=multer({
    dest:"./public/imgs"
});

var usersModel=mongoose.model('users');
var orderModel=mongoose.model('orders');



router.get('/orders',function(req,resp){
usersModel.find({},function(err,result){
console.log(result);
resp.render('/orders',{data:result,msg:req.flash('msg')});//render
 });//find
   });//get






