const express=require('express');
const router=express.Router();
const {signup,signin,requireSignIn}=require('../controller/auth')


router.post('/signup',signup);
router.post('/signin',signin);
router.post('/profile',requireSignIn,(re,res)=>{
res.status(200).json({user:"profile"})
})


module.exports=router