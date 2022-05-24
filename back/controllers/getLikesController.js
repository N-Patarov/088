import Article from '../crawler/articleSchema.js';


const getLikesController = 
   async (req, res, err) => {
    res.type('json');
    
    const user = req.headers.user;
    try{
        if(user){
            const likedPosts = await Article.find({'likes.user': user});
            res.json(likedPosts)
        } else{
            res.send(err);
        }
    } catch(e){
        res.send(e);
    }
    
    
 
    
}

export default getLikesController;