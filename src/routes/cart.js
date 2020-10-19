const express=require('express');
const router=express.Router();
const {requireSignIn,adminMiddleware}=require('../common-middleware')
const {addItemToCart}=require('../controller/cart')



router.post('/user/cart/addtocart',requireSignIn,adminMiddleware, addItemToCart);


module.exports=router;
