import { Grid, Button } from '@mui/material';
import ArticleCard from './card';
import {useState} from 'react';

export default function ArticleGrid(){
    const [visibleCount, setVisibleCount] = useState(32);
    return(
        <div>
            <div style={{marginTop: '10%', display:'flex',alignItems: 'center'}}>
                <Grid container spacing={2}>
                    <ArticleCard visibleCount={visibleCount}/>
                </Grid>
                
            </div>
            <div style={{display:'flex',justifyContent: 'center', marginTop:'40px',marginRight:'3%',marginBottom:'70px'}}>
                <Button sx={{width: '100%', color:'#ECB365'}} variant="contained" color="blueish" onClick={()=>{setVisibleCount(visibleCount + 32)}}>Покажи още</Button>
            </div>
       </div>
    )
}