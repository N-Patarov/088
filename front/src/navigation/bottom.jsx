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
    const [isLogedIn, setIsLoggedIn] = React.useState();

    var isZero = false;
    var isOne = false;
    var isTwo = false;
    if(value == 0) isZero = true;
    if(value == 1) isOne = true;
    if(value == 2) isTwo = true;

    const checkIfLoged = async () => {
        const hasToken = await localStorage.getItem("token");
        if (hasToken){setIsLoggedIn(true)}
        else{setIsLoggedIn(false)}
      }

    const getUrl = () => {
        var path = window.location.pathname
        if(path == "/"){setValue(0)}
        else if(path == "/profile"){setValue(1)}
        else if(path == "/liked"){setValue(2)}
    }
    React.useEffect(() => {
        getUrl();
        checkIfLoged();
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
            }} label="Начало" icon={<HomeIcon />} />
        )    :
        (
            <BottomNavigationAction component={Link} to="/"
            sx={{
                color: "#FFFF"
            }} label="Начало" icon={<HomeIcon />} />  
        )
        }
        {isOne?
        (<BottomNavigationAction  component={Link} to={isLogedIn? "/profile" : "/login"}
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Профил" icon={<PersonIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}}  component={Link} to={isLogedIn? "/profile" : "/login"} label="Профил" icon={<PersonIcon />} />
        )
        }
        {isTwo?
        (<BottomNavigationAction  component={Link} to={isLogedIn? "/liked" : "/login"}
            sx={{
                "& .Mui-selected, .Mui-selected, svg": {color: "#ECB365"}
            }} label="Запазени" icon={<ThumbUpIcon />} />
        )    :
        (
            <BottomNavigationAction sx={{color: '#FFFF'}} component={Link} to={isLogedIn? "/liked" : "/login"} label="Запазени" icon={<ThumbUpIcon />} />
        )
        }
        
        
        
      </BottomNavigation>
    );
  };