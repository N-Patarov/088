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
                                
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                                <div style={{"display" : "flex"}}>
                                <Typography variant="body2" color="text.secondary">
                                    {article.createdAt ? article.createdAt.split("T")[1].substr(0, 5) + " " + article.createdAt.split("T")[0] : article.createdAt}
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div" style={{"paddingLeft" : "40%"}}>
                                    {article.source}
                                </Typography>
                                </div>
                                
                            </Card>
                        </Grid>
                );
            }       
        )
    );
}