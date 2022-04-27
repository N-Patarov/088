import { useEffect, useState } from "react";
import Axios from 'axios';
import ArticleCard from './components/card';
import ArticleGrid from './components/grid';
import ButtonAppBar from './components/header';
import HomePage from './routes/homePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ArticlePage from './routes/articlePage';
import { createTheme } from '@mui/material/styles';
export default function App(){
    const muiTheme = createTheme({
        overrides: {
          ListItem: {
            root: {
              "&$selected": {
                backgroundColor: "#ECB365",
                "&:hover": {
                  backgroundColor: "#ECB365",
                },
              },
            },
            button: {
              "&:hover": {
                backgroundColor: "#ECB365",
              },
            },
          },
        },
      });
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>   
                <Route path="/article" element={<ArticlePage />}/>            
            </Routes>
        </Router>                   
    );
}