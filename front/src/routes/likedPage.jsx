import Liked from '../components/liked';
import { Grid } from '@mui/material';
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';
import LikedGrid from '../components/likedGrid';
import {Helmet} from "react-helmet";

export default function likedPage(){
    return(
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Харесани</title>
                <meta
                    name="description"
                    content="
                    Харесани статии - 088.news - Новините от България на едно място.
                    Запазени статии - 088.news - Новините от България на едно място.
                    България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/liked" />
            </Helmet>

            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>

                
                <div>
                                <PermanentDrawerLeft />      
                </div> 
            
                <div style={{marginLeft:'3%', display:'flex',alignItems: 'center', justifyContent: 'center'}}>
                  
                        <LikedGrid />
                  
                </div>
            </div>
            <Bottom />
        </div>
    )
}