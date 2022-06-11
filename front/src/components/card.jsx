import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid, Skeleton, Checkbox, Button} from '@mui/material/';
import {ThumbUp, ChatBubble} from '@mui/icons-material';
import {format} from 'timeago.js';
import jwt from 'jwt-decode';
import { useEffect, useState } from "react";
import Axios from 'axios';
import SkeletonGrid from './Skeleton';


export default function ArticleCard(props) {
    
    const [ listOfArticles, setListOfArticles ] = useState([]);
    const [listOfLiked, setListOfLiked] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
          

    async function getLiked(){  
        const hasToken = localStorage.getItem("token");
        const data = await jwt(hasToken);

        if(hasToken) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    user: data._id,
                }
              }
        
            console.log(config);
            
            await Axios.get("http://localhost:8000/api/likes" ,config).then(
                (response) =>{
                    setListOfLiked(response.data._id); 
                }        
            )
        }
        console.log(listOfLiked);
    }
    async function getData() {
        const hasToken = localStorage.getItem("token");

        if(hasToken) {
            const data = await jwt(hasToken);
            const user = data._id
            
                await Axios.get("http://localhost:8000/feed/?id=" + user).then(         
                (response) =>{
                        setListOfArticles(response.data);
                        setIsLoading(false)
                },
                
            )
        } else{
        
            await Axios.get("http://0.0.0.0:8000/api").then(         
                (response) =>{
                        setListOfArticles(response.data);
                        setIsLoading(false)
                },
                    
            )
        }
    }
    async function like(id) {
        const isLogedIn = await localStorage.getItem("token") 
        const data = jwt(isLogedIn);   
        const headers = {user: data._id}

        let body = {
            'body': 'body'
        }
        const config = {
            headers: {
                user: data._id,
            }
          }
          
        if(isLogedIn){
            await Axios.put("http://0.0.0.0:8000/article/like/?id=" + id, body, config)
            console.log(config);
        } else{ console.log("Log in first ")}
    }

    useEffect(() => {
        getData()
        //getLiked()
    }, []);

    if(isLoading) {
        return(
            <SkeletonGrid />
        )
    }
    return(
        listOfArticles.slice(0, props.visibleCount).map(
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
                                            <Typography sx={{fontSize: '12px',display: "grid",alignItems: "center", justifyContent: "center"}}>{article.likes.length}</Typography>
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