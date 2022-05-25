import * as cheerio from 'cheerio';
import request from 'request';
import Article from '../articleSchema.js';

const nova = 'https://nova.bg/filter/all';

var article = "";
var title = "";
var description = "";
var img = "";


export function scrapeNova () {
 
        request(nova, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);

                article = $('.title.gtm-LastListNews-click').first().attr('href');
                img = $('.img-responsive').first().attr('src');
                title = $('.title.gtm-LastListNews-click').first().text();
                description = $('p').first().text();
               
                
                const articleExist = await Article.exists({ link: article });
                
                console.log(article);
                console.log(img);
                /*
                console.log(articleExist);
                console.log(article);
                console.log(img);
                console.log(title);
                console.log(description);
                */
                  
                if(!articleExist){
                    var new_article = new Article({
                      title: title,
                      description: description,
                      link: article,
                      imgLink: img,
                      source: "Nova.bg"
                  })
                  
                  await new_article.save(function(err,result){
                    if (err){
                        console.log(err);
                    }
                    else{
                        console.log(result)
                    }
                  })               
                }else{
                  console.log("article already exist")
                  console.log("retrying in 1 minute... \n");
                }
            })
            ();
            }
            
    })
} 