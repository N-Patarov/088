import Article from '../crawler/articleSchema.js';

const apiControlller = 
   async (req, res, err) => {
    Article.find({}).sort({_id:-1}).then(function(article){
        res.send(article);
    }).catch(err);
}
export default apiControlller;