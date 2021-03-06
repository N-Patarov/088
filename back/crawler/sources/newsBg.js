import * as cheerio from 'cheerio';
import pretty from 'pretty';
import request from 'request';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
import Article from '../articleSchema.js';

const newsBg = 'https://news.bg/latest';
var article = "";
var title = "";
var description = "";
var img = "";
var when = "";

export function scrapeNewsBg () {
 
        request(newsBg, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);

                article = $('.main-thumb').first().attr('href');
                img = $('.thumb').first().attr('src');
                title = $('h2').first().text();
                description = $('p').first().text();
                const dateBg = moment.tz(Date.now(), "Europe/Sofia");
                when = dateBg;
                
                const articleExist = await Article.exists({ link: article });
                
                console.log(article);
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
                      when: when,
                      source: "News.bg"
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

/*
function scrapeArticle () {
    request(article, (err, res, html) => {
        if(!err && res.statusCode == 200){
          (async () => {   
            const $ = cheerio.load(html);
            console.log(pretty($('.article-text').text()));

           
            var new_article = new Article({
              title: title,
              text: text,
              link: article,
          })
          
          await new_article.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
          })
          
        })
        ();
      }
    })
}
*/


   
