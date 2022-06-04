import { Grid } from '@mui/material';
import Liked from './liked';

export default function LikedGrid(){
    return(
        <div style={{marginTop: '10%', display:'flex',alignItems: 'center'}}>
            <Grid container spacing={2}>
                <Liked />
            </Grid>
        </div>
       
    )
}