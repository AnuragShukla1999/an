import express from "express";
import User from "../model/userSchema.js";
import jwt from "jsonwebtoken";


export const SignUp = async (req, res) => {
    const { email, password } = req.body;


    try {
        const user = new User({
            email, password
        });

        await user.save();

        return res.status(201).json({
            message: "Account created successfully",
            success: true
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
};



export const SignIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(401).json({
                message: "All fields are required.",
                success: false
            })
        };

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(501).json({
                message: "User not exist",
            })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h', })

        return res.status(201).cookie('access_token', token, {
            httpOnly: true,
        }).json({
            message: "sign in successfully",
            token,
            success: true
        })
    } catch (error) {
        next(error);
    }
}