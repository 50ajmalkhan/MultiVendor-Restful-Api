const express=require('express');
const router=express.Router();

const {validateSignUpRequest,validateSignInRequest,isRequestValidated}=require("../validators/auth");
const {signup,signin}=require('../controller/auth')


router.post('/signup',validateSignUpRequest,isRequestValidated,signup);
router.post('/signin',validateSignInRequest,isRequestValidated,signin);
// router.post('/profile',requireSignIn,(re,res)=>{
// res.status(200).json({user:"profile"})
// })


module.exports=router