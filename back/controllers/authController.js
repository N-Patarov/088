import User from '../schema/userSchema.js';
import Joi from '@hapi/joi';
import bcrypt from 'bcryptjs';

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(6).required(),
})

export const userRegister = 
   async (req, res, err) => {

    //Check
    const validated = schema.validate(req.body);
    const emailExists = await User.findOne({email: req.body.email});
    if( validated && !emailExists) {
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
export const userLogin = 
   async (req, res, err) => {
    res.send("Login")
}
