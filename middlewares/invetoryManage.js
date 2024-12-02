const cookies = require('cookie-parser');
const User = require('../models/user.Schema');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const invetoryManage = async(req,res,next) =>{
    try {
        let token = req.cookies['jwt-Invetory'];
        if(!token){
            res.status(401).json({success:false,message:"Unauthorized - No Token Provided"})
        }
        const decode = jwt.verify(token,process.env.JWT_SERCERT)
        if(!decode){
            res.status(401).json({success:false,message:"Unauthorized - Invalid Token"})
        }
        let user = await User.findById(decode.userid)
        if(!user){
            res.status(404).json({success:false,message:"User Not Found."})
        }
        req.user = user;
        next()
    } catch (error) {
        console.log('Error in invetoryManage Middlewares :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

module.exports = invetoryManage