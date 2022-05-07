import ArticleGrid from '../components/grid';
import ButtonAppBar from '../components/header';
import PermanentDrawerLeft from '../components/sidebar';
import Sidebar from '../components/sidebar/Sidebar';
import Sidebar2 from '../components/sidebar/sidebar2';
import { Grid } from '@mui/material';
export default function HomePage(){
    
    return(
        <div style={{ backgroundColor: '#02141C' }}>        
                <PermanentDrawerLeft />       
                <ArticleGrid />               
        </div>
       
        
    );
}