import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from '../photos/logo.svg';
import Button from '@mui/material/Button';

export default function Header () {
    return (
      <Box>
        <AppBar positionMode="sticky" sx={{flexGrow: 1,width: '100%', backgroundColor: '#064663', display: "flex" }}>
          <Toolbar>   
              <Box sx={{margin: "auto"}}>              
                <div style={{ flexGrow: 1, display: "flex",}}>
                    <a href="/">
                        <img style={{width:40,height:30}} alt="Logo" src={Logo}></img>
                    </a>
                    
                    <Typography sx={{marginLeft:"5px", marginTop: "8px"}}>.News</Typography>
                </div>   
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
}