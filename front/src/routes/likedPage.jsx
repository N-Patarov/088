import Liked from '../components/liked';
import { Grid } from '@mui/material';
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';

export default function likedPage(){
    return(
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>

                
                <div>
                                <PermanentDrawerLeft />      
                </div> 
            
                <div style={{marginLeft:'3%', marginTop: '10%', display:'flex',alignItems: 'center'}}>
                    <Grid container spacing={2}>
                        <Liked />
                    </Grid>
                </div>
            </div>
            <Bottom />
        </div>
    )
}