const mongoose = require('mongoose')
 const productSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must be provided']
    },
    price:{
        type:Number,
        required:[true,'must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:String,
        default: 4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    name:{
        type:String,
        required:[true,'must be provided']
    },
    company:{
        type:String,
        // enum:['ikea','liddy','caressa','marcos']
        enum:{
            values:['ikea','liddy','caressa','marcos'], // if you want only few options to be shown and user needs to select from them
            message: '{VALUE} is not supported',
        }
    },
    
}) 

module.exports = mongoose.model('Product',productSchema)

