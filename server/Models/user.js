const { DataTypes } = require('sequelize')
const sequelize = require('./../database/db') 


const User = sequelize.define('user',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    userEmail:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
      password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:"user"
    },
    
},)



module.exports = User