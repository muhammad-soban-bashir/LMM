const { Sequelize } = require('sequelize');
require('dotenv').config({path:"./server/.env"});

// console.log('HOST:', process.env.HOST);
// console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
// console.log('DATABASE:', process.env.DATABASE);
// console.log('USERNAME:', process.env.USERNAME);
// console.log('PASSWORD:', process.env.PASSWORD);
// console.log('HOST_PORT:', process.env.HOST_PORT);
const sequelize = new Sequelize({
  dialect:'postgres',
  host: process.env.HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  username: process.env.USSERNAME,
  password:  "password123",
});

module.exports= sequelize










module.exports = sequelize;