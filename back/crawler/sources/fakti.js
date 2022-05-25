import * as cheerio from 'cheerio';
import request from 'request';
import Article from '../articleSchema.js';

const faktiBg = 'https://fakti.bg/dnes';

var article = "";
var title = "";
var description = "";
var img = "";


export function scrapeFaktiBg () {
 
        request(faktiBg, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);

                article = "https://fakti.bg" + $('.list-img').first().attr('href');
                img = $('.list-img').first().find('a > picture > img').attr('src');
                title = $('.list-img').first().attr('title');
                description = $('.list-sub').first().text();
               
                
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
                      source: "Fakti.bg"
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