const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc register a user
//@route POST/api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  //Hash Password0112214565
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  }else{
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc login a user
//@route POST/api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

//@desc current user infor
//@route GET/api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user infor" });
});

module.exports = { registerUser, loginUser, currentUser };
