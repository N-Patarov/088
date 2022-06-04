import Liked from '../components/liked';
import { Grid } from '@mui/material';
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';
import LikedGrid from '../components/likedGrid';

export default function likedPage(){
    return(
        <div>
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