import { Grid } from '@mui/material';
import ArticleCard from './card';

export default function ArticleGrid(){
    return(
        <div style={{paddingLeft: '5%', paddingTop: '2%'}}>
            <Grid container spacing={3}>
                <ArticleCard />
            </Grid>
        </div>
       
    )
}