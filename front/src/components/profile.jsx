import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode'
import { Typography, Box, Button, Checkbox, FormControlLabel, FormGroup, FormControl, Alert } from '@mui/material';


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
    const [alert, setAlert] = useState();

    async function logOut(){
        await localStorage.removeItem('token');
        window.location = '/'
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
        Axios.post(process.env.REACT_APP_API_URL + "/setSource/?id=" + data._id, {sources: checked}).then(
            (response, error) => {
                if(response.status === 200){setAlert(true)}
                else{setAlert(false)}
                setTimeout(() => {  window.location.reload(false); }, 500);
                
            }
            
        )
    }
    
    async function getData() {
        const hasToken = localStorage.getItem("token");
        setIsLoggedIn(true);
        const data = jwt(hasToken);
        await Axios.get(process.env.REACT_APP_API_URL + "/user/?id=" + data._id).then(
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
        <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',width: '50%',}}>
            <div>
                <Typography variant="h2" sx={{color: '#ECB365'}}>Профил</Typography>
                <div style={{color: 'white'}}>
                

                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <h2>Име:</h2>
                        <div style={{marginLeft: '20%'}}>{name}</div>
                        </Box>
                        
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <h2>Имейл:</h2>
                        <div style={{marginLeft: '20%'}}>{email}</div>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <h2>Дата:</h2>
                        <div style={{marginLeft: '20%'}}>{date.split("T")[0]}</div>
                        </Box>

                        <Box sx={{marginTop: '20px'}}>
                            <Button variant="contained" color="yellowish" sx={{color:'black'}}  onClick={logOut}>Изход</Button>
                        </Box>
                    </div>
                <FormControl>
                    <FormGroup>
                        <Box sx={{marginTop: '20px',color:'white'}}>
                            <h2>Източници:</h2>
                            
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
                        <Box sx={{display: 'flex'}}>
                            <Button variant="contained" color="yellowish" onClick={saveSources}>Запази</Button>
                       
                            {alert? 
                                <Alert severity="success" sx={{backgroundColor: '#04293A', color:'white'}}>Запазено успешно</Alert>    
                                :
                                ""
                            }
                        </Box>
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    );
}