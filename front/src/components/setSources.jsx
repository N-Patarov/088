import {useEffect, useState} from 'react';
import Axios from 'axios';
import {Checkbox} from '@mui/material';
import jwt from 'jwt-decode';

export default function SetSources(){

    const [isLogedIn, setIsLoggedIn] = useState(false);
    const [userSources, setUserSources] = useState([]);
    const sources = ["News.bg","Flagman.bg","Dir.bg","Vesti.bg","Fakti.bg","Nova.bg"]

    useEffect(() => {
        const hasToken = localStorage.getItem("token");
        if(hasToken) {
            setIsLoggedIn(true);
            const data = jwt(hasToken);
            Axios.get("http://localhost:8000/user/?id=" + data._id).then(
                (response) =>{
                    setUserSources(response.data.sources)
                }
            )
        }
        else {setIsLoggedIn(false);}
        console.log("Token: " + hasToken);
    }, []) 

    userSources.map(
        (source) => {
        return(
        
            <div sx={{color: 'white'}}>
                {source}
            </div>
        
        )
    }
    )
}