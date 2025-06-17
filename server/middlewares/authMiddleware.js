const jwt  = require("jsonwebtoken");
const asyncErrorHandler = require("../Utils/asyncErrorhandler");


const verifyToken = async(token, secretKey)=>{
    
    return jwt.verify(token, secretKey)
}

const autheticate = asyncErrorHandler(async(req,res,next)=>{
     
    const authHeader = req.headers.authorization

    if(!authHeader){
        throw new Error("user is not authenticated")
    }

    const token = authHeader.split(' ')[1];

const paylaod = await verifyToken(token, 'JWT_SECRET')
console.log(paylaod)
if(!paylaod){
     throw new Error("user is not authenticated")

}
req.user = paylaod

next()

})

module.exports ={autheticate}