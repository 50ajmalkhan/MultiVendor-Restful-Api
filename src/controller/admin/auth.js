const User=require('../../model/users');
const jwt=require('jsonwebtoken');
const env=require('dotenv').config();

exports.signup=(req,res)=>{

    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(user)
        {
            return res.status(200).json({message:"Admin Already Registered"});
        }
        const {firstName,lastName,email,password}=req.body;
        const _user=new User({firstName,lastName,email,password,userName:Math.random().toString(),role:"admin"});
        _user.save((error,data)=>{
            if(error){
                return res.status(400).json({message:"someThing Went Wrong"});
            }
            if(data){
                return res.status(201).json({message:"Admin Created Successfully..!"})
            }
        });
    })
} ;

exports.signin=(req,res)=>{

    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error){res.status(400).json({message:error})}
        if(user){
           if(user.authenticate(req.body.password))
           {
               const token =jwt.sign({_id:user.id},process.env.JWT_SECRET,{expiresIn:'1h'});
               const {_id,firstName,lastName,email,role,fullName}=user;
               res.status(200).json({
                   token,
                   user:{
                      _id, firstName,lastName,email,role,fullName
                   }
                
                })
           }else{
               res.status(400).json({
                   message:"Invalid Passowrd"
               })
           }

        }
        else{
            return res.status(400).json({message:"something went wrong"})
        }
    })

}
exports.requireSignIn=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    const user=jwt.verify(token,process.env.JWT_SECRET);
    req.user=user;
    next();
}