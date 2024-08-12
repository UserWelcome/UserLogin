const User = require('../models/User_cricket');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const getHome = async (req, res) => {
    res.send("GET Request Called")
};
const register = async (req, res) => {
    console.log('signup')
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
        return res.status(400).json({ message: "all fields are required" });
    }
    ///check email field must be unique
    let existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();
    const data = { user: { id: newUser._id } }
    const token = jwt.sign(data, 'JWT_SECRET')
    res.status(201).json({ token, message: "User registered sucessfully" })

};
const login = async (req,res) => {
    console.log('login');
    const { email, password } = req.body;
    let existingUser = await User.findOne({ email });
    if (existingUser) {
        const match = await bcrypt.compare(password, existingUser.password);
        const payload = {
            _id: existingUser._id,
            uname: existingUser.userName,
            email: existingUser.email
        }
        if (match) {
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            console.log(existingUser._id);
            return res.status(200).json({ message: 'User logged in' })
        } else {
            return res.status(400).json({ message: 'email or password are Incorrect' })
        }

    } else {
        res.status(500).json({ message: 'Error occur while login' });
    }

};

module.exports = { register, login  ,getHome};