import { useEffect, useState } from "react";
import Axios from 'axios';
import ArticleCard from './components/card';
import ArticleGrid from './components/grid';
import ButtonAppBar from './components/header';

export default function App(){
    
    return(
        <div>
        <ButtonAppBar />
        <ArticleGrid />
        </div>
       
        
    );
}