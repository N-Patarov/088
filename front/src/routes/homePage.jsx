import ArticleGrid from '../components/grid';
import ButtonAppBar from '../components/header';
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';
import Sidebar2 from '../components/sidebar/sidebar2';
import { Grid } from '@mui/material';
import {Helmet} from "react-helmet";

export default function HomePage(){
    document.title = "088.news";
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Начало</title>
                <meta
                    name="description"
                    content="Начало - 088.news - Новините от България на едно място.
                        България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/" />
            </Helmet>

            <Header />

            <div style={{ backgroundColor: '#02141C', display: 'flex', justifyContent: 'space-between'}}>  
                    
                    <div>
                        <PermanentDrawerLeft />      
                    </div>                      
                    <div style={{marginLeft:'3%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ArticleGrid />      
                    </div>
                            
            </div>
            <Bottom />
        </div>
        
    );
}