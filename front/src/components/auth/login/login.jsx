import { Button, Box, TextField, FormControl, Typography, Link, Grid } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ErrorIcon from '@mui/icons-material/Error';
import styles from './login.module.scss';
import { styled } from '@mui/material/styles';
import Logo from '../../../photos/logo.svg';
import axios from 'axios';

export default function Login(){
    document.title = 'Login';

    async function checkIfLoged(){
      const isLogedIn = await localStorage.getItem("token") 
      if(isLogedIn){window.location = "/profile"}
      console.log(localStorage.getItem("token"))
    }
    useEffect(() => {
       checkIfLoged();
    },[])
   
    const [validE, setValidE] = useState(true);
    const [validP, setValidP] = useState(true);
    const [userExists, setUserExists] = useState(true);

    
    const emailRagex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    const passwordRagex = new RegExp("^.{6,}$");

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = async (email,password) => {
     
      if(emailRagex.test(email) == false){setValidE(false)}else{setValidE(true)}
      if(passwordRagex.test(password) == false){setValidP(false)}else{setValidP(true)}
      if(emailRagex.test(email) == true && passwordRagex.test(password) == true){
        try{
          const body = {email: email, password: password}
          const url = 'http://localhost:8000/api/user/login/';
          console.log(body)
          const res = await axios.post(url,
            body,
            {
              headers: {     
                'Content-Type': 'application/json',
              },
            }
          );
          localStorage.setItem("token", res.data)
          console.log(res);
          setUserExists(true);
          window.location = "/"
        } catch(e){
          setUserExists(false);
          console.log(e);
          console.log(email);
          console.log(password);
        }
      } else{ console.log("Not valid") }
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Click");
      signIn(email, password);
    }

    const handleEmail = (e) => {
    
      setEmail(e.target.value);
    }
    const handlePassword = (e) => {
     
      setPassword(e.target.value);
      console.log(e.target.value)
      console.log(validP)
    }
    const tx = {
      width:'100%',
      '& label.Mui-focused': {
        color: '#ECB365',
      },
        '& .MuiInput-underline:before': {
          borderBottomColor: '#ECB365',
        },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#ECB365',
      },
      '& .MuiOutlinedInput-root': {
          '& input':{
            color: 'white',
          },       
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: '#ECB365',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ECB365',
        },
        
      },
    };
    return(
          <div className={styles['form-wrapper']}>
                <FormControl>
                  <form onSubmit={handleSubmit}>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <a href="/">
                          <img style={{width:65,height:50, marginBottom:"20px"}} src={Logo}></img>
                        </a>
                      </Box>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography variant="h1" fontSize="40px" fontWeight="bold" color="white">Login</Typography>
                      </Box>    
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                          {validE ? <EmailIcon sx={{ color: 'white', mr: 1, my: 2 }} /> : <ErrorIcon color='error' sx={{ mr: 1, my: 5 }} />}
                          <TextField 
                          name= "email"
                          value={email}
                          onChange={(e) => handleEmail(e)}
                          error={!validE}
                          helperText={ validE ? "": "Incorect Email"}
                          required={true}
                          sx={tx}
                          InputLabelProps={{
                              style: { color: 'white' },
                            }}       
                          autoComplete="email"
                          id="email" 
                          label="Email" variant="outlined" />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                      {validP ? <VpnKeyIcon sx={{ color: 'white', mr: 1, my: 2 }} /> : <ErrorIcon color='error' sx={{ mr: 1, my: 5 }} />}
                          <TextField id="password" type="password" label="Password" variant="outlined"
                            name= "password"
                            value={password}
                            onChange={(e) => handlePassword(e)}
                            sx={tx}
                            InputLabelProps={{
                                style: { color: 'white' },
                              }}
                            error={!validP}
                            helperText={ validP ? "": "Must be atleast 6 characters"}
                            required={true}     
                            autoComplete="password"
                            />
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
                          <Button type="submit" variant="contained" onClick={handleSubmit} color="yellowish" sx={{width: '100%', color:'#FFFFF'}}>Login</Button>       
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '20px'}}>
                        <Typography color="error">{userExists ? "" : "User doesn't exists"}</Typography>
                      </Box>
                      <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                          <Link href="#" variant="body2" sx={{paddingRight:"20px", color:'#FFFF'}}>
                              Forgot password?
                          </Link>
                          <Link href="/register" variant="body2" sx={{color:'#FFFF'}}>
                              {"Don't have an account? Sign up"}
                          </Link>
                      </Box>
                    </form>
                </FormControl>
          </div>
    );
}