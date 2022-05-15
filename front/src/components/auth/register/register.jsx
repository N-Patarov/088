import { Button, Box, TextField, FormControl, Typography, Link, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import styles from './register.module.scss';
import { styled } from '@mui/material/styles';
import Logo from '../../../photos/logo.svg';
import axios from 'axios';

export default function Register(){
    document.title = 'Register';
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const signUp = async (name,email,password) => {
      try{
        const headers = {"Content-Type": "application/json"}
        const body = {name: name, email: email, password: password}
        console.log(body)
        const res = await axios.post('localhost:8000/api/user/register', 
          {
            "email": "nikolayp1707@yahoo.com",
            "name": "test user",
            "password": "17070417"
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        console.log(res);
      } catch(e){
        console.log(e);
        console.log(name);
        console.log(email);
        console.log(password);
      }
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Click");
      signUp(name, email, password);
    }

    const handleName = (e) => {
      setName(e.target.value);
    }
    const handleEmail = (e) => {
      setEmail(e.target.value);
    }
    const handlePassword = (e) => {
      setPassword(e.target.value);
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
                        <img style={{width:65,height:50, marginBottom:"20px"}} src={Logo}></img>
                      </Box>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Typography variant="h1" fontSize="40px" fontWeight="bold" color="white">Register</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                          <PersonIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                          <TextField
                          className="textField" 
                          name= "name"
                          value={name}
                          onChange={(e) =>{
                            setName(e.target.value)
                          }}
                          sx={tx}
                          InputLabelProps={{
                              style: { color: 'white' },
                            }}      
                          id="name" 
                          autoComplete="name"
                          label="Name" variant="outlined" />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                          <EmailIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                          <TextField 
                          name= "email"
                          value={email}
                          onChange={(e) =>{
                            setEmail(e.target.value)
                          }}
                          sx={tx}
                          InputLabelProps={{
                              style: { color: 'white' },
                            }}       
                          autoComplete="email"
                        
                          id="email" 
                          label="Email" variant="outlined" />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                          <VpnKeyIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                          <TextField id="password" type="password" label="Password" variant="outlined"
                            name= "password"
                            value={password}
                            onChange={(e) =>{
                              setPassword(e.target.value)
                            }}
                          sx={tx}
                          InputLabelProps={{
                              style: { color: 'white' },
                            }}
                            autoComplete="password"
                            />
                      </Box>
                      <Box sx={{display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
                          <Button type="submit" variant="contained" onClick={handleSubmit} color="yellowish" sx={{width: '100%', color:'#FFFFF'}}>Log in</Button>
                      </Box>
                      <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                          <Link href="#" variant="body2" sx={{paddingRight:"20px", color:'#FFFF'}}>
                              Forgot password?
                          </Link>
                          <Link href="/login" variant="body2" sx={{color:'#FFFF'}}>
                              {"Already have an account? Sign in"}
                          </Link>
                      </Box>
                    </form>
                </FormControl>
          </div>
    );
}