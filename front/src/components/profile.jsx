import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode'
import { Typography, Box, Button, Checkbox, FormControlLabel, FormGroup, FormControl } from '@mui/material';


export default function Porfile(){
    document.title = "My Porfile"
    const [isLogedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    // saved sources from db
    const [userSources, setUserSources] = useState([]);
    // checked sources to save in db
    const [checked, setChecked] = useState([]);
    // unchecked sources just for unchecked.map()
    const [unchecked, setUnchecked] = useState([]);
    
    function logOut(){
        localStorage.removeItem('token');
    }
    function handleCheck(e){  
       console.log(e.target.value)
       console.log(typeof(checked))
        if(checked.includes(e.target.value)){
            for( var i = 0; i < checked.length; i++){ 
    
                if ( checked[i] === e.target.value ) { 
                    checked.splice(i, 1); 
                }
            
            }
        }
        else{
            checked.push(e.target.value);
        }
        console.log(checked)
    }
    function saveSources(){
        const hasToken = localStorage.getItem("token");
        const data = jwt(hasToken);
        Axios.post("http://localhost:8000/setSource/?id=" + data._id, {sources: checked})
    }
    async function getData() {
        const hasToken = localStorage.getItem("token");
        setIsLoggedIn(true);
        const data = jwt(hasToken);
        await Axios.get("http://localhost:8000/user/?id=" + data._id).then(
            (response) =>{
                setName(response.data.name);
                setEmail(response.data.email);        
                setDate(response.data.date);
                setUserSources(response.data.sources);
                setChecked(response.data.sources)
                //set the unchecked sources
                setUnchecked(["News.bg","Flagman.bg","Dir.bg","Vesti.bg","Fakti.bg","Nova.bg"].filter((x) => !response.data.sources.includes(x)))
            },
           
            
        )
    }

    useEffect(() => {
       
        const hasToken = localStorage.getItem("token");
        if(hasToken) {
            getData()
        }
        else {setIsLoggedIn(false);}

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
            <FormControl>
                <FormGroup>
                    <Box sx={{marginTop: '20px',color:'white'}}>
                        <h2>Sources:</h2>
                        
                        {userSources.map( (source) => {
                            return (
                                
                                <FormControlLabel 
                                label = {source}
                                key={source}
                                control={
                                    <Checkbox color="yellowish" defaultChecked value={source} onChange={(e) => {handleCheck(e)}}/>
                                } />
                                
                            )
                        })  
                        }
                        {unchecked.map( (source) => {
                            return (
                                
                                <FormControlLabel 
                                label = {source}
                                key = {source}
                                control={
                                    <Checkbox color="yellowish" value={source} onChange={(e) => {handleCheck(e)}}/>
                                } />
                            
                            )
                        })
                        }    
                    </Box>
                    <Box>
                        <Button variant="contained" color="yellowish" onClick={saveSources}>Save</Button>
                    </Box>
                </FormGroup>
            </FormControl>
        </div>
    );
}