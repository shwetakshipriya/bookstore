import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { sendMail } from "../helpers/sendMail.js";
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
          // Input validation
          if (!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        // Send welcome email to the user
        sendMail(email,"Welcome to BookStore","Welcome to BookStore, your number one source for all kinds of books. We're dedicated to providing you the very best of books, with an emphasis on variety, affordability, and a user-friendly shopping experience.",`Hi ,${fullname}, Thank you for registering with us. We are excited to have you on board. We will keep you updated with the latest books and offers. Happy reading!`);

        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// In your controller file (user.controller.js)
export const userProfile = async (req, res) => {
    try {
        // Fetch user details from the request object
        const { user } = req;

        // Return the user profile information
        res.status(200).json({
            message: "User profile retrieved successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
