const mongoose = require('mongoose')
//Los datos que contendrá la colección
const StorageSchema = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String,
            unique:true
        }
    },
    {
        timestamps:true, //createdAt, updatedAt
        versioKey:false
    })

    module.exports = mongoose.model('storage', StorageSchema)