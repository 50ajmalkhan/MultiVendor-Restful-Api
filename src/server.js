const express =require('express');
const app =express();
const env =require('dotenv').config();
const bodyParser=require("body-parser");
const mongoose=require('mongoose');

mongoose.connect(
    process.env.MongoURL,
    {useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    console.log('DataBase Connected')
});

app.use(bodyParser.json());

app.get('/',(req,res,net)=>{
    res.status(200).json({message:"Hello From Server"});
});
app.post('/data',(req,res,net)=>{
    res.status(200).json({message:req.body});
})



app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});