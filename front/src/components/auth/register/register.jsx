import { Button, Box, TextField, FormControl, Typography, Link, Grid } from "@mui/material";
import React from "react";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import styles from './register.module.scss';
import { styled } from '@mui/material/styles';
import Logo from '../../../photos/logo.svg';

export default function Login(){
    document.title = 'Register';
    const [show, setShow] = React.useState(false);
    const CssTextField = styled(TextField)({
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
      });
    return(
          <div className={styles['form-wrapper']}>
                <FormControl>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                      <img style={{width:65,height:50, marginBottom:"20px"}} src={Logo}></img>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                      <Typography variant="h1" fontSize="40px" fontWeight="bold" color="white">Register</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                        <PersonIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                        <CssTextField 
                        sx={{width:'100%'}}
                        InputLabelProps={{
                            style: { color: 'white' },
                          }}         
                        id="input-with-sx" 
                        label="Name" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                        <EmailIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                        <CssTextField 
                        sx={{width:'100%'}}
                        InputLabelProps={{
                            style: { color: 'white' },
                          }}         
                        id="input-with-sx" 
                        label="Email" variant="outlined" />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', paddingTop: '20px', justifyContent: 'center'}}>
                        <VpnKeyIcon sx={{ color: 'white', mr: 1, my: 2 }} />
                        <CssTextField id="input-with-sx" type={show ? "text" : "password"} label="Password" variant="outlined"
                         sx={{width:'100%'}}
                         InputLabelProps={{
                            style: { color: 'white' },
                          }} />
                    </Box>
                    <Box sx={{display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
                        <Button variant="contained" color="yellowish" sx={{width: '100%', color:'#FFFFF'}}>Log in</Button>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px'}}>
                        <Link href="#" variant="body2" sx={{paddingRight:"20px", color:'#FFFF'}}>
                            Forgot password?
                        </Link>
                        <Link href="/register" variant="body2" sx={{color:'#FFFF'}}>
                            {"Already have an account? Sign in"}
                        </Link>
                    </Box>
                </FormControl>
          </div>
    );
}