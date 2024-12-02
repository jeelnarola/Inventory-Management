const mongoose = require('mongoose')
require('dotenv').config()
let {MONGODB_URL} = process.env
const Database = async() =>{
    try {
        await mongoose.connect(MONGODB_URL)
        console.log('DataBase CConnect...')
    } catch (error) {
        console.log(`Database Connect Error :- `,error)
    }
}

module.exports = Database