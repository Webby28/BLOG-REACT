const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    
},
{timestamps: true} //para saber cuando se creo y/o actualizo
);

module.exports = mongoose.model("User", CategorySchema);