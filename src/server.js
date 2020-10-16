const express =require('express');
const app =express();
const env =require('dotenv').config();
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const userRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');

mongoose.connect(
    process.env.MongoURL,
    {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}
).then(()=>{
    console.log('DataBase Connected')
});

app.use(bodyParser.json());

app.use('/api',userRoutes);
app.use('/api',adminRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});