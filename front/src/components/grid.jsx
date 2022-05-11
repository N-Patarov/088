import { Grid } from '@mui/material';
import ArticleCard from './card';

export default function ArticleGrid(){
    return(
        <div style={{marginTop: '10%', display:'flex',alignItems: 'center'}}>
            <Grid container spacing={2}>
                <ArticleCard />
            </Grid>
        </div>
       
    )
}