import Article from '../crawler/articleSchema.js';

const apiControlller = 
   async (req, res, err) => {
    Article.find({}).then(function(article){
        res.send(article);
    }).catch(err);
}
export default apiControlller;