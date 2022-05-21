import Article from '../crawler/articleSchema.js';

const likeController = 
   async (req, res, err) => {
    res.type('json');
    
    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {

        Article.findById(id)
        .then( async function(article){
            if(article.likes.filter(like => like.user.toString() === req.user.id).length === 0)
            {return res.status(400).json({message: "article already liked"});}
                  
            
            article.likes.unshift({user: req.user._id})

            await article.save();
            
            res.json((article.likes)); 
             
        }).catch(err);

    } else {
        res.send(err);
    }
}

export default likeController;