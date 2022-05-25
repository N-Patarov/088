import * as cheerio from 'cheerio';
import pretty from 'pretty';
import request from 'request';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
import Article from '../articleSchema.js';

const vestiBg = 'https://www.vesti.bg/posledni-novini';
var article = "";
var title = "";
var description = "";
var img = "";


export function scrapeVestiBg () {
 
        request(vestiBg, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);

                article = $('.gtm-ListNews-click').first().attr('href');
                img = $('.img-holder').children().first().attr('src');
                title = $('h2').first().text();
                description = $('h3').first().text();
               
                
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
                      source: "Vesti.bg"
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