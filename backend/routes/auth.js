const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    res.json({authToken})
     } catch (error) {
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router