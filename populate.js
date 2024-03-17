//instead of maually adding deta to hte db schema we are taking another route , 
// our products are listed in populate.js , we will pick them directly from this js file 
// we will to do the db connection for this too 
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany(); // to remove all the prev values (we dont have any )
        await Product.create(jsonProducts) // crating a db with the given schema and values 
        console.log('Success!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
start()