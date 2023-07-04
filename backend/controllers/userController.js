const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc register a user
//@route POST/api/user/register
//@access public
const registerUser = asyncHandler(async (req,res)=>{
    res.json({message: "created user"});
});

//@desc login a user
//@route POST/api/user/login
//@access public
const loginUser = asyncHandler(async (req,res)=>{
    res.json({message: "Login user"});
});

//@desc current user infor
//@route GET/api/user/current
//@access private
const currentUser = asyncHandler(async (req,res)=>{
    res.json({message: "current user infor"});
});

module.exports = {registerUser,loginUser ,currentUser};