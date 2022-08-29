const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required: true,
        
    },
    password:{
        type:String,
        required:true,
        
    },
    photo:{
        type:String,
        required: "",
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:Array, 
        required: false,
    }
},
{timestamps: true} //para saber cuando se creo y/o actualizo
);

module.exports = mongoose.model("User", PostSchema);