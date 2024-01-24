const User = require("../Schema/UserSchema");
const bcrypt = require('bcrypt');
const googleregister = async (req, res) => {
    try {
        
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        
        if (existingUser) {
            return res.status(200).json({ message: 'Email already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);

        // Create a new user
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User Registered Successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
        console.log(error);
    }

}
module.exports = googleregister;
