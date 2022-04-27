import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from '../../photos/logo.svg';

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
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      
        <SidebarNav sidebar>
        <img src={Logo} style={{ paddingTop: '10%', paddingBottom: '10%', height:150, width: 234.87 }} alt="React Logo" />
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;