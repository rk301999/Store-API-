require('dotenv').config()
require('express-async-errors') //instead of creating out try catch block , we use this package that handles our err

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1>')
})
app.use('/api/v1/products',productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000 ;

const start =async()=>{
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>console.log('server is listening'))
    } catch (error) {
        console.log(error)
    }
}
start()