import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function Private(req, res, next) {
    const token = res.header('auth')
    if(!token){res.status(401).send('Access Denied')}

    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token')
    }
}