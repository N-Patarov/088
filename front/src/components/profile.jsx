import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode'
import { Typography, Box, Button } from '@mui/material';


export default function Porfile(){
    document.title = "My Porfile"
    const [isLogedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    function logOut(){
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const hasToken = localStorage.getItem("token");
        if(hasToken) {
            setIsLoggedIn(true);
            const data = jwt(hasToken);
            Axios.get("http://localhost:8000/user/?id=" + data._id).then(
                (response) =>{
                    setName(response.data.name);
                    setEmail(response.data.email);        
                    setDate(response.data.date);  
                }
            )
        }
        else {setIsLoggedIn(false);}
        console.log("Token: " + hasToken);
    }, []) 
    
    if(isLogedIn == false) {
        return(
            <div style={{color: 'white'}}>You must login to continue.</div>
        );
    }
    return(
        <div style={{width: '50%'}}>
            <Typography variant="h2" sx={{color: '#ECB365'}}>Profile</Typography>
            <div style={{color: 'white'}}>
               

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <h2>Name:</h2>
                      <div style={{marginLeft: '20%'}}>{name}</div>
                    </Box>
                    
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <h2>Email:</h2>
                      <div style={{marginLeft: '20%'}}>{email}</div>
                    </Box>

                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                      <h2>Date:</h2>
                      <div style={{marginLeft: '20%'}}>{date.split("T")[0]}</div>
                    </Box>
                    <Box sx={{marginTop: '20px'}}>
                        <Button variant="contained" color="yellowish" sx={{color:'black'}}  onClick={logOut}>Log out</Button>
                    </Box>
            </div>
            
        </div>
    );
}