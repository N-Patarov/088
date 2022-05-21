import Profile from '../components/profile'
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';

export default function PorfilePage(){
    return (
        <div>
            <Header />

            <div style={{}}>  
                    
                    <div>
                        <PermanentDrawerLeft />      
                    </div>                      
                    <div style={{marginTop:'200px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Profile />      
                    </div>
                            
            </div>
            <Bottom />
        </div>
    )
}