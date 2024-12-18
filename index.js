const express = require('express')
const Database = require('./configs/db')
const UserRouter = require('./routers/user.routers')
const ProductRouter = require('./routers/product.routers')
const cookies = require('cookie-parser')
const invetoryManage = require('./middlewares/invetoryManage')
const checkStock = require('./utils/checkStock')

const cors = require('cors')
require('dotenv').config()

let {PORT} = process.env
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookies())
app.get('/',(req,res)=>{
    res.status(201).json({message:'Welcome To Inventroy Management....'})
})
app.use('/Auth',UserRouter)
app.use('/Product',invetoryManage,ProductRouter)
checkStock()
app.use(cors())

app.listen(PORT,()=>{
    console.log("Server start.... :- ",PORT)
    Database()
})