const Joi = require('joi')


const signupSchema =  Joi.object({
   userName:Joi.string().min(3).max(30).required(),
   userEmail:Joi.string().email().required(),
   password:Joi.string().min(5).required()

})


const signinSchema =  Joi.object({
   
   userEmail:Joi.string().email().required(),
   password:Joi.string().min(5).required()

})


module.exports= {signupSchema,signinSchema}