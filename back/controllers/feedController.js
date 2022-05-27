import User from '../schema/userSchema.js';
import Article from '../crawler/articleSchema.js';

const feedController = 
   async (req, res, err) => {
    res.type('json');

    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        User.findById(id)
        .then(async function(user){
           
            Article.find( { source: { $in: user.sources } } ).sort({_id:-1}).then(
                function(article){
                    res.send(article);
                }
            )

        }).catch(err);
    } else {
        res.send(err);
    }
}

export default feedController;