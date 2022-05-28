import User from '../schema/userSchema.js';

/*  Logic
 
    var first = ["News.bg", "Nova,bg", "Flagman.bg", "Fakti.bg"];
    var second = ["News.bg", "Nova,bg", "Dir.bg"];

    var areDifferent = first.filter((x) => !second.includes(x)) !== 0;

    if(areDifferent){

    var difference = first.filter((x) => !second.includes(x));
    var difference2 = second.filter((x) => !first.includes(x));

    second.pop(difference2)
    second.push(difference)
    second = second.flat().sort()

    console.log(second);
    
    }

*/

const setSourcesController = 
   async (req, res, err) => {
    res.type('json');
    
    var sources = req.body.sources;
    if(!sources){res.status(404).send('No body found')}

    var id = req.query.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        User.findById(id)
        .then(async function(user){
           
            var areDifferent = sources.filter((x) => !user.sources.includes(x)) !== 0;

            if(areDifferent) {
                user.sources = sources;
                await user.save();
            }

            res.status(200).send((user.sources)); 

        }).catch(err);
    } else {
        res.send(err);
    }
}

export default setSourcesController;