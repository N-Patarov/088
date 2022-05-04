import User from '../schema/userSchema.js';
import Joi from '@hapi/joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(6).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(6).required(),
})

// Register
export const userRegister = 
   async (req, res, err) => {

    //Check
    const validated = registerSchema.validate(req.body);
    const emailExists = await User.findOne({email: req.body.email});
    if( !validated.error && !emailExists) {

        //Encrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Save
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        try{
            await user.save();
            res.send({user: user._id});
        }
        catch(err){
            res.send(err);
        }
    } else{
        res.send(400);
    }
}

//Login
export const userLogin = 
   async (req, res, err) => {    

    //Check
    const validated = loginSchema.validate(req.body);
    const user = await User.findOne({email: req.body.email});
    var validPassword = '';
    if(user){
        validPassword = await bcrypt.compare(req.body.password, user.password)
    }
    

    if( !validated.error && user && validPassword) {

        // JWT
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
        res.header('auth', token).send(token)
        //res.send("User logged in successfully!")
       
    } else{
        res.status(400).send("Email or password is wrong");
    }
}
