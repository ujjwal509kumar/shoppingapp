const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

require("dotenv").config();



//import schema
const User = require("./schema/UserSchema");

//import routes
const registerRouter = require("./routes/RegisterRoute");
const otpRouter = require("./routes/OtpRoute");
const loginRouter = require("./routes/LoginRoute");
const profileRouter = require("./routes/ProfileRoute");
const forgottokenrouter = require("./routes/ForgotTokenRoute");
const googleuserroute = require("./routes/GoogleUserRoute")
const contactformroute = require("./routes/ContactFormRoute");

const Product = require("./api/AddProduct");

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

//for generating the forgotlink and sending on email
app.use("/forgotpassword", forgottokenrouter);

//for setting the password after regestration with google
app.use("/setpassword", googleuserroute);

//post the from data in databse and send email confirmation to user
app.use("/contactform", contactformroute);

//for adding the product to database
app.post("/addproduct", async (req, res) => {
    try {
        const existingProduct = await Product.findOne({ name: req.body.slug });
        if (existingProduct) {
            // If product exists, send an error response
            return res.status(400).send({ message: 'Product already exists' });
        }

        let product = new Product(req.body);
        let result = await product.save();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

// GET all product by category
app.get('/getproduct/:category', async (req, res) => {
    try {
        const categoryName = req.params.category;
        const products = await Product.find({ category: categoryName });

        if (products.length > 0) {
            res.status(200).send(products);
        } else {
            res.status(404).send({ message: 'Products not found for the specified category' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});



app.get('/api/products/:slug', async (req, res) => {
    try {
        const slug = req.params.slug;
        const foundProduct = await Product.findOne({ slug: slug });

        // Check if the product exists
        if (!foundProduct) {
            return res.status(404).send({ error: 'Product not found' });
        }

        // Find all variants of the product based on title and category
        const variants = await Product.find({ 
            title: foundProduct.title, 
            category: foundProduct.category 
        });

        // Organize variants by color and size
        let colorSizeSlug = {};
        for (let item of variants) {
            if (!colorSizeSlug[item.color]) {
                colorSizeSlug[item.color] = {};
            }
            colorSizeSlug[item.color][item.size] = { slug: item.slug };
        }

        // Send the product and its variants in the response
        res.json({
            product: foundProduct,
            variants: colorSizeSlug
        });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


//getting and verifying the forgotpass token
app.get("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ status: "User Does Not Exists!!" });
    }
    const secret = (process.env.JWT_SECREAT + oldUser.password);
    try {
        const verify = jwt.verify(token, secret);
        res.render("index", { email: verify.email, status: "Not Verified" });
    } catch (error) {
        console.log(error);
        res.send("<h2>Someone appears to be tampering with the security token, since your token is not being verified, which is why you are seeing this page.<br>If you changed your password and then clicked on the same link again from your mail, then ignore this warning.<br>If not then contact us immediately from the contact us page</h2>");
    }
});


//changing the new password after verifying the token
app.post("/forgotpassword/:id/:token", async (req, res) => {
    const { id, token } = req.params;
    const { password } = req.body;

    const oldUser = await User.findOne({ _id: id });
    if (!oldUser) {
        return res.json({ status: "User Not Exists!!" });
    }
    const secret = (process.env.JWT_SECREAT + oldUser.password);
    try {
        const verify = jwt.verify(token, secret);
        const encryptedPassword = await bcrypt.hash(password, 10);
        await User.updateOne(
            {
                _id: id,
            },
            {
                $set: {
                    password: encryptedPassword,
                },
            }
        );

        res.render("index", { email: verify.email, status: "verified" });
    } catch (error) {
        console.log(error);
        res.json({ status: "Something Went Wrong" });
    }
});

//listener
app.listen(port, () => console.log(`listening on localhost ${port}`));