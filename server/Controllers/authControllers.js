const bcrypt = require("bcrypt");
const User = require("../Models/user.js");
const asyncErrorHandler = require("../Utils/asyncErrorhandler");
const { signupSchema, signinSchema } = require("../Utils/authValidators");
const  jwt  = require("jsonwebtoken");




const signUp = asyncErrorHandler(async (req, res) => {
  const { error } = signupSchema.validate(req.body);
  console.log(error);
  if (error) {
    const newError = new Error();
    newError.message = error;
    newError.name = "validation failed";
    throw newError;
  }

  const { userName, userEmail, password } = req.body;

  const existingUser = await User.findOne({ where: { userEmail } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    userName,
    userEmail,
    password: hashPassword,
  });

  res.status(201).json({
    success: true,
    message: "user created successFully",
    user: newUser,
  });
});

const signIn = asyncErrorHandler(async (req, res) => {
  const { error } = signinSchema.validate(req.body);
  console.log(error);
  if (error) {
    const newError = new Error();
    newError.message = error;
    newError.name = "validation failed";
    throw newError;
  }

  const { userEmail, password } = req.body;
  const existingUser = await User.findOne({ where: { userEmail } });

  if (!existingUser) {
    throw new Error("invalid Email");
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  console.log(isPasswordValid);
  if (!isPasswordValid) {
    throw new Error("invalid password");
  }

  const accessToken = jwt.sign(
    {
      id: existingUser.id,
      userName: existingUser.userName,
      userEmail: existingUser.userEmail,
      role: existingUser.role,
    },
    "JWT_SECRET",
    {
      expiresIn: "1d",
    }
  );

  console.log(accessToken)
  res.status(200).json({
    success: true,
    message: "login successful",
    user: existingUser,
    accessToken
  });
});
module.exports = {
  signUp,
  signIn,
};
