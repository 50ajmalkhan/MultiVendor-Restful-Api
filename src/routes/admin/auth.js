const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../../controller/admin/auth')
const { validateSignUpRequest, validateSignInRequest, isRequestValidated } = require("../../validators/auth");
const { requireSignIn } = require('../../common-middleware/index')

router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/admin/signout', signout);

// router.post('/profile',requireSignIn,(re,res)=>{
// res.status(200).json({user:"profile"})
// })


module.exports = router