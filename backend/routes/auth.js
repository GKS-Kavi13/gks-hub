import express from 'express'
import User from '../models/User.js'
import { protect } from '../middleware/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router()

// Register a new user

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try{
    if(!username || !email || !password){
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({
        username,
        email,
        password
    });
    const token = generateToken(user._id);
    res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token
    });
}catch(error){
    res.status(500).json({ message: 'Server error' });
}
});

//Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
    if(!email || !password){
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    const user = await User.findOne({ email });
    if(!user || (await user.matchPassword(password))){
       return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = generateToken(user._id);
    res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token
    });
}catch(error){
    res.status(500).json({ message: 'Server error' });
}
});

router.get('/profile', protect, async (req, res) => {
    // This is a placeholder. In a real application, you would authenticate the user and fetch their profile.
    res.status(200).json(req.user);
});

//Generate JWT token
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: '30d'
    });
}

export default router;