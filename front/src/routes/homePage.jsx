import ArticleGrid from '../components/grid';
import ButtonAppBar from '../components/header';
import PermanentDrawerLeft from '../components/sidebar';
import { Grid } from '@mui/material';
export default function HomePage(){
    
    return(
        <Grid container>
            <Grid item xs={2}>
                <PermanentDrawerLeft />
            </Grid>
            <Grid item xs={10}>
                <ArticleGrid />
            </Grid>           
        </Grid>
       
        
    );
}