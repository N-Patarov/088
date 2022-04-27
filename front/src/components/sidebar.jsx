import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Logo from '../photos/logo.svg';
import { ToggleButton, ListItemButton } from '@mui/material';
import {useState} from 'react';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const [color, setColor] = useState('#064663');
  
  function handleClick(){
    setColor('#ECB365');
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: "#064663",
            color: "#FFFFFF",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={Logo} style={{ paddingTop: '10%', height:100, width: 234.87 }} alt="React Logo" />
      
        <Divider />
        <List sx={{
          paddingTop : '20%',// selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            bgcolor: 'red',
            '&, & .MuiListItemIcon-root': {
              color: 'pink',
            },
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            bgcolor: 'orange',
          },  
      }}>
        <ListItem > 
            <Typography type="h2" style={{ fontSize: 30, fontWeight: 'bold' }}>Menu</Typography>
        </ListItem>
                  
            <ListItemButton button className='ListButton'>
              <ListItemIcon sx={{ color: '#FFFFFF'}}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText style={{ fontSize: 14}} primary={<Typography style={{ fontSize: 23}}>Home</Typography>} />
            </ListItemButton>
            <ListItem button>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText style={{ fontSize: 14}} primary={<Typography style={{ fontSize: 23}}>Profile</Typography>} />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#FFFFFF' }}>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText style={{ fontSize: 14}} primary={<Typography style={{ fontSize: 23}}>Saved</Typography>} />
            </ListItem>
        
        </List>
      </Drawer>
    </Box>
  );
}