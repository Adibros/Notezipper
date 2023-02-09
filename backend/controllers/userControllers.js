const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');

const registerUser = asyncHandler( async(req,res) =>{
    const {name,email,password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error('User Already exist')
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            isAdmin:user.isAdmin,
            email:user.email
        })
    }else{
        res.status(400)
        throw new Error("!Error occured");
    }

});

module.exports = {registerUser};