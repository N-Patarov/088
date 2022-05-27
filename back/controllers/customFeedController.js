import User from '../schema/userSchema.js';

/*  Logic

    var first = ["News.bg", "Nova,bg", "Dir.bg", "Flagman.bg", "Fakti.bg"];
    var second = ["News.bg", "Nova,bg", "Dir.bg", "Flagman.bg"];

    var areDifferent = first.filter((x) => !second.includes(x)) !== 0;
    if(areDifferent){
    var difference = first.filter((x) => !second.includes(x));
    second.push(difference)
    second = second.flat().sort()
    console.log(second);
    }
*/

const customFeedController = 
   async (req, res, err) => {
    res.type('json');
    
    var sources = req.headers.sources;
    if(!sources){res.status(404).send('No headers found')}

    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        User.findById(id)
        .then(async function(user){

            var areDifferent = sources.filter((x) => !user.sources.includes(x)) !== 0;

            if(areDifferent) {
                var difference = sources.filter((x) => !user.sources.includes(x));
                user.sources.push(difference)
                user.sources = user.sources.flat().sort()
                await user.save();
            }

            res.json((user.sources)); 

        }).catch(err);
    } else {
        res.send(err);
    }
}

export default customFeedController;