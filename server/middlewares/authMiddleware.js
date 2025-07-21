const jwt  = require("jsonwebtoken");
const asyncErrorHandler = require("../Utils/asyncErrorhandler");


const verifyToken = async(token, secretKey)=>{
    console.log("varify token")
  try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded:", decoded);
} catch (error) {
  console.error("JWT verification failed:", error.message);
}
    return jwt.verify(token, secretKey)
}
const autheticate = asyncErrorHandler(async (req, res, next) => {
  console.log("inside auth middleware")
  const authHeader = req.headers.authorization;
console.log(authHeader, "auth header")
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