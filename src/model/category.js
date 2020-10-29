const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const CategorySchema=new mongoose.Schema({

         name:{
             type:String,
             required:true,
             trim:true
         },
         slug:{
            type:String,
            required:true,
            unique:true
        },
        categoryImage:{type:String},
        parentId:{
            type:String, 
        },
        
},{timestamps:true});


module.exports=mongoose.model('Category',CategorySchema);