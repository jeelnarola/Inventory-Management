const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        Enum:['user','supplier'],
        default:'user'
    }
})

UserSchema.pre('save',async function(next) {
    if(!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password,10);
    next();
})

UserSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password,this.password)
    } catch (error) {
        console.group('Bcrypt Comapre Password..')
    }
}

const User = mongoose.model('User',UserSchema);

module.exports = User