const express = require("express");
require("dotenv").config();
const sequelize = require("./database/db.js");

const cors = require("cors");
const authRouter = require("./Routes/authRoutes.js");
const errorHandler = require("./middlewares/errorhandler.js");



(async()=>{
await sequelize.sync()
})()
  


const app = express();
const PORT = process.env.HOST_PORT || 3000;
app.use(
  cors()
);

app.use(express.json());
app.use("/auth", authRouter);

app.use(errorHandler)





app.listen(PORT, async () => {
  console.log(`Server is running on PORT ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
