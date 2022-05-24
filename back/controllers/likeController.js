import Article from '../crawler/articleSchema.js';

const likeController = 
   async (req, res, err) => {
    res.type('json');
    
    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {

        Article.findById(id)
        .then( async function(article){
            const user = req.headers.user;
            const hasBeenLiked = article.likes.some(like => like.user === user);
            const likedPosts = Article.find({likes: user}).populate('likes');
            if(hasBeenLiked)
            {return res.status(400).json({message: "article already liked"})}
            else{
                article.likes.unshift({user: req.headers.user})

                await article.save();
                res.json((article.likes)); 
                console.log(likedPosts)
            }     
            
            

        }).catch(err);

    } else {
        res.send(err);
    }
}

export default likeController;