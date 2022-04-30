import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid, Skeleton} from '@mui/material/';
import {ThumbUp, ChatBubble} from '@mui/icons-material';
import { useEffect, useState } from "react";
import Axios from 'axios';
import SkeletonGrid from './Skeleton';

export default function ArticleCard() {
    
    const [ listOfArticles, setListOfArticles ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    async function getData() {
        await Axios.get("http://localhost:8000/api").then(         
        (response) =>{
                setListOfArticles(response.data);
                setIsLoading(false)
            },
            
        )
    }
    useEffect(() => {
        getData()
    }, []);

    if(isLoading) {
        return(
            <SkeletonGrid />
        )
    }
    return(
        listOfArticles.map(
            (article) => {
                return( 
                        <Grid item xs={3}>                             
                            <Card sx={{ maxWidth: 345, backgroundColor: '#064663', color: '#ffff' }}>
                                <a href={"/article?id=" + article._id} target="_blank">
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={article.imgLink}
                                        alt="Photo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffff'}}>
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{color: '#d9d9d9'}}>
                                            {article.description}
                                        </Typography>
                                    </CardContent>
                                    </a>
                                    <CardActions style={{"justifyContent": "space-evenly"}}>
                                        <div style={{display: "grid",alignItems: "center"}}>
                                            <IconButton size="small" sx={{color: '#ECB365'}}>
                                                <ThumbUp fontSize="inherit" />               
                                            </IconButton>
                                            <Typography sx={{fontSize: '12px',display: "grid",alignItems: "center", justifyContent: "center"}}>100</Typography>
                                        </div>
                                        <Typography variant="body2" sx={{color: '#d9d9d9'}}>
                                            {article.when ? article.when.substr(4, 17) : article.when}
                                        </Typography>
                                        <Typography gutterBottom variant="h7" component="div"  sx={{color: '#ECB365'}}>
                                            {article.source}
                                        </Typography>
                                    </CardActions>
                                </Card>
                          </Grid>  
                       
                )
            }        
        )

        )
    }