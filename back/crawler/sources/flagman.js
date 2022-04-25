import * as cheerio from 'cheerio';
import pretty from 'pretty';
import request from 'request';
import mongoose from 'mongoose';
import moment from 'moment-timezone';

import Article from '../articleSchema.js';

const flagman = 'https://www.flagman.bg';
var article = "";
var title = "";
var description = "";
var img = "";
var when = "";


export function scrapeFlagman () {
 
        request(flagman, (err, res, html) => {
            if(!err && res.statusCode == 200){
              (async () => {
                const $ = cheerio.load(html);
                $('.requisites').remove();
                $('.headerWrap').remove();

                var link = $('.more').first().attr('href');
                
                article = flagman + link;

                title = pretty($('.content').first().text());
                img = flagman + $('img').first().attr('src');
                description = pretty($('.description').first().find('.text').text());
               
                const dateBg = moment.tz(Date.now(), "Europe/Sofia");
                when = dateBg;

                const articleExist = await Article.exists({ link: article });
                console.log(new Date().toLocaleTimeString())
                console.log(article);
               
                //console.log(title);
                //console.log(description);
                //console.log(img);

                if(!articleExist){
                    var new_article = new Article({
                      title: title,
                      description: description,
                      link: article,
                      imgLink: img,
                      source: "Flagman.bg",
                      when: when
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
            $('h1').remove();
            $('.pictureHolder').remove();
            $('.dateBackground').remove();
            $('.resource').remove();
            $('.in-categories').remove();
            //console.log(pretty($('.infoHolder').text()));

            text = pretty($('.infoHolder').text());

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