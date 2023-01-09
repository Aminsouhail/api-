const express=require('express')
const connectDB = require('./config/connect.DB')
 // creat express app 

 const app=express()

connectDB()



 const PORT=7000
 // listen 
 app.listen (port.(err)=>err?console.log(err):confirm,console.log('listing on ${PORT}`))