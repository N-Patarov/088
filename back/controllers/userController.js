import User from '../schema/userSchema.js';

const userController = 
   async (req, res, err) => {
    res.type('json');
    
    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        User.findById(id)
        .then(function(user){
            res.send(user);        
        }).catch(err);
    } else {
        res.send(err);
    }
}

export default userController;