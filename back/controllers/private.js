import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default function Private(){
    const token = res.header('auth')
    if(!token){res.status(401).send('Access Denied')}

    try{
        req.user = jwt.verify(token, process.env.JWT_SECRET)
        
    }catch(err){
        res.status(400).send('Invalid Token')
    }
}