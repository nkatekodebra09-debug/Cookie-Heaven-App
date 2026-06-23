const bcrypt = require('bcryptjs');
const User = require('../models/user');
const generateToken = require('../utils/generateToken');

const registerUser = async (req, res) => {

    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({
            message: 'User already exists'
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id)
    });
}

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(400).json({
            message: 'Invalid Credentials'
        })
    }

    res.json({
        token: generateToken(user._id)
    })
}

const me = async (req, res) => {
    res.json(req.user)
}

module.exports = {
    registerUser,
    login,
    me
}