const express = require('express')
const Database = require('./configs/db')
const UserRouter = require('./routers/user.routers')
const ProductRouter = require('./routers/product.routers')
const cookies = require('cookie-parser')
const invetoryManage = require('./middlewares/invetoryManage')
require('dotenv').config()

let {PORT} = process.env
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookies())
app.use('/Auth',UserRouter)
app.use('/Product',invetoryManage,ProductRouter)

app.listen(PORT,()=>{
    console.log("Server start.... :- ",PORT)
    Database()
})