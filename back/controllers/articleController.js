import Article from '../crawler/articleSchema.js';

const articleControlller = 
   async (req, res, err) => {
    res.type('json');
    
    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        Article.findById(id)
        .then(function(article){
            res.send(article);        
        }).catch(err);
    } else {
        res.send(err);
    }
}

export default articleControlller;