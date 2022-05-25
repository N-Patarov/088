import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function BottomNav () {
    const [url, setUrl] = React.useState();
    const [value, setValue] = React.useState();
    var isZero = false;
    var isOne = false;
    var isTwo = false;
    if(value == 0) isZero = true;
    if(value == 1) isOne = true;
    if(value == 2) isTwo = true;

    const getUrl = () => {
        var path = window.location.pathname
        if(path == "/"){setValue(0)}
        else if(path == "/profile"){setValue(1)}
        else if(path == "/liked"){setValue(2)}
    }
    React.useEffect(() => {
        getUrl();
    })
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
        (<BottomNavigationAction component={Link} to="/"
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Home" icon={<HomeIcon />} />
        )    :
        (
            <BottomNavigationAction component={Link} to="/"
            sx={{
                color: "#FFFF"
            }} label="Home" icon={<HomeIcon />} />  
        )
        }
        {isOne?
        (<BottomNavigationAction  component={Link} to="/profile"
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Profile" icon={<PersonIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}}  component={Link} to="/profile" label="Profile" icon={<PersonIcon />} />
        )
        }
        {isTwo?
        (<BottomNavigationAction  component={Link} to="/liked"
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Liked" icon={<ThumbUpIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}} component={Link} to="/liked" label="Liked" icon={<ThumbUpIcon />} />
        )
        }
        
        
        
      </BottomNavigation>
    );
  };