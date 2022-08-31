const router = require('express').Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
        const {username, password, email} = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);

        try {
            const newUser = new User({
                    username,
                    hashedPassword,
                    email
                }
            );

            if (username.findOne(username)) {
                res.status(400).json({
                    message: "Username already exists"
                });
            } else if (email.findOne(email)) {
                res.status(400).json({
                    message: "Email already exists"
                });
            } else {
                await newUser.save();
                res.status(201).json({
                    message: "User created"
                });
            }


        } catch (err) {
            res.status(400).json({message: err.message});

        }
    }
);

// Login
router.post("/login", async (req, res) => {
        try {
            const {username, password} = req.body;
            const user = await User.findOne({username});

            if (!user) {
                res.status(400).json({message: "User not found"});
            } else {
                if (bcrypt.compareSync(password, user.password)) {
                    res.status(200).json({message: "User logged in"});
                } else {
                    res.status(400).json({message: "Incorrect password"});
                }
            }
        } catch (err) {
            res.status(400).json({message: err.message});
        }
    }
);


module.exports = router;