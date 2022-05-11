import ArticleGrid from '../components/grid';
import ButtonAppBar from '../components/header';
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';
import Sidebar2 from '../components/sidebar/sidebar2';
import { Grid } from '@mui/material';

export default function HomePage(){
    
    return(
        <div>
            <Header />

            <div style={{ backgroundColor: '#02141C', display: 'flex', justifyContent: 'space-between'}}>  
                    
                    <div>
                        <PermanentDrawerLeft />      
                    </div>                      
                    <div style={{marginLeft:'3%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ArticleGrid />      
                    </div>
                            
            </div>
            <Bottom />
        </div>
        
    );
}