const express=require('express');
const router=express.Router();
const {signup}=require('../controller/auth')

router.post('/signin',(req,res,next)=>{

});
router.post('/signup',signup);


module.exports=router