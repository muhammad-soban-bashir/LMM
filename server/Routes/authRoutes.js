

const express = require('express');
const { signUp, signIn } = require('../Controllers/authControllers');
const { autheticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/check-auth', autheticate,(req,res)=>{
    const user = req.user

    res.status(200).json({
        success:true,
        message:"authenticate user",
        user,
    })
});



module.exports = router;

