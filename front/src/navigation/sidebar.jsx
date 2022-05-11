import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Logo from '../photos/logo.svg';
import Button from '@mui/material/Button';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const SideBar = () => {

  const drawerWidth = 200;
    return (
      <Box sx={{ display: { xs:"none", sm: "none", lg: "flex" }}}>
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
        <img src={Logo} style={{ paddingTop: '10%', height:100, width: 200 }} alt="React Logo" />
      
        <Divider />
        <List sx={{
          paddingTop : '20%',// selected and (selected + hover) states 
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
  };
  const Header = () => {
    return (
      <Box >
        <AppBar position="static"sx={{ flexGrow: 1,width: '100%', backgroundColor: '#064663', display: {sm: "flex", lg: "none" }}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              088
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
  const BottomNav = () => {
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ display: { sm: "none" },position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  };

  return (
    <Box sx={{ maxWidth: 'xl' }}>
      <SideBar />
    </Box>
  );
}
