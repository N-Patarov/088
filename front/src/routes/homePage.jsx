import ArticleGrid from '../components/grid';
import ButtonAppBar from '../components/header';
import PermanentDrawerLeft from '../components/sidebar';
import Sidebar from '../components/sidebar/Sidebar';

import { Grid } from '@mui/material';
export default function HomePage(){
    
    return(
        <Grid container>
            <Grid item xs={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={10}>
                <ArticleGrid />
            </Grid>           
        </Grid>
       
        
    );
}