const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Router } = require('express')
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        minLength:[5,'minmum length'],
        maxLength:25,
        trim:true
    },
    lname:{
        type:String,
        minLength:[5,'minmum length'],
        maxLength:25,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    age:{
        type:Number
    },
    tokens:[
        {
            token: { type:String } 
        }
    ]
},{
    timestamps:true
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    return user
}

userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 12)
    next()
})

userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findUser = async (email,password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error('invalid email')
    flag = await bcrypt.compare(password, user.password)
    if(!flag) throw new Error('invalid pass')
    return user
}
const User = mongoose.model('User', userSchema)
module.exports =User



Router.post('/logout',authMy,async(req,res)=>{
    try{
        req.user.tokens=req.user=>{
    console.log(single.token)
    return single.token !=req.token
    })
    await req.user.save()
    res.send('logged out')
}
catch (e){
    res.send('erroe')
}

