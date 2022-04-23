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
                                        {article.createdAt ? article.createdAt.split("T")[1].substr(0, 5) + " " + article.createdAt.split("T")[0].substr(5, 10) : article.createdAt}
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