const mongoose = require('mongoose')
//Los datos que contendrá la colección
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            unique:true
        },
        role:{
            type:["user","admin","audit"],
            default:"user",
        }
    },
    {
        timestamps:true, //createdAt, updatedAt
        versioKey:false
    })

    module.exports = mongoose.model('users', UserSchema)