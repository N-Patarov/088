import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt from 'jwt-decode'
import { Typography, Table, TableBody, TableCell,TableContainer, TableHead, TableRow, Paper} from '@mui/material';


export default function Porfile(){
    document.title = "My Porfile"
    const [isLogedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

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
        <div>
            <Typography variant="h2" sx={{color: '#ECB365'}}>Profile</Typography>
            <div style={{color: 'white'}}>
                
                <div>You are logged in.</div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{date}</div>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  >
                {name}
              </TableCell>
              <TableCell > {email}</TableCell>
              <TableCell > {date}</TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}