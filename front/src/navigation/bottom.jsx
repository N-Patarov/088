import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

export default function BottomNav () {
    const [value, setValue] = React.useState(0);
    var isZero = false;
    var isOne = false;
    var isTwo = false;
    if(value == 0) isZero = true;
    if(value == 1) isOne = true;
    if(value == 2) isTwo = true;
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ display: {sm: "flex", lg: "none" },backgroundColor: '#064663', position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >

        {isZero?
        (<BottomNavigationAction 
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Home" icon={<HomeIcon />} />
        )    :
        (
            <BottomNavigationAction 
            sx={{
                color: "#FFFF"
            }} label="Home" icon={<HomeIcon />} />  
        )
        }
        {isOne?
        (<BottomNavigationAction 
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Profile" icon={<PersonIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}} label="Profile" icon={<PersonIcon />} />
        )
        }
        {isTwo?
        (<BottomNavigationAction 
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Nearby" icon={<LocationOnIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}} label="Nearby" icon={<LocationOnIcon />} />
        )
        }
        
        
        
      </BottomNavigation>
    );
  };