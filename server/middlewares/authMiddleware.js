const jwt  = require("jsonwebtoken");
const asyncErrorHandler = require("../Utils/asyncErrorhandler");


const verifyToken = async(token, secretKey)=>{
    
    return jwt.verify(token, secretKey)
}
const autheticate = asyncErrorHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error("User is not authenticated - missing token");
  }

  const token = authHeader.split(' ')[1];

  const payload = await verifyToken(token, "JWT_SECRET"); // FIXED HERE
  console.log("payload", payload);

  if (!payload) {
    throw new Error("User is not authenticated - invalid payload");
  }

  req.user = payload;
  next();
});

module.exports ={autheticate}