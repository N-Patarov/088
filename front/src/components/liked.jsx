import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode'
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography, Grid, Skeleton, Checkbox} from '@mui/material/';
import {ThumbUp, ChatBubble} from '@mui/icons-material';
import {format} from 'timeago.js';


export default function Liked(){
    document.title = "Liked"
    const [isLogedIn, setIsLoggedIn] = useState(false);
    const [listOfLiked, setListOfLiked] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    const hasToken = localStorage.getItem("token");
    
    async function getData(){  
        if(hasToken) {
            setIsLoggedIn(true);
            const data = jwt(hasToken);

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    user: data._id,
                }
              }
        
            console.log(config);
            
            await Axios.get(process.env.REACT_APP_API_URL + "/api/likes" ,config).then(
                (response) =>{
                    setListOfLiked(response.data); 
                    console.log(response.data);
                    setIsLiked(true);
                }        
            )
            
        }
        else {setIsLoggedIn(false);}
        
    }

    useEffect(() => {
        getData();
    }, []) 
    
    if(isLogedIn == false) {
        return(
            <div style={{display: 'flex',alignItems:'center',justifyContent: 'center',marginRight: '50%',color: 'white'}}>You must login to continue.</div>
        );
    }
    return(
        listOfLiked.map(
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
                                            <Checkbox checked = {isLiked} size="small" sx={{color: '#FFFFFF'}} color="yellowish" icon={<ThumbUp />} checkedIcon={<ThumbUp />}/>
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
            })
    );
}