const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        
    },
    profilePic:{
        type:String,
        default: "",
    },


},
{timestamps: true} //para saber cuando se creo y/o actualizo
);

module.exports = mongoose.model("User", UserSchema);