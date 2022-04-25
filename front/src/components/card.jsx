import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material/';
import { useEffect, useState } from "react";
import Axios from 'axios';

export default function ArticleCard() {
    
    const [ listOfArticles, setListOfArticles ] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:8000/api").then(
            (response) =>{
                setListOfArticles(response.data);
            }
        )
    }, []);

   
   
    
    return(
        listOfArticles.map(
            (article) => {

                function LoadArticle () {
                    Axios.get("http://localhost:8000/article/?id=" + article._id).then(
                        (response) =>{
                            console.log(response.data._id);
                        }
                    )
                }

                if(article.createdAt)
                {let us = article.createdAt.split("T")[0]}

                function addTime(start, increment, respectDay = false) {
                    let pad = n => ('0' + n).slice(-2);
                    let timeToMins = time => time.split(':').reduce((h, m) => h*60 + m*1);
                    let minsToTime = (mins, respectDay = false) => `${pad((mins / 60 | 0) % (respectDay? 24 : Number.POSITIVE_INFINITY))}:${pad(mins%60)}`;
                    return minsToTime(timeToMins(start) + timeToMins(increment), respectDay);
                }

                return( 
                        <Grid item xs={3}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={article.imgLink}
                                    alt="Photo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {article.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.description}
                                    </Typography>
                                </CardContent>
                                
                                <CardActions style={{"justifyContent": "space-evenly"}}>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.when ? article.when.substr(4, 20) : article.when}
                                    </Typography>
                                    <Button size="small" variant="text" href={"/article?id=" + article._id} target="_blank">Прочети</Button>
                                    <Typography gutterBottom variant="h7" component="div">
                                        {article.source}
                                    </Typography>
                                </CardActions>
                                
                            </Card>
                        </Grid>
                );
            }       
        )
    );
}