import Axios from "axios";
import {useState, useEffect} from 'react';
import jwt from 'jwt-decode';
import { Typography, Box, Button, Checkbox, FormControlLabel, FormGroup, FormControl, Alert } from '@mui/material';

export default function SetSources(){

    const [unchecked, setUnchecked] = useState([]);
    const [userSources, setUserSources] = useState([]);
    const [alert, setAlert] = useState();
    const [checked, setChecked] = useState([]);

    async function getData(){
        const hasToken = await localStorage.getItem("token");
        if(hasToken){
            const data = await jwt(hasToken);
            await Axios.get("http://localhost:8000/user/?id=" + data._id).then(
                (response) =>{
                    setUnchecked(["News.bg","Flagman.bg","Dir.bg","Vesti.bg","Fakti.bg","Nova.bg"].filter((x) => !response.data.sources.includes(x)))
                    setUserSources(response.data.sources);
                    setChecked(response.data.sources)
                },
            )
        }
    }
    useEffect( ()=>{
        getData();
    }, [])

    function handleCheck(e){  
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
         Axios.post("http://localhost:8000/setSource/?id=" + data._id, {sources: checked}).then(
             (response, error) => {
                 if(response.status === 200){setAlert(true)}
                 else{setAlert(false)}
                 setTimeout(() => {  window.location = "/"; }, 500);
                 
             }
             
         )
     }

    return(
        <div>
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
    )
}