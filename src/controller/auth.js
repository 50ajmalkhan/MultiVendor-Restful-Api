const User=require('../model/users')

exports.signup=(req,res)=>{

    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(user)
        {
            return res.status(200).json({message:"User Allready Registered"});
        }
        const {firstName,lastName,email,password}=req.body;
        const _user=new User({firstName,lastName,email,password,userName:Math.random().toString()});
        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({message:"someThing Went Wrong"});
            }
            if(data){
                return res.status(201).json({message:"User Created Successfully..!"})
            }
        });
    })
} ;