const express =require('express');
const app =express();
const env =require('dotenv').config();
const bodyParser=require("body-parser");
const mongoose=require('mongoose');
const userRoutes=require('./routes/auth');
const adminRoutes=require('./routes/admin/auth');
const CategoryRoutes=require('../src/routes/category');
const productRoutes=require('../src/routes/product')

mongoose.connect(
    process.env.MongoURL,
    {useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}
).then(()=>{
    console.log('DataBase Connected')
});

app.use(bodyParser.json());

app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',CategoryRoutes);
app.use('/api',productRoutes);



app.listen(process.env.PORT,()=>{
    console.log(`Server Is Running On Port ${process.env.PORT}`);
});