import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid, Skeleton, Checkbox} from '@mui/material/';
import {ThumbUp, ChatBubble} from '@mui/icons-material';
import {format} from 'timeago.js';
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
    async function like(id) {
        await Axios.get("http://localhost:8000/article?id=" + id).then(         
        (response) =>{
                console.log(response.data)
            },
            
        )
        console.log("like")
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
            (article, i) => {
                return( 
                        <Grid item sm={6} md={4} lg={3}>
                                                        
                            <Card sx={{ maxWidth: 345, backgroundColor: '#064663', color: '#ffff' }} key={article._id} >
                                
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
                                            <Checkbox size="small" sx={{color: '#FFFFFF'}} color="yellowish" icon={<ThumbUp />} checkedIcon={<ThumbUp />} onChange={() => {like(article._id)}} />
                                            <Typography sx={{fontSize: '12px',display: "grid",alignItems: "center", justifyContent: "center"}}>100</Typography>
                                        </div>
                                        <Typography variant="body2" sx={{color: '#d9d9d9'}}>
                                            {format(article.createdAt)}
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