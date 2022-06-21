import Profile from '../components/profile'
import PermanentDrawerLeft from '../navigation/sidebar';
import Header from '../navigation/header';
import Bottom from '../navigation/bottom';
import {Helmet} from "react-helmet";

export default function PorfilePage(){
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Профил</title>
                <meta
                    name="description"
                    content="
                    Профил - 088.news - Новините от България на едно място.
                    Profile - 088.news - Новините от България на едно място.
                    България Новини. Украйна Новини. Всичко слъчващо се в България."
                />
                <link rel="canonical" href="https://088.news/profile" />
            </Helmet>

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