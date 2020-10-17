const express=require('express');
const router=express.Router();
const {requireSignIn,adminMiddleware}=require('../common-middleware')
const {addCategory,getCategory}=require('../controller/category')



router.post('/category/create',requireSignIn,adminMiddleware, addCategory);
router.get('/category/getcategory',getCategory);

module.exports=router;
