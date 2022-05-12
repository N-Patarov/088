import { useEffect, useState } from "react";
import Axios from 'axios';
import ArticleCard from './components/card';
import ArticleGrid from './components/grid';
import ButtonAppBar from './components/header';
import HomePage from './routes/homePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ArticlePage from './routes/articlePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginPage from './routes/loginPage';
import RegisterPage from './routes/registerPage';

export default function App(){
    const muiTheme = createTheme({
      palette: {
        darkBlueish:{
          main: '#04293A',
        },
        blueish: {
          main: '#064663',
        },
        yellowish: {
          main: '#ECB365',
        }  
      },
      });
    return(
      <ThemeProvider theme={muiTheme}>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>   
                <Route path="/article" element={<ArticlePage />}/>   
                <Route path="/login" element={<LoginPage />}/> 
                <Route path="/register" element={<RegisterPage />}/>              
            </Routes>
        </Router>  
      </ThemeProvider>
                         
    );
}