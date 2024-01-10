require('dotenv').config()
const cors =  require('cors')

const express=require('express')
const mongoose=require('mongoose')
const postRoutes = require('./routes/posts')

const app=express()

app.use(express.json())

app.use(cors())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

app.use('/api/posts',postRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to db and we're live on",process.env.PORT)
    })
}).catch((err)=>{
    console.log('Couldnt connect \n',err)
})

