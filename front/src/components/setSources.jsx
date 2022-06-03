import Axios from "axios";
import {useState, useEffect} from 'react';
import jwt from 'jwt-decode';

export default function SetSources(){
    
    const [name, setName] = useState('');

    async function getData(){
        const hasToken = await localStorage.getItem("token");
        const data = await jwt(hasToken);
        await Axios.get("http://localhost:8000/user/?id=" + data._id).then(
            (response) =>{
                setName(response.data.name);
            },
        )
    }
    useEffect( ()=>{
        getData();
    }, [])

    return(
        <div>{name}</div>
    )
}