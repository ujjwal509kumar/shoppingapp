const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

require("dotenv").config();

//import routes
const registerRouter = require("./routes/RegisterRoute");
const otpRouter = require("./routes/OtpRoute");
const loginRouter = require("./routes/LoginRoute");
const profileRouter = require("./routes/ProfileRoute");

//config mongodb
const app = express();
const port = process.env.PORT || 5000;
const connection = process.env.CON_STRING;

//requirments for ejs and urlencoding
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

//middelwear
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//dbconnect
mongoose.connect(connection, 
    {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});



//post the data to database
app.use("/reguser", registerRouter);

//otp verification 
app.use("/otpver", otpRouter);

//get the data from database and try to login  the user
app.use("/login", loginRouter);

//for setting the jwt token in localstorage 
app.use("/user", profileRouter);
  
//listener
app.listen(port, () => console.log(`listening on localhost ${port}`));