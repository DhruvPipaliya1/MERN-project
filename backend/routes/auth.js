const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_Token = "Dhruvisgoodboy@";

router.post('/createuser', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const setPass = await bcrypt.hash(req.body.password, salt);
    
    

    try {
    let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    user = await User.create({
        name: req.body.name,
        password: setPass,
        email: req.body.email,
    })
    const data = {
        user:{
            id: user.id
        }
    }
    const authToken = jwt.sign(data, JWT_Token);
    res.json({authToken});
     } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

router.post('/login', [
    body('email','Enter valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
], async(req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    try{ 
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error: "Enter Valid Credentials"});
        }

        let passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({error: "Enter valid Credentials"})
        }

        const data = {
            user:{
                id: user.id
            }
        }
    const authToken = jwt.sign(data, JWT_Token);
     res.json({authToken});
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }

})

router.post('/getUser', fetchuser, async(req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router