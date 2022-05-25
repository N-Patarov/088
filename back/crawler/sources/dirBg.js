import * as cheerio from 'cheerio';
import request from 'request';
import Article from '../articleSchema.js';

const dirBg = 'https://dir.bg/latest-news';

var article = "";
var title = "";
var description = "";
var img = "";


export function scrapeDirBg () {
 
        request(dirBg, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);

                article = $('.img-wrapper').first().attr('href');
                img = $('.img-wrapper').first().find('a > img').attr('data-cfsrc');
                title = $('.img-wrapper').first().attr('title');
                description = $('.description').first().text();
               
                
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
                      source: "Dir.bg"
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