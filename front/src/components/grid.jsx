import { Grid } from '@mui/material';
import ArticleCard from './card';

export default function ArticleGrid(){
    return(
        <div style={{marginTop: '10%'}}>
            <Grid container spacing={3}>
                <ArticleCard />
            </Grid>
        </div>
       
    )
}