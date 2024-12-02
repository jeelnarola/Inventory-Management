const jwt = require('jsonwebtoken');
require('dotenv').config()
let {JWT_SERCERT} = process.env
const SetToken = async(userid,res)=>{
    try {
       let token = jwt.sign({userid},JWT_SERCERT,{expiresIn:'15d'});
       res.status(201).cookie("jwt-Invetory",token,{
        maxAge:15 * 24 * 60 * 60 * 1000, // 15 days in MS
        httpOnly:true,
        sameSite:"strict"
    })
    return token;
    } catch (error) {
        console.log('Error in SetToken utils :- ',error.message);
        res.status(500).json({success:false,message:'Internal Error',error:error})
    }
}

module.exports = SetToken