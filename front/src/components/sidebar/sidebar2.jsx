import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from '../../photos/logo.svg';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

    const SidebarNav = styled.nav`
    background: #064663;
    width: 240px;
    height: 100vh;
    display: block;
    justify-content: center;
    position: fixed;
    top: 0;

    z-index: 10;
  `;

  const SidebarWrap = styled.div`
    width: 100%;
  `;

  const Sidebar = () => {
    return (
      <div style={{ display: { xs: "none", sm: "flex" } }}>
        <IconContext.Provider value={{ color: '#fff' }}>
        
          <SidebarNav sidebar >
          <img src={Logo} style={{ paddingTop: '10%', paddingBottom: '10%', height:150, width: 234.87 }} alt="React Logo" />
            <SidebarWrap>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </div>
    );
  };

  const BottomNav = () => {
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ display: { md: "none" } }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  };

  return (
    <Box sx={{ maxWidth: 'xl' }}>
      <Sidebar />
      <BottomNav />
    </Box>
  );
}